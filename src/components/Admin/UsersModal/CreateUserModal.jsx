import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdClose, MdDone } from 'react-icons/md';
import { FieldArray, Formik } from 'formik';
import { closeModalWindow } from 'hooks/modalWindow';
import { cleanModal } from 'redux/modal/operation';
import { modalComponent } from 'redux/modal/selectors';
import { addReload } from 'redux/reload/slice';
import { createUserData } from 'services/APIservice';
import { onFetchError } from 'helpers/Messages/NotifyMessages';
import { onLoaded, onLoading } from 'helpers/Loader/Loader';
import { setImage } from 'utils/setimage';
import schemas from 'utils/schemas';
import { Backdrop, Modal } from 'components/baseStyles/Modal.styled';
import {
  AddDetailsBtn,
  DoneBtn,
  SCloseBtn,
  Error,
  FormField,
  FormInput,
  FormInputArray,
  FormInputBoxColumn,
  FormInputFile,
  FormLabel,
  FormLabelBox,
  FormList,
  IncrementBtn,
  ModalForm,
} from '../Modal.styled';

export const CreateUserModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [img, setImg] = useState('');
  const modal = useSelector(modalComponent);
  const dispatch = useDispatch();

  async function createUsers(values) {
    const file = img;

    // console.log('createUser ~ file:', file);
    // console.log('createUser ~ values:', values);

    setIsLoading(true);
    try {
      const { code } = await createUserData(`/users/create`, values, file);
      if (code && code !== 201) {
        return onFetchError('Whoops, something went wrong');
      }
    } catch (error) {
      setError(error);
      alert(error.message);
    } finally {
      setIsLoading(false);
      dispatch(addReload(true));
      setImg('');
    }
  }

  const closeDataModal = e => {
    e.preventDefault();
    dispatch(cleanModal());
    closeModalWindow(e);
    setImg('');
  };

  return createPortal(
    Object.values(modal)[0] === 'admin_create' && (
      <Backdrop
        onClick={e => {
          if (e.currentTarget === e.target) closeDataModal(e);
        }}
      >
        <Modal onClick={e => e.stopPropagation()}>
          <SCloseBtn
            type="button"
            onClick={e => closeDataModal(e)}
            aria-label="Close modal"
          >
            <MdClose size={15} />
          </SCloseBtn>
          {isLoading ? onLoading() : onLoaded()}
          {error && onFetchError('Whoops, something went wrong')}
          <Formik
            initialValues={{
              name: '',
              surname: '',
              email: '',
              password: '',
              phone: '',
              company: '',
              position: '',
              events: [],
              packages: [],
              status: 'active',
              avatar: '',
              role: '',
            }}
            onSubmit={(values, { setSubmitting }) => {
              createUsers(values);
              dispatch(addReload(false));
              setSubmitting(false);
              closeModalWindow();
              dispatch(cleanModal());
            }}
            enableReinitialize={true}
            validationSchema={schemas.schemasUsers}
          >
            {({
              handleChange,
              handleSubmit,
              setFieldValue,
              isSubmitting,
              values,
              errors,
              touched,
            }) => (
              <ModalForm
                autoComplete="off"
                onSubmit={handleSubmit}
                onChange={handleChange}
              >
                <FormList>
                  <FormField>
                    <FormLabel htmlFor="name">
                      <span>Name</span>
                      {errors.name && touched.name ? (
                        <Error>{errors.name}</Error>
                      ) : null}
                    </FormLabel>
                    <FormInput
                      type="text"
                      id="name"
                      name="name"
                      placeholder="User name"
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
                      type="text"
                      id="surname"
                      name="surname"
                      placeholder="User surname"
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
                      type="email"
                      id="email"
                      name="email"
                      placeholder="User email"
                      value={values.email}
                    />
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="password">
                      <span>Password</span>
                      {errors.password && touched.password ? (
                        <Error>{errors.password}</Error>
                      ) : null}
                    </FormLabel>
                    <FormInput
                      type="text"
                      id="password"
                      name="password"
                      placeholder="Default user password -> email"
                      value={values.password}
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
                      type="phone"
                      id="phone"
                      name="phone"
                      placeholder="User phone"
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
                      type="text"
                      id="company"
                      name="company"
                      placeholder="User company"
                      value={values.company}
                    />
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="birthday">
                      <span>Birthday</span>
                      {errors.birthday && touched.birthday ? (
                        <Error>{errors.birthday}</Error>
                      ) : null}
                    </FormLabel>
                    <FormInput
                      type="date"
                      id="birthday"
                      name="birthday"
                      placeholder="User birthday"
                      value={values.birthday}
                    />
                  </FormField>
                  <FormLabelBox>
                    <span>Packages</span>
                    <div>
                      <label htmlFor="basic">
                        <FormInput
                          type="checkbox"
                          id="basic"
                          name="packages"
                          value="basic"
                        />
                        <span>basic</span>
                      </label>
                      <label htmlFor="pro">
                        <FormInput
                          type="checkbox"
                          id="pro"
                          name="packages"
                          value="pro"
                        />
                        <span>pro</span>
                      </label>
                      <label htmlFor="expert">
                        <FormInput
                          type="checkbox"
                          id="expert"
                          name="packages"
                          value="expert"
                        />
                        <span>expert</span>
                      </label>
                    </div>
                  </FormLabelBox>
                  <FormField>
                    <FormLabel htmlFor="avatar">
                      <span>Avatar</span>
                      {errors.avatar && touched.avatar ? (
                        <Error>{errors.avatar}</Error>
                      ) : null}
                    </FormLabel>
                    {values.avatar ? (
                      <FormInputFile
                        style={{
                          backgroundImage: `url(${values.avatar})`,
                          backgroundUser: 'center',
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: 'cover',
                        }}
                        type="file"
                        id="avatar"
                        name="avatar"
                        placeholder="avatar"
                        accept=".jpg,.jpeg,.webp,.png,.gif"
                        onChange={e => {
                          handleChange(e);
                          setFieldValue('avatar', e.target.files[0]);
                          setImg(e.target.files[0]);
                          setImage(e);
                        }}
                      />
                    ) : (
                      <FormInputFile
                        type="file"
                        id="avatar"
                        name="avatar"
                        accept=".jpg,.jpeg,.webp,.png,.gif"
                        onChange={e => {
                          handleChange(e);
                          setFieldValue('avatar', e.target.files[0]);
                          setImg(e.target.files[0]);
                          setImage(e);
                        }}
                      />
                    )}
                  </FormField>
                  <FormLabelBox>
                    <span>Role</span>
                    <div>
                      <label htmlFor="candidate">
                        <FormInput
                          type="checkbox"
                          id="candidate"
                          name="role"
                          value="candidate"
                        />
                        <span>candidate</span>
                      </label>
                      <label htmlFor="member">
                        <FormInput
                          type="checkbox"
                          id="member"
                          name="role"
                          value="member"
                        />
                        <span>member</span>
                      </label>
                      <label htmlFor="guest">
                        <FormInput
                          type="checkbox"
                          id="guest"
                          name="role"
                          value="guest"
                        />
                        <span>guest</span>
                      </label>
                    </div>
                  </FormLabelBox>
                </FormList>

                <DoneBtn
                  type="submit"
                  disabled={isSubmitting}
                  aria-label="Submit"
                >
                  <MdDone size={15} />
                </DoneBtn>
              </ModalForm>
            )}
          </Formik>
        </Modal>
      </Backdrop>
    ),
    document.querySelector('#popup-root'),
  );
};
