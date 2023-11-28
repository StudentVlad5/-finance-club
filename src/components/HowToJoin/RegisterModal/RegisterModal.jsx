import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { Formik } from 'formik';
import { closeModalWindow } from 'hooks/modalWindow';
import { cleanModal } from 'redux/modal/operation';
import { modalComponent } from 'redux/modal/selectors';
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
import { onFetchError } from 'helpers/Messages/NotifyMessages';
import { onLoaded, onLoading } from 'helpers/Loader/Loader';
import { createFormRegistration } from 'services/APIservice';
import { useTranslation } from 'react-i18next';

export const RegisterModal = () => {
  const { t } = useTranslation();

  const modal = useSelector(modalComponent);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
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

  async function createMember(values) {
    setIsLoading(true);
    try {
      const { code } = await createFormRegistration(`/auth/signup`, values);
      if (code && code !== 201) {
        return onFetchError('Whoops, something went wrong. Please, write us through the contacts');
      }
      if (code && code === 201) {
        return onFetchError("Registration is successful. Thank you");
      }
    } catch (error) {
      setError(error);
      onFetchError(error.message);
    } finally {
      setIsLoading(false);
      dispatch(addReload(true));
    }
  }

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
          {isLoading ? onLoading() : onLoaded()}
          {error && onFetchError('Whoops, something went wrong')}
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
                <FormTitle>{t("Become a member")}</FormTitle>
                <FormList>
                  <FormField>
                    <FormLabel htmlFor="name">
                      <span>{t("Name")}</span>
                      {errors.name && touched.name ? (
                        <Error>{errors.name}</Error>
                      ) : null}
                    </FormLabel>
                    <FormInput
                      id="name"
                      type="text"
                      name="name"
                      placeholder={t("James")}
                      value={values.name}
                    />
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="surname">
                      <span>{t("Surname")}</span>
                      {errors.surname && touched.surname ? (
                        <Error>{errors.surname}</Error>
                      ) : null}
                    </FormLabel>
                    <FormInput
                      id="surname"
                      type="text"
                      name="surname"
                      placeholder={t("Bond")}
                      value={values.surname}
                    />
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="email">
                      <span>{t("Email")}</span>
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
                      <span>{t("Phone")}</span>
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
                      <span>{t("Company")}</span>
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
                      <span>{t("Position")}</span>
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
              <TitlePackage>{t("Package")}</TitlePackage>
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
                      name="packages"
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
                  {t("Send application")}
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

