import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdClose, MdDone } from 'react-icons/md';
import { FieldArray, Formik } from 'formik';
import { closeModalWindow } from 'hooks/modalWindow';
import { cleanModal } from 'redux/modal/operation';
import { modalComponent } from 'redux/modal/selectors';
import { addReload } from 'redux/reload/slice';
import { fetchData, editUserData } from 'services/APIservice';
import { onFetchError } from 'helpers/Messages/NotifyMessages';
import { onLoaded, onLoading } from 'helpers/Loader/Loader';
import { BASE_URL_IMG } from 'helpers/constants';
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

export const EditUserModal = () => {
  const [dataUpdate, setDataUpdate] = useState([]);
  const [img, setImg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const modal = useSelector(modalComponent);
  const dispatch = useDispatch();

  const itemForFetch = `/users/${modal.id}`;

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      try {
        const { data } = await fetchData(itemForFetch);
        setDataUpdate(data);
        setImg(data.images);
        if (!data) {
          return onFetchError('Whoops, something went wrong');
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    if (modal.id !== '' && modal.id !== undefined) {
      getData();
    }
  }, [itemForFetch, modal.id]);

  async function editUser(values) {
    let file = false;
    if (typeof img === 'string' && img !== '' && img !== 'none') {
      values.images = img;
    } else {
      file = img;
    }

    // console.log('editUser ~ file:', file);
    // console.log('editUser ~ values:', values);

    setIsLoading(true);
    try {
      const { code } = await editUserData(`/users/${modal.id}`, values, file);
      if (code && code !== 201) {
        return onFetchError('Whoops, something went wrong');
      }
    } catch (error) {
      alert(error);
      setError(error);
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
    Object.values(modal)[0] === 'admin' && (
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
              name: dataUpdate?.name ? dataUpdate.name : '',
              surname: dataUpdate?.surname ? dataUpdate.surname : '',
              email: dataUpdate?.email ? dataUpdate.email : '',
              phone: dataUpdate?.phone ? dataUpdate.phone : '',
              company: dataUpdate?.company ? dataUpdate.company : '',
              position: dataUpdate?.position ? dataUpdate.position : '',
              events: dataUpdate?.events ? dataUpdate.events : [],
              packages: dataUpdate?.packages ? dataUpdate.packages : [],
              status: dataUpdate?.status ? dataUpdate.status : '',
              avatar: '',
              role: '',
            }}
            onSubmit={(values, { setSubmitting }) => {
              editUser(values);
              dispatch(addReload(false));
              setSubmitting(false);
              dispatch(cleanModal());
              closeModalWindow();
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
                          checked={values.packages.includes('basic')}
                          onChange={e => {
                            handleChange(e);
                            setFieldValue(
                              'packages',
                              e.target.attributes.value.value,
                            );
                          }}
                        />
                        <span>basic</span>
                      </label>
                      <label htmlFor="pro">
                        <FormInput
                          type="checkbox"
                          id="pro"
                          name="packages"
                          value="pro"
                          checked={values.packages.includes('pro')}
                          onChange={e => {
                            handleChange(e);
                            setFieldValue(
                              'packages',
                              e.target.attributes.value.value,
                            );
                          }}
                        />
                        <span>pro</span>
                      </label>
                      <label htmlFor="expert">
                        <FormInput
                          type="checkbox"
                          id="expert"
                          name="packages"
                          value="expert"
                          checked={values.packages.includes('expert')}
                          onChange={e => {
                            handleChange(e);
                            setFieldValue(
                              'packages',
                              e.target.attributes.value.value,
                            );
                          }}
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
                    {dataUpdate.avatar && dataUpdate.avatar !== 'none' ? (
                      <FormInputFile
                        style={{
                          backgroundImage: `url(${
                            BASE_URL_IMG + dataUpdate.images
                          })`,
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
                          setFieldValue('avatar', dataUpdate.avatar);
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
                          checked={values.role.includes('candidate')}
                          onChange={e => {
                            handleChange(e);
                            setFieldValue(
                              'role',
                              e.target.attributes.value.value,
                            );
                          }}
                        />
                        <span>candidate</span>
                      </label>
                      <label htmlFor="member">
                        <FormInput
                          type="checkbox"
                          id="member"
                          name="role"
                          value="member"
                          checked={values.role.includes('member')}
                          onChange={e => {
                            handleChange(e);
                            setFieldValue(
                              'role',
                              e.target.attributes.value.value,
                            );
                          }}
                        />
                        <span>member</span>
                      </label>
                      <label htmlFor="guest">
                        <FormInput
                          type="checkbox"
                          id="guest"
                          name="role"
                          value="guest"
                          checked={values.role.includes('guest')}
                          onChange={e => {
                            handleChange(e);
                            setFieldValue(
                              'role',
                              e.target.attributes.value.value,
                            );
                          }}
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
