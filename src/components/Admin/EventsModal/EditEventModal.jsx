import React, { useState, useEffect, useContext } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdClose, MdDone } from 'react-icons/md';
import moment from 'moment';
import { FieldArray, Formik } from 'formik';
import { closeModalWindow } from 'hooks/modalWindow';
import { cleanModal } from 'redux/modal/operation';
import { modalComponent } from 'redux/modal/selectors';
import { addReload } from 'redux/reload/slice';
import { fetchData, updateEventsData } from 'services/APIservice';
import { onFetchError } from 'helpers/Messages/NotifyMessages';
import { onLoaded, onLoading } from 'helpers/Loader/Loader';
import { BASE_URL_IMG, lang } from 'helpers/constants';
import { setImage } from 'utils/setimage';
import schemas from 'utils/schemas';
import { StatusContext } from 'components/ContextStatus/ContextStatus';
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
  ChooseLanguage,
  TextLanguage,
} from '../Modal.styled';

export const EditEventModal = () => {
  const [dataUpdate, setDataUpdate] = useState([]);
  const [img, setImg] = useState('');
  const [newImg, setNewImg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const modal = useSelector(modalComponent);
  const dispatch = useDispatch();

  const itemForFetch = `/admin/events/${modal.id}`;

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      try {
        const { data } = await fetchData(itemForFetch);
        setDataUpdate(data);
        console.log(data);
        setImg(data.en.image);
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

  async function editEvent(values) {
    let file = '';
    newImg !== '' ? (file = newImg) : (file = img);
    // console.log('editEvent ~ file:', file);
    // console.log('editEvent ~ values:', values);

    setIsLoading(true);
    try {
      const { code } = await updateEventsData(itemForFetch, values, file);
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

  const { selectedLanguage } = useContext(StatusContext);
  const [chooseLanguage, setChooseLanguage] = useState(selectedLanguage);

  const chooseLang = e => {
    e.preventDefault;
    setChooseLanguage(e.target.dataset.info);
    document.querySelectorAll('.langChoice').forEach(it => {
      it.dataset.info === e.target.dataset.info
        ? it.classList.add('active')
        : it.classList.remove('active');
    });
  };

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
              date: dataUpdate?.en?.date ? dataUpdate.en.date : '',
              time: dataUpdate?.en?.time ? dataUpdate.en.time : '',
              durationEn: dataUpdate?.en?.duration
                ? dataUpdate.en.duration
                : '',
              locationEn: dataUpdate?.en?.location
                ? dataUpdate.en.location
                : '',
              titleEn: dataUpdate?.en?.title ? dataUpdate.en.title : '',
              descriptionEn: dataUpdate?.en?.description
                ? dataUpdate.en.description
                : '',
              planEn: dataUpdate?.en?.plan ? dataUpdate.en.plan : [],
              speakersEn: dataUpdate?.en?.speakers
                ? dataUpdate.en.speakers
                : [],
              moderatorEn: dataUpdate?.en?.moderator
                ? dataUpdate.en.moderator
                : '',
              packagesEn: dataUpdate?.en?.packages
                ? dataUpdate.en.packages
                : [],

              durationUa: dataUpdate?.ua?.duration
                ? dataUpdate.ua.duration
                : '',
              locationUa: dataUpdate?.ua?.location
                ? dataUpdate.ua.location
                : '',
              titleUa: dataUpdate?.ua?.title ? dataUpdate.ua.title : '',
              descriptionUa: dataUpdate?.ua?.description
                ? dataUpdate.ua.description
                : '',
              planUa: dataUpdate?.ua?.plan ? dataUpdate.ua.plan : [],
              speakersUa: dataUpdate?.ua?.speakers
                ? dataUpdate.ua.speakers
                : [],
              moderatorUa: dataUpdate?.ua?.moderator
                ? dataUpdate.ua.moderator
                : '',
              packagesUa: dataUpdate?.ua?.packages
                ? dataUpdate.ua.packages
                : [],

              durationDe: dataUpdate?.de?.duration
                ? dataUpdate.de.duration
                : '',
              locationDe: dataUpdate?.de?.location
                ? dataUpdate.de.location
                : '',
              titleDe: dataUpdate?.de?.title ? dataUpdate.de.title : '',
              descriptionDe: dataUpdate?.de?.description
                ? dataUpdate.de.description
                : '',
              planDe: dataUpdate?.de?.plan ? dataUpdate.de.plan : [],
              speakersDe: dataUpdate?.de?.speakers
                ? dataUpdate.de.speakers
                : [],
              moderatorDe: dataUpdate?.de?.moderator
                ? dataUpdate.de.moderator
                : '',
              packagesDe: dataUpdate?.de?.packages
                ? dataUpdate.de.packages
                : [],
              image: '',
            }}
            onSubmit={(values, { setSubmitting }) => {
              editEvent(values);
              dispatch(addReload(false));
              setSubmitting(false);
              dispatch(cleanModal());
              closeModalWindow();
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
                  <ChooseLanguage>
                    {lang.map(it => (
                      <TextLanguage
                        key={it}
                        className={
                          it === chooseLanguage
                            ? 'langChoice active'
                            : 'langChoice'
                        }
                        data-info={it}
                        onClick={e => chooseLang(e)}
                      >
                        {it}
                      </TextLanguage>
                    ))}
                  </ChooseLanguage>
                  {/* ==== EN ==== */}
                  {chooseLanguage === 'en' && (
                    <>
                      <FormField>
                        <FormLabel htmlFor="durationEn">
                          <span>Duration</span>
                          {errors.durationEn && touched.durationEn ? (
                            <Error>{errors.durationEn}</Error>
                          ) : null}
                        </FormLabel>
                        <FormInput
                          type="text"
                          id="durationEn"
                          name="durationEn"
                          placeholder="Duration of the event"
                          value={values.durationEn}
                        />
                      </FormField>
                      <FormField>
                        <FormLabel htmlFor="locationEn">
                          <span>Location</span>
                          {errors.locationEn && touched.locationEn ? (
                            <Error>{errors.locationEn}</Error>
                          ) : null}
                        </FormLabel>
                        <FormInput
                          type="text"
                          id="locationEn"
                          name="locationEn"
                          placeholder="City / ZOOM"
                          value={values.locationEn}
                        />
                      </FormField>
                      <FormField>
                        <FormLabel htmlFor="titleEn">
                          <span>Title</span>
                          {errors.titleEn && touched.titleEn ? (
                            <Error>{errors.titleEn}</Error>
                          ) : null}
                        </FormLabel>
                        <FormInput
                          type="text"
                          id="titleEn"
                          name="titleEn"
                          placeholder="Event title"
                          value={values.titleEn}
                        />
                      </FormField>
                      <FormField>
                        <FormLabel htmlFor="descriptionEn">
                          <span>Description</span>
                          {errors.descriptionEn && touched.descriptionEn ? (
                            <Error>{errors.descriptionEn}</Error>
                          ) : null}
                        </FormLabel>
                        <FormInput
                          type="text"
                          id="descriptionEn"
                          name="descriptionEn"
                          placeholder="Event description"
                          value={values.descriptionEn}
                        />
                      </FormField>
                      <FieldArray
                        name="planEn"
                        render={arrayHelpers => (
                          <FormInputArray>
                            <FormLabel>Plan</FormLabel>
                            <FormInputBoxColumn>
                              {values.planEn && values.planEn.length > 0 ? (
                                values.planEn.map((item, index) => (
                                  <div key={index}>
                                    <FormInput name={`planEn.${index}`} />
                                    <IncrementBtn
                                      type="button"
                                      onClick={() => arrayHelpers.remove(index)} // remove a detail from the list
                                    >
                                      -
                                    </IncrementBtn>
                                    <IncrementBtn
                                      type="button"
                                      onClick={() =>
                                        arrayHelpers.insert(index, '')
                                      } // insert an empty string at an event
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
                        name="speakersEn"
                        render={arrayHelpers => (
                          <FormInputArray>
                            <FormLabel>Speakers</FormLabel>
                            <FormInputBoxColumn>
                              {values.speakersEn &&
                              values.speakersEn.length > 0 ? (
                                values.speakersEn.map((speaker, index) => (
                                  <div key={index}>
                                    <FormInput name={`speakersEn.${index}`} />
                                    <IncrementBtn
                                      type="button"
                                      onClick={() => arrayHelpers.remove(index)}
                                    >
                                      -
                                    </IncrementBtn>
                                    <IncrementBtn
                                      type="button"
                                      onClick={() =>
                                        arrayHelpers.insert(index, '')
                                      }
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
                        <FormLabel htmlFor="moderatorEn">
                          <span>Moderator</span>
                          {errors.moderatorEn && touched.moderatorEn ? (
                            <Error>{errors.moderatorEn}</Error>
                          ) : null}
                        </FormLabel>
                        <FormInput
                          type="text"
                          id="moderatorEn"
                          name="moderatorEn"
                          placeholder="Event moderator"
                          value={values.moderatorEn}
                        />
                      </FormField>
                      <FormLabelBox>
                        <span>Packages</span>
                        <div>
                          <label htmlFor="basic">
                            <FormInput
                              type="checkbox"
                              id="basic"
                              name="packagesEn"
                              value="basic"
                              checked={values.packagesEn.includes('basic')}
                              onChange={e => {
                                handleChange(e);
                                setFieldValue(
                                  'packagesEn',
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
                              name="packagesEn"
                              value="pro"
                              checked={values.packagesEn.includes('pro')}
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
                              name="packagesEn"
                              value="expert"
                              checked={values.packagesEn.includes('expert')}
                              onChange={e => {
                                handleChange(e);
                                setFieldValue(
                                  'packagesEn',
                                  e.target.attributes.value.value,
                                );
                              }}
                            />
                            <span>expert</span>
                          </label>
                        </div>
                      </FormLabelBox>
                    </>
                  )}
                  {/* ==== UA ==== */}
                  {chooseLanguage === 'ua' && (
                    <>
                      <FormField>
                        <FormLabel htmlFor="durationUa">
                          <span>Duration</span>
                          {errors.durationUa && touched.durationUa ? (
                            <Error>{errors.durationUa}</Error>
                          ) : null}
                        </FormLabel>
                        <FormInput
                          type="text"
                          id="durationUa"
                          name="durationUa"
                          placeholder="Duration of the event"
                          value={values.durationUa}
                        />
                      </FormField>
                      <FormField>
                        <FormLabel htmlFor="locationUa">
                          <span>Location</span>
                          {errors.locationUa && touched.locationUa ? (
                            <Error>{errors.locationUa}</Error>
                          ) : null}
                        </FormLabel>
                        <FormInput
                          type="text"
                          id="locationUa"
                          name="locationUa"
                          placeholder="City / ZOOM"
                          value={values.locationUa}
                        />
                      </FormField>
                      <FormField>
                        <FormLabel htmlFor="titleUa">
                          <span>Title</span>
                          {errors.titleUa && touched.titleUa ? (
                            <Error>{errors.titleUa}</Error>
                          ) : null}
                        </FormLabel>
                        <FormInput
                          type="text"
                          id="titleUa"
                          name="titleUa"
                          placeholder="Event title"
                          value={values.titleUa}
                        />
                      </FormField>
                      <FormField>
                        <FormLabel htmlFor="descriptionUa">
                          <span>Description</span>
                          {errors.descriptionUa && touched.descriptionUa ? (
                            <Error>{errors.descriptionUa}</Error>
                          ) : null}
                        </FormLabel>
                        <FormInput
                          type="text"
                          id="descriptionUa"
                          name="descriptionUa"
                          placeholder="Event description"
                          value={values.descriptionUa}
                        />
                      </FormField>
                      <FieldArray
                        name="planUa"
                        render={arrayHelpers => (
                          <FormInputArray>
                            <FormLabel>Plan</FormLabel>
                            <FormInputBoxColumn>
                              {values.planUa && values.planUa.length > 0 ? (
                                values.planUa.map((item, index) => (
                                  <div key={index}>
                                    <FormInput name={`planUa.${index}`} />
                                    <IncrementBtn
                                      type="button"
                                      onClick={() => arrayHelpers.remove(index)} // remove a detail from the list
                                    >
                                      -
                                    </IncrementBtn>
                                    <IncrementBtn
                                      type="button"
                                      onClick={() =>
                                        arrayHelpers.insert(index, '')
                                      } // insert an empty string at an event
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
                        name="speakersUa"
                        render={arrayHelpers => (
                          <FormInputArray>
                            <FormLabel>Speakers</FormLabel>
                            <FormInputBoxColumn>
                              {values.speakersUa &&
                              values.speakersUa.length > 0 ? (
                                values.speakersUa.map((speaker, index) => (
                                  <div key={index}>
                                    <FormInput name={`speakersUa.${index}`} />
                                    <IncrementBtn
                                      type="button"
                                      onClick={() => arrayHelpers.remove(index)}
                                    >
                                      -
                                    </IncrementBtn>
                                    <IncrementBtn
                                      type="button"
                                      onClick={() =>
                                        arrayHelpers.insert(index, '')
                                      }
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
                        <FormLabel htmlFor="moderatorUa">
                          <span>Moderator</span>
                          {errors.moderatorUa && touched.moderatorUa ? (
                            <Error>{errors.moderatorUa}</Error>
                          ) : null}
                        </FormLabel>
                        <FormInput
                          type="text"
                          id="moderatorUa"
                          name="moderatorUa"
                          placeholder="Event moderator"
                          value={values.moderatorUa}
                        />
                      </FormField>
                      <FormLabelBox>
                        <span>Packages</span>
                        <div>
                          <label htmlFor="basic">
                            <FormInput
                              type="checkbox"
                              id="basic"
                              name="packagesUa"
                              value="базовий"
                              checked={values.packagesUa.includes('базовий')}
                              onChange={e => {
                                handleChange(e);
                                setFieldValue(
                                  'packagesUa',
                                  e.target.attributes.value.value,
                                );
                              }}
                            />
                            <span>базовий</span>
                          </label>
                          <label htmlFor="pro">
                            <FormInput
                              type="checkbox"
                              id="pro"
                              name="packagesUa"
                              value="професійний"
                              checked={values.packagesUa.includes(
                                'професійний',
                              )}
                              onChange={e => {
                                handleChange(e);
                                setFieldValue(
                                  'packagesUa',
                                  e.target.attributes.value.value,
                                );
                              }}
                            />
                            <span>професійний</span>
                          </label>
                          <label htmlFor="expert">
                            <FormInput
                              type="checkbox"
                              id="expert"
                              name="packagesUa"
                              value="експерт"
                              checked={values.packagesUa.includes('експерт')}
                              onChange={e => {
                                handleChange(e);
                                setFieldValue(
                                  'packagesUa',
                                  e.target.attributes.value.value,
                                );
                              }}
                            />
                            <span>експерт</span>
                          </label>
                        </div>
                      </FormLabelBox>
                    </>
                  )}
                  {/* ==== DE ==== */}
                  {chooseLanguage === 'de' && (
                    <>
                      <FormField>
                        <FormLabel htmlFor="durationDe">
                          <span>Duration</span>
                          {errors.durationDe && touched.durationDe ? (
                            <Error>{errors.durationDe}</Error>
                          ) : null}
                        </FormLabel>
                        <FormInput
                          type="text"
                          id="durationDe"
                          name="durationDe"
                          placeholder="Duration of the event"
                          value={values.durationDe}
                        />
                      </FormField>
                      <FormField>
                        <FormLabel htmlFor="locationDe">
                          <span>Location</span>
                          {errors.locationDe && touched.locationDe ? (
                            <Error>{errors.locationDe}</Error>
                          ) : null}
                        </FormLabel>
                        <FormInput
                          type="text"
                          id="locationDe"
                          name="locationDe"
                          placeholder="City / ZOOM"
                          value={values.locationDe}
                        />
                      </FormField>
                      <FormField>
                        <FormLabel htmlFor="titleDe">
                          <span>Title</span>
                          {errors.titleDe && touched.titleDe ? (
                            <Error>{errors.titleDe}</Error>
                          ) : null}
                        </FormLabel>
                        <FormInput
                          type="text"
                          id="titleDe"
                          name="titleDe"
                          placeholder="Event title"
                          value={values.titleDe}
                        />
                      </FormField>
                      <FormField>
                        <FormLabel htmlFor="descriptionDe">
                          <span>Description</span>
                          {errors.descriptionDe && touched.descriptionDe ? (
                            <Error>{errors.descriptionDe}</Error>
                          ) : null}
                        </FormLabel>
                        <FormInput
                          type="text"
                          id="descriptionDe"
                          name="descriptionDe"
                          placeholder="Event description"
                          value={values.descriptionDe}
                        />
                      </FormField>
                      <FieldArray
                        name="planDe"
                        render={arrayHelpers => (
                          <FormInputArray>
                            <FormLabel>Plan</FormLabel>
                            <FormInputBoxColumn>
                              {values.planDe && values.planDe.length > 0 ? (
                                values.planDe.map((item, index) => (
                                  <div key={index}>
                                    <FormInput name={`planDe.${index}`} />
                                    <IncrementBtn
                                      type="button"
                                      onClick={() => arrayHelpers.remove(index)} // remove a detail from the list
                                    >
                                      -
                                    </IncrementBtn>
                                    <IncrementBtn
                                      type="button"
                                      onClick={() =>
                                        arrayHelpers.insert(index, '')
                                      } // insert an empty string at an event
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
                        name="speakersDe"
                        render={arrayHelpers => (
                          <FormInputArray>
                            <FormLabel>Speakers</FormLabel>
                            <FormInputBoxColumn>
                              {values.speakersDe &&
                              values.speakersDe.length > 0 ? (
                                values.speakersDe.map((speaker, index) => (
                                  <div key={index}>
                                    <FormInput name={`speakersDe.${index}`} />
                                    <IncrementBtn
                                      type="button"
                                      onClick={() => arrayHelpers.remove(index)}
                                    >
                                      -
                                    </IncrementBtn>
                                    <IncrementBtn
                                      type="button"
                                      onClick={() =>
                                        arrayHelpers.insert(index, '')
                                      }
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
                        <FormLabel htmlFor="moderatorDe">
                          <span>Moderator</span>
                          {errors.moderatorDe && touched.moderatorDe ? (
                            <Error>{errors.moderatorDe}</Error>
                          ) : null}
                        </FormLabel>
                        <FormInput
                          type="text"
                          id="moderatorDe"
                          name="moderatorDe"
                          placeholder="Event moderator"
                          value={values.moderatorDe}
                        />
                      </FormField>
                      <FormLabelBox>
                        <span>Packages</span>
                        <div>
                          <label htmlFor="basic">
                            <FormInput
                              type="checkbox"
                              id="basic"
                              name="packagesDe"
                              value="basic"
                              checked={values.packagesDe.includes('basic')}
                              onChange={e => {
                                handleChange(e);
                                setFieldValue(
                                  'packagesDe',
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
                              name="packagesDe"
                              value="pro"
                              checked={values.packagesDe.includes('pro')}
                              onChange={e => {
                                handleChange(e);
                                setFieldValue(
                                  'packagesDe',
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
                              name="packagesDe"
                              value="expert"
                              checked={values.packagesDe.includes('expert')}
                              onChange={e => {
                                handleChange(e);
                                setFieldValue(
                                  'packagesDe',
                                  e.target.attributes.value.value,
                                );
                              }}
                            />
                            <span>expert</span>
                          </label>
                        </div>
                      </FormLabelBox>
                    </>
                  )}
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
                      placeholder="DD.MM.YYYY"
                      value={moment(values.date).format('YYYY-MM-DD')}
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
                    <FormLabel htmlFor="image">
                      <span>Image</span>
                      {errors.image && touched.image ? (
                        <Error>{errors.image}</Error>
                      ) : null}
                    </FormLabel>
                    {dataUpdate.en?.image && dataUpdate.en?.image !== '' ? (
                      <FormInputFile
                        style={{
                          backgroundImage: `url(${
                            img !== ''
                              ? BASE_URL_IMG +
                                'events/' +
                                img.split('/')[img.split('/').length - 1]
                              : values.image.split('/')[
                                  values.image.split('/').length - 1
                                ]
                          })`,
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
                          setNewImg(e.target.files[0]);
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
                          setNewImg(e.target.files[0]);
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
