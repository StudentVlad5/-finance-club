import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { Formik } from 'formik';
import { closeModalWindow } from 'hooks/modalWindow';
import { cleanModal } from 'redux/modal/operation';
import { modalComponent } from 'redux/modal/selectors';
import { register } from 'redux/auth/operations';
import schemas from 'utils/schemas';
import {
  ContainerRadioButton,
  InputWithStyle,
  LabelRadioButton,
  LabelRadioButtonCheck,
  LabelRadioButtonContainer,
  ListRadioButton,
  SBtnLight,
  TitlePackage,
} from './RegisterModal.styled';
import {
  Error,
  FormField,
  FormLabel,
  FormList,
  FormTitle,
  FormInput,
  StyledForm,
} from 'components/baseStyles/Form.styled';
import { Backdrop, CloseBtn, Modal } from 'components/baseStyles/Modal.styled';
import { addReload } from 'redux/reload/slice';

export const RegisterModal = () => {
  const modal = useSelector(modalComponent);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleChangeClass = e => {
    const listPackage = document.querySelectorAll('.packageContainer');
    listPackage.forEach(it =>
      it.dataset.info === e.currentTarget.dataset.info
        ? it.classList.add('active')
        : it.classList.remove('active'),
    );
  };

  const closeDataModal = (e) => {
    e.preventDefault();
    dispatch(cleanModal());
    closeModalWindow();
  };

  const createMember = values => {
    setIsLoading(true);
    const { name, surname, email, phone, company, position, packages } = values;
    dispatch(
      register({
        name,
        surname,
        email,
        phone,
        company,
        position,
        packages,
      }),
    );
    setIsLoading(false);
  };

  return createPortal(
    Object.values(modal)[0] === 'member_registration' && (
      <Backdrop
        onClick={e => {
          if (e.currentTarget === e.target) closeDataModal(e);
        }}
      >
        <Modal onClick={e => e.stopPropagation()}>
          <CloseBtn
            type="button"
            onClick={e => closeDataModal(e)}
            aria-label="Close modal"
          >
            <MdClose />
          </CloseBtn>
          <Formik
            initialValues={{
              name: '',
              surname: '',
              email: '',
              phone: '',
              company: '',
              position: '',
              packages: 'Basic',
            }}
            onSubmit={(values, { setSubmitting }) => {
              createMember(values);
              dispatch(addReload(false));
              setSubmitting(false);
              dispatch(cleanModal());
              closeModalWindow();
            }}
            enableReinitialize={true}
            validationSchema={schemas.registerSchema}
          >
            {({
              handleChange,
              handleSubmit,
              isSubmitting,
              values,
              errors,
              touched,
            }) => (
              <StyledForm
                autoComplete="off"
                onSubmit={handleSubmit}
                onChange={handleChange}
              >
                <FormTitle>Become a member</FormTitle>
                <FormList>
                  <FormField>
                    <FormLabel htmlFor="name">
                      <span>Name</span>
                      {errors.name && touched.name ? (
                        <Error>{errors.name}</Error>
                      ) : null}
                    </FormLabel>
                    <FormInput
                      id="name"
                      type="text"
                      name="name"
                      placeholder="James"
                      value={values.name}
                    />
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="surname">
                      <span>Surname</span>
                      {errors.surname && touched.surname ? (
                        <Error>{errors.surname}</Error>
                      ) : null}
                    </FormLabel>
                    <FormInput
                      id="surname"
                      type="text"
                      name="surname"
                      placeholder="Bond"
                      value={values.surname}
                    />
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="email">
                      <span>Email</span>
                      {errors.email && touched.email ? (
                        <Error>{errors.email}</Error>
                      ) : null}
                    </FormLabel>
                    <FormInput
                      id="email"
                      type="email"
                      name="email"
                      placeholder="email@gmail.com"
                      value={values.email}
                    />
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="phone">
                      <span>Phone</span>
                      {errors.phone && touched.phone ? (
                        <Error>{errors.phone}</Error>
                      ) : null}
                    </FormLabel>
                    <FormInput
                      id="phone"
                      type="phone"
                      name="phone"
                      placeholder="+1234567890"
                      value={values.phone}
                    />
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="company">
                      <span>Company</span>
                      {errors.company && touched.company ? (
                        <Error>{errors.company}</Error>
                      ) : null}
                    </FormLabel>
                    <FormInput
                      id="company"
                      type="text"
                      name="company"
                      placeholder="Brand Maze"
                      value={values.company}
                    />
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="position">
                      <span>Position</span>
                      {errors.position && touched.position ? (
                        <Error>{errors.position}</Error>
                      ) : null}
                    </FormLabel>
                    <FormInput
                      id="position"
                      type="text"
                      name="position"
                      placeholder="CEO"
                      value={values.position}
                    />
                  </FormField>
                  <ContainerRadioButton>
              <TitlePackage>Package</TitlePackage>
              <ListRadioButton>
                <LabelRadioButtonContainer
                  className="packageContainer active"
                  data-info="Basic"
                  onClick={e => handleChangeClass(e)}
                >
                  <LabelRadioButtonCheck className="labelRadioButtonCheck" />
                  <LabelRadioButton>
                    <InputWithStyle
                      style={{ display: 'none' }}
                      name="packages"
                      type="radio"
                      onChange={handleChange}
                      value="Basic"
                     checked={values.packages === 'Basic'}
                    />
                    Basic
                  </LabelRadioButton>
                </LabelRadioButtonContainer>
                <LabelRadioButtonContainer
                  className="packageContainer"
                  data-info="Pro"
                  onClick={e => handleChangeClass(e)}
                >
                  <LabelRadioButtonCheck className="labelRadioButtonCheck" />
                  <LabelRadioButton>
                    <InputWithStyle
                      style={{ display: 'none' }}
                      name="packageUser"
                      type="radio"
                      onChange={handleChange}
                      value="Pro"
                      checked={values.packages === 'Pro'}
                    />
                    Pro
                  </LabelRadioButton>
                </LabelRadioButtonContainer>
                <LabelRadioButtonContainer
                  className="packageContainer"
                  data-info="Expert"
                  onClick={e => handleChangeClass(e)}
                >
                  <LabelRadioButtonCheck className="labelRadioButtonCheck" />
                  <LabelRadioButton>
                    <InputWithStyle
                      style={{ display: 'none' }}
                      name="packages"
                      type="radio"
                      onChange={handleChange}
                      value="Expert"
                      checked={values.packages === 'Expert'}
                    />
                    Expert
                  </LabelRadioButton>
                </LabelRadioButtonContainer>
              </ListRadioButton>
            </ContainerRadioButton>
                </FormList>
                <SBtnLight
                  type="submit"
                  disabled={isSubmitting}
                  aria-label="Submit"
                >
                  Send application
                </SBtnLight>
              </StyledForm>
            )}
          </Formik>
        </Modal>
      </Backdrop>
    ),
    document.querySelector('#popup-root'),
  );
};

