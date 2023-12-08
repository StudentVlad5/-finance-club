import React, { useState, useContext } from 'react';
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
import { lang } from 'helpers/constants';
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

export const CreateEventModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [img, setImg] = useState('');
  const modal = useSelector(modalComponent);
  const dispatch = useDispatch();

  const itemForFetch = `/admin/events/create`;

  async function createEvents(values) {
    const file = img;

    // console.log('createEvents ~ file:', file);
    // console.log('createEvents ~ values:', values);

    setIsLoading(true);
    try {
      const { code } = await createEventsData(itemForFetch, values, file);
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
              image: '',

              durationEn: '',
              locationEn: '',
              titleEn: '',
              descriptionEn: '',
              planEn: [],
              speakersEn: [],
              moderatorEn: '',
              packagesEn: [],

              durationUa: '',
              locationUa: '',
              titleUa: '',
              descriptionUa: '',
              planUa: [],
              speakersUa: [],
              moderatorUa: '',
              packagesUa: [],

              durationDe: '',
              locationDe: '',
              titleDe: '',
              descriptionDe: '',
              planDe: [],
              speakersDe: [],
              moderatorDe: '',
              packagesDe: [],

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
                          placeholder="Event titleEn"
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
                          placeholder="Event descriptionEn"
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
                            />
                            <span>basic</span>
                          </label>
                          <label htmlFor="pro">
                            <FormInput
                              type="checkbox"
                              id="pro"
                              name="packagesEn"
                              value="pro"
                            />
                            <span>pro</span>
                          </label>
                          <label htmlFor="expert">
                            <FormInput
                              type="checkbox"
                              id="expert"
                              name="packagesEn"
                              value="expert"
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
                          placeholder="Event titleUa"
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
                          placeholder="Event descriptionUa"
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
                            />
                            <span>базовий</span>
                          </label>
                          <label htmlFor="pro">
                            <FormInput
                              type="checkbox"
                              id="pro"
                              name="packagesUa"
                              value="професійний"
                            />
                            <span>професійний</span>
                          </label>
                          <label htmlFor="expert">
                            <FormInput
                              type="checkbox"
                              id="expert"
                              name="packagesUa"
                              value="експерт"
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
                            />
                            <span>basic</span>
                          </label>
                          <label htmlFor="pro">
                            <FormInput
                              type="checkbox"
                              id="pro"
                              name="packagesDe"
                              value="pro"
                            />
                            <span>pro</span>
                          </label>
                          <label htmlFor="expert">
                            <FormInput
                              type="checkbox"
                              id="expert"
                              name="packagesDe"
                              value="expert"
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
                        <FormLabel htmlFor="image">
                          <span>Image</span>
                          {errors.image && touched.image ? (
                            <Error>{errors.image}</Error>
                          ) : null}
                        </FormLabel>
                        {values.image ? (
                          <FormInputFile
                            style={{
                              backgroundImage: `url(${
                                values.image.split('/')[
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
