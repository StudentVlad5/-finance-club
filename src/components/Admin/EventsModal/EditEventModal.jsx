import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdClose, MdDone } from 'react-icons/md';
import { FieldArray, Formik } from 'formik';
import { closeModalWindow } from 'hooks/modalWindow';
import { cleanModal } from 'redux/modal/operation';
import { modalComponent } from 'redux/modal/selectors';
import { selectUserName } from 'redux/auth/selectors';
import { addReload } from 'redux/reload/slice';
import { fetchData, updateEventsData } from 'services/APIservice'; //fetchServiceData,
import { onFetchError } from 'helpers/Messages/NotifyMessages';
import { onLoaded, onLoading } from 'helpers/Loader/Loader';
import { setImage } from 'utils/setimage';
import schemas from 'utils/schemas';
import {
  AddDetailsBtn,
  DoneBtn,
  Error,
  FormField,
  FormInput,
  FormInputArray,
  FormInputBox,
  FormInputBoxColumn,
  FormInputFile,
  FormLabel,
  FormLabelBox,
  FormList,
  FormRatio,
  IncrementBtn,
  ModalForm,
} from '../Modal.styled';
import { Backdrop, CloseBtn, Modal } from 'components/baseStyles/Modal.styled';
import { BASE_URL_IMG } from 'helpers/constants';

export const EditEventModal = () => {
  const [dataUpdate, setDataUpdate] = useState([]);
  const [img, setImg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const modal = useSelector(modalComponent);
  const dispatch = useDispatch();

  const itemForFetch = `/events/${modal.id}`;

  // useEffect(() => {
  //   async function getData() {
  //     setIsLoading(true);
  //     try {
  //       const { data } = await fetchData(itemForFetch);
  //       setDataUpdate(data);
  //       setImg(data.images);
  //       if (!data) {
  //         return onFetchError('Whoops, something went wrong');
  //       }
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   if (modal.id !== '' && modal.id !== undefined) {
  //     getData();
  //   }
  // }, [itemForFetch, modal.id]);

  async function editEvent(values) {
    let file = false;
    if (typeof img === 'string' && img !== '' && img !== 'none') {
      values.images = img;
    } else {
      file = img;
    }

    // console.log('editEvent ~ file:', file);
    // console.log('editEvent ~ values:', values);

    setIsLoading(true);
    try {
      const { code } = await updateEventsData(
        `/events/${modal.id}`,
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
          <CloseBtn
            type="button"
            onClick={e => closeDataModal(e)}
            aria-label="Close modal"
          >
            <MdClose size={15} />
          </CloseBtn>
          {isLoading ? onLoading() : onLoaded()}
          {error && onFetchError('Whoops, something went wrong')}
          <Formik
            initialValues={{
              date: dataUpdate?.date ? dataUpdate.date : '',
              time: dataUpdate?.time ? dataUpdate.time : '',
              location: dataUpdate?.location ? dataUpdate.location : '',
              title: dataUpdate?.title ? dataUpdate.title : '',
              description: dataUpdate?.description
                ? dataUpdate.description
                : '',
              plan: dataUpdate?.plan ? dataUpdate.plan : [],
              speakers: dataUpdate?.speakers ? dataUpdate.speakers : [],
              moderator: dataUpdate?.speakers ? dataUpdate.speakers : '',
              packages: dataUpdate?.speakers ? dataUpdate.speakers : [],
              images: '',
            }}
            onSubmit={(values, { setSubmitting }) => {
              editEvent(values);
              dispatch(addReload(false));
              setSubmitting(false);
              dispatch(cleanModal());
              closeModalWindow();
            }}
            enableReinitialize={true}
            validationSchema={schemas.schemasMenuEvent}
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
                    <FormLabel htmlFor="date">
                      <span>Date</span>
                      {errors.date && touched.date ? (
                        <Error>{errors.date}</Error>
                      ) : null}
                    </FormLabel>
                    <FormInput
                      type="text"
                      id="date"
                      name="date"
                      placeholder="YYYY/MM/DD"
                      value={values.date}
                    />
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="time">
                      <span>Time</span>
                      {errors.time && touched.time ? (
                        <Error>{errors.time}</Error>
                      ) : null}
                    </FormLabel>
                    <FormInput
                      type="text"
                      id="time"
                      name="time"
                      placeholder="HH:MM - HH:MM"
                      value={values.time}
                    />
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="location">
                      <span>Location</span>
                      {errors.location && touched.location ? (
                        <Error>{errors.location}</Error>
                      ) : null}
                    </FormLabel>
                    <FormInput
                      type="number"
                      id="location"
                      name="location"
                      placeholder="City / ZOOM"
                      value={values.location}
                    />
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="title">
                      <span>Title</span>
                      {errors.title && touched.title ? (
                        <Error>{errors.title}</Error>
                      ) : null}
                    </FormLabel>
                    <FormInput
                      type="text"
                      id="title"
                      name="title"
                      placeholder="Event title"
                      value={values.title}
                    />
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="description">
                      <span>Description</span>
                      {errors.description && touched.description ? (
                        <Error>{errors.description}</Error>
                      ) : null}
                    </FormLabel>
                    <FormInput
                      type="text"
                      id="description"
                      name="description"
                      placeholder="Event description"
                      value={values.description}
                    />
                  </FormField>
                  <FieldArray
                    name="plan"
                    render={arrayHelpers => (
                      <FormInputArray>
                        <FormLabel>Plan</FormLabel>
                        <FormInputBoxColumn>
                          {values.plan && values.plan.length > 0 ? (
                            values.plan.map((item, index) => (
                              <div key={index}>
                                <FormInput name={`plan.${index}`} />
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
                              Add a plan
                            </AddDetailsBtn>
                          )}
                        </FormInputBoxColumn>
                      </FormInputArray>
                    )}
                  />
                  <FieldArray
                    name="speakers"
                    render={arrayHelpers => (
                      <FormInputArray>
                        <FormLabel>Speakers</FormLabel>
                        <FormInputBoxColumn>
                          {values.speakers && values.speakers.length > 0 ? (
                            values.speakers.map((speaker, index) => (
                              <div key={index}>
                                <FormInput name={`speakers.${index}`} />
                                <IncrementBtn
                                  type="button"
                                  onClick={() => arrayHelpers.remove(index)}
                                >
                                  -
                                </IncrementBtn>
                                <IncrementBtn
                                  type="button"
                                  onClick={() => arrayHelpers.insert(index, '')}
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
                              Add a speaker
                            </AddDetailsBtn>
                          )}
                        </FormInputBoxColumn>
                      </FormInputArray>
                    )}
                  />
                  <FormField>
                    <FormLabel htmlFor="moderator">
                      <span>Moderator</span>
                      {errors.moderator && touched.moderator ? (
                        <Error>{errors.moderator}</Error>
                      ) : null}
                    </FormLabel>
                    <FormInput
                      type="text"
                      id="moderator"
                      name="moderator"
                      placeholder="Event moderator"
                      value={values.moderator}
                    />
                  </FormField>
                  <FieldArray
                    name="packages"
                    render={arrayHelpers => (
                      <FormInputArray>
                        <FormLabel>Packages</FormLabel>
                        <FormInputBoxColumn>
                          {values.packages && values.packages.length > 0 ? (
                            values.packages.map((pack, index) => (
                              <div key={index}>
                                <FormInput name={`packages.${index}`} />
                                <IncrementBtn
                                  type="button"
                                  onClick={() => arrayHelpers.remove(index)}
                                >
                                  -
                                </IncrementBtn>
                                <IncrementBtn
                                  type="button"
                                  onClick={() => arrayHelpers.insert(index, '')}
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
                              Add a package
                            </AddDetailsBtn>
                          )}
                        </FormInputBoxColumn>
                      </FormInputArray>
                    )}
                  />
                  <FormField>
                    <FormLabel htmlFor="images">
                      <span>Image</span>
                      {errors.images && touched.images ? (
                        <Error>{errors.images}</Error>
                      ) : null}
                    </FormLabel>
                    {dataUpdate.images && dataUpdate.images !== 'none' ? (
                      <FormInputFile
                        style={{
                          backgroundImage: `url(${
                            BASE_URL_IMG + dataUpdate.images
                          })`,
                          backgroundEvent: 'center',
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: 'cover',
                        }}
                        type="file"
                        id="images"
                        name="images"
                        placeholder="images"
                        accept=".jpg,.jpeg,.webp,.png,.gif"
                        onChange={e => {
                          handleChange(e);
                          setFieldValue('images', dataUpdate.images);
                          setImg(e.target.files[0]);
                          setImage(e);
                        }}
                      />
                    ) : (
                      <FormInputFile
                        type="file"
                        id="images"
                        name="images"
                        accept=".jpg,.jpeg,.webp,.png,.gif"
                        onChange={e => {
                          handleChange(e);
                          setFieldValue('images', e.target.files[0]);
                          setImg(e.target.files[0]);
                          setImage(e);
                        }}
                      />
                    )}
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
