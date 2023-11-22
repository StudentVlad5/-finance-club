import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdClose, MdDone } from 'react-icons/md';
import { FieldArray, Formik } from 'formik';
import { closeModalWindow } from 'hooks/modalWindow';
import { cleanModal } from 'redux/modal/operation';
import { modalComponent } from 'redux/modal/selectors';
import { addReload } from 'redux/reload/slice';
import { createEventsData } from 'services/APIservice';
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

export const CreateEventModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [img, setImg] = useState('');
  const modal = useSelector(modalComponent);
  const dispatch = useDispatch();

  async function createEvents(values) {
    const file = img;

    // console.log('createEvents ~ file:', file);
    // console.log('createEvents ~ values:', values);

    setIsLoading(true);
    try {
      const { code } = await createEventsData(`/events/create`, values, file);
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
              date: '',
              time: '',
              duration: '',
              location: '',
              title: '',
              description: '',
              plan: [],
              speakers: [],
              moderator: '',
              packages: [],
              image: '',
            }}
            onSubmit={(values, { setSubmitting }) => {
              createEvents(values);
              dispatch(addReload(false));
              setSubmitting(false);
              closeModalWindow();
              dispatch(cleanModal());
            }}
            enableReinitialize={true}
            validationSchema={schemas.schemasEvents}
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
                      type="date"
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
                      type="time"
                      id="time"
                      name="time"
                      placeholder="HH:MM"
                      value={values.time}
                    />
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="duration">
                      <span>Duration</span>
                      {errors.duration && touched.duration ? (
                        <Error>{errors.duration}</Error>
                      ) : null}
                    </FormLabel>
                    <FormInput
                      type="number"
                      id="duration"
                      name="duration"
                      placeholder="Duration of the event"
                      value={values.duration}
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
                      type="text"
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
                    <FormLabel htmlFor="image">
                      <span>Image</span>
                      {errors.image && touched.image ? (
                        <Error>{errors.image}</Error>
                      ) : null}
                    </FormLabel>
                    {values.image ? (
                      <FormInputFile
                        style={{
                          backgroundImage: `url(${values.image})`,
                          backgroundEvent: 'center',
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: 'cover',
                        }}
                        type="file"
                        id="image"
                        name="image"
                        placeholder="image"
                        accept=".jpg,.jpeg,.webp,.png,.gif"
                        onChange={e => {
                          handleChange(e);
                          setFieldValue('image', e.target.files[0]);
                          setImg(e.target.files[0]);
                          setImage(e);
                        }}
                      />
                    ) : (
                      <FormInputFile
                        type="file"
                        id="image"
                        name="image"
                        accept=".jpg,.jpeg,.webp,.png,.gif"
                        onChange={e => {
                          handleChange(e);
                          setFieldValue('image', e.target.files[0]);
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
