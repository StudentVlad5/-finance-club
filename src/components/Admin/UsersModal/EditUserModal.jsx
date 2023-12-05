import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdClose, MdDone } from 'react-icons/md';
import { FieldArray, Formik } from 'formik';
import moment from 'moment';
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
  FormRatio,
  FormInputSelect,
  FormInputArrayBox,
  FormInputDate,
  AddIncrementBtn,
} from '../Modal.styled';

export const EditUserModal = () => {
  const [dataUpdate, setDataUpdate] = useState([]);
  const [img, setImg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const modal = useSelector(modalComponent);
  const dispatch = useDispatch();

  const itemForFetch = `/admin/users/${modal.id}`;

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
      values.avatar = img;
    } else {
      file = img;
    }

    // console.log('editUser ~ file:', file);
    // console.log('editUser ~ values:', values);

    setIsLoading(true);
    try {
      const { code } = await editUserData(
        `/admin/users/${modal.id}`,
        values,
        file,
      );
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
              birthday: dataUpdate?.birthday ? dataUpdate.birthday : '',
              events: dataUpdate?.events ? dataUpdate.events : [],
              packages: dataUpdate?.packages
                ? dataUpdate.packages
                : [{ name: '', termActive: { from: '', to: '' } }],
              avatar: '',
              status: dataUpdate?.status ? dataUpdate.status : '',
              role: dataUpdate?.role ? dataUpdate.role : '',
            }}
            onSubmit={(values, { setSubmitting }) => {
              editUser(values);
              dispatch(addReload(false));
              setSubmitting(false);
              dispatch(cleanModal());
              closeModalWindow();
            }}
            enableReinitialize={true}
            validationSchema={schemas.updateUserSchema}
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
                    <FormLabel htmlFor="position">
                      <span>Position</span>
                      {errors.position && touched.position ? (
                        <Error>{errors.position}</Error>
                      ) : null}
                    </FormLabel>
                    <FormInput
                      type="text"
                      id="position"
                      name="position"
                      placeholder="User position"
                      value={values.position}
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
                      value={moment(values.birthday).format('YYYY-MM-DD')}
                    />
                  </FormField>
                  <FieldArray
                    name="packages"
                    render={arrayHelpers => (
                      <FormInputArray>
                        <FormLabel>Packages</FormLabel>
                        <FormLabelBox
                          style={{ flexDirection: 'column', gap: '5px' }}
                        >
                          {values.packages.map((pack, index) => (
                            <FormInputArrayBox
                              key={index}
                              style={{ width: '100%' }}
                            >
                              <div name={`packages.${index}`}>
                                <label htmlFor="packages">
                                  <FormInputSelect
                                    id="packages"
                                    name={`packages.[${index}].name`}
                                    value={pack.name}
                                    onChange={e => {
                                      handleChange(e);
                                      setFieldValue(
                                        `packages[${index}].name`,
                                        e.target.value,
                                      );
                                    }}
                                    style={{ display: 'block' }}
                                  >
                                    <option value="" label="">
                                      Name
                                    </option>
                                    <option value="basic" label="basic">
                                      basic
                                    </option>
                                    <option value="pro" label="pro">
                                      pro
                                    </option>
                                    <option value="expert" label="expert">
                                      expert
                                    </option>
                                  </FormInputSelect>
                                </label>
                                <label>
                                  <span>from</span>
                                  <FormInputDate
                                    type="date"
                                    id="from"
                                    name={`packages.[${index}].termActive.from`}
                                    placeholder="from"
                                    value={moment(pack.termActive?.from).format(
                                      'YYYY-MM-DD',
                                    )}
                                    onChange={e => {
                                      handleChange(e);
                                      setFieldValue(
                                        `packages[${index}].termActive.from`,
                                        e.target.value,
                                      );
                                    }}
                                  />
                                </label>
                                <label>
                                  <span>to</span>
                                  <FormInputDate
                                    type="date"
                                    id="to"
                                    name={`packages.[${index}].termActive.to`}
                                    placeholder="to"
                                    value={moment(pack.termActive?.to).format(
                                      'YYYY-MM-DD',
                                    )}
                                    onChange={e => {
                                      handleChange(e);
                                      setFieldValue(
                                        `packages[${index}].termActive.to`,
                                        e.target.value,
                                      );
                                    }}
                                  />
                                </label>

                                <IncrementBtn
                                  type="button"
                                  onClick={() => arrayHelpers.remove(index)} // remove a package from the list
                                >
                                  -
                                </IncrementBtn>
                              </div>
                            </FormInputArrayBox>
                          ))}
                          <AddIncrementBtn
                            type="button"
                            onClick={() =>
                              arrayHelpers.push({
                                name: '',
                                termActive: { from: '', to: '' },
                              })
                            }
                          >
                            +
                          </AddIncrementBtn>
                        </FormLabelBox>
                      </FormInputArray>
                    )}
                  />
                  <FieldArray
                    name="events"
                    render={arrayHelpers => (
                      <FormInputArray>
                        <FormLabel>Events</FormLabel>
                        <FormInputBoxColumn>
                          {values.events && values.events.length > 0 ? (
                            values.events.map((item, index) => (
                              <div key={index}>
                                <FormInput name={`events.${index}`} />
                                <IncrementBtn
                                  type="button"
                                  onClick={() => arrayHelpers.remove(index)} // remove a detail from the list
                                >
                                  -
                                </IncrementBtn>
                                <IncrementBtn
                                  type="button"
                                  onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at an event
                                >
                                  +
                                </IncrementBtn>
                              </div>
                            ))
                          ) : (
                            <AddDetailsBtn
                              type="button"
                              onClick={() => arrayHelpers.push('')}
                            >
                              Add an event id
                            </AddDetailsBtn>
                          )}
                        </FormInputBoxColumn>
                      </FormInputArray>
                    )}
                  />
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
                            BASE_URL_IMG + dataUpdate.avatar
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
                  <FormField>
                    <FormLabel htmlFor="role">
                      <span>Role</span>
                      {errors.role && touched.role ? (
                        <Error>{errors.role}</Error>
                      ) : null}
                    </FormLabel>
                    <FormRatio>
                      <label style={{ marginRight: '5px' }} htmlFor="candidate">
                        <FormInput
                          type="radio"
                          id="candidate"
                          name="role"
                          value="candidate"
                          checked={values.role === 'candidate'}
                        />
                        <span>candidate</span>
                      </label>
                      <label style={{ marginRight: '5px' }} htmlFor="member">
                        <FormInput
                          type="radio"
                          id="member"
                          name="role"
                          value="member"
                          checked={values.role === 'member'}
                        />
                        <span>member</span>
                      </label>
                      <label htmlFor="guest">
                        <FormInput
                          type="radio"
                          id="guest"
                          name="role"
                          value="guest"
                          checked={values.role === 'guest'}
                        />
                        <span>guest</span>
                      </label>
                    </FormRatio>
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="status">
                      <span>Status</span>
                      {errors.status && touched.status ? (
                        <Error>{errors.status}</Error>
                      ) : null}
                    </FormLabel>
                    <FormRatio>
                      <label
                        style={{ marginRight: '5px' }}
                        htmlFor="status_active"
                      >
                        <FormInput
                          type="radio"
                          id="status_active"
                          name="status"
                          value="active"
                          checked={values.status === 'active'}
                        />
                        <span>active</span>
                      </label>
                      <label htmlFor="status_inActive">
                        <FormInput
                          type="radio"
                          id="status_inActive"
                          name="status"
                          value="inActive"
                          checked={values.status === 'inActive'}
                        />
                        <span>inActive</span>
                      </label>
                    </FormRatio>
                  </FormField>
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
