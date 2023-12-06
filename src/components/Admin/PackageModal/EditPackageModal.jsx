import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdClose, MdDone } from 'react-icons/md';
import { FieldArray, Formik } from 'formik';
import { closeModalWindow } from 'hooks/modalWindow';
import { cleanModal } from 'redux/modal/operation';
import { modalComponent } from 'redux/modal/selectors';
import { addReload } from 'redux/reload/slice';
import { fetchData, updatePackageData } from 'services/APIservice';
import { onFetchError } from 'helpers/Messages/NotifyMessages';
import { onLoaded, onLoading } from 'helpers/Loader/Loader';
import { lang } from 'helpers/constants';
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
  FormLabel,
  FormList,
  IncrementBtn,
  ModalForm,
  ChooseLanguage,
  TextLanguage,
} from '../Modal.styled';

export const EditPackageModal = selectedLanguage => {
  const [dataUpdate, setDataUpdate] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const modal = useSelector(modalComponent);
  const dispatch = useDispatch();

  const itemForFetch = `/admin/packages/${modal.id}`;

  const [chooseLanguage, setChooseLanguage] = useState(
    selectedLanguage.selectedLanguage,
  );

  const chooseLang = e => {
    e.preventDefault;
    setChooseLanguage(e.target.dataset.info);
    document.querySelectorAll('.langChoice').forEach(it => {
      it.dataset.info === e.target.dataset.info
        ? it.classList.add('active')
        : it.classList.remove('active');
    });
  };

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      try {
        const { data } = await fetchData(itemForFetch);
        setDataUpdate(data);
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

  async function editPackage(values) {
    setIsLoading(true);
    try {
      const { code } = await updatePackageData(
        `/admin/packages/${modal.id}`,
        values,
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
    }
  }

  const closeDataModal = e => {
    e.preventDefault();
    dispatch(cleanModal());
    closeModalWindow(e);
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
          <Formik
            initialValues={{
              titleEn: dataUpdate?.en?.title ? dataUpdate.en.title : '',
              priceEn: dataUpdate?.en?.price ? dataUpdate.en.price : '',
              contentEn: dataUpdate?.en?.content ? dataUpdate.en.content : '',
              featuresEn: dataUpdate?.en?.features
                ? dataUpdate.en.features
                : [],
              titleUa: dataUpdate?.ua?.title ? dataUpdate.ua.title : '',
              priceUa: dataUpdate?.ua?.price ? dataUpdate.ua.price : '',
              contentUa: dataUpdate?.ua?.content ? dataUpdate.ua.content : '',
              featuresUa: dataUpdate?.ua?.features
                ? dataUpdate.ua.features
                : [],
              titleDe: dataUpdate?.de?.title ? dataUpdate.de.title : '',
              priceDe: dataUpdate?.de?.price ? dataUpdate.de.price : '',
              contentDe: dataUpdate?.de?.content ? dataUpdate.de.content : '',
              featuresDe: dataUpdate?.de?.features
                ? dataUpdate.de.features
                : [],
            }}
            onSubmit={(values, { setSubmitting }) => {
              editPackage(values);
              dispatch(addReload(false));
              setSubmitting(false);
              dispatch(cleanModal());
              closeModalWindow();
            }}
            enableReinitialize={true}
            validationSchema={schemas.schemasPackage}
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
                          placeholder="basic"
                          value={values.titleEn}
                        />
                      </FormField>
                      <FormField>
                        <FormLabel htmlFor="priceEn">
                          <span>Price</span>
                          {errors.priceEn && touched.priceEn ? (
                            <Error>{errors.priceEn}</Error>
                          ) : null}
                        </FormLabel>
                        <FormInput
                          type="text"
                          id="priceEn"
                          name="priceEn"
                          placeholder="$ 100 USD"
                          value={values.priceEn}
                        />
                      </FormField>
                      <FormField>
                        <FormLabel htmlFor="contentEn">
                          <span>Content</span>
                          {errors.contentEn && touched.contentEn ? (
                            <Error>{errors.contentEn}</Error>
                          ) : null}
                        </FormLabel>
                        <FormInput
                          type="text"
                          id="contentEn"
                          name="contentEn"
                          placeholder="Content of the package"
                          value={values.contentEn}
                        />
                      </FormField>
                      <FieldArray
                        name="featuresEn"
                        render={arrayHelpers => (
                          <FormInputArray>
                            <FormLabel>Features</FormLabel>
                            <FormInputBoxColumn>
                              {values.featuresEn &&
                              values.featuresEn.length > 0 ? (
                                values.featuresEn.map((item, index) => (
                                  <div key={index}>
                                    <FormInput name={`featuresEn.${index}`} />
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
                                  Add a feature
                                </AddDetailsBtn>
                              )}
                            </FormInputBoxColumn>
                          </FormInputArray>
                        )}
                      />
                    </>
                  )}
                  {/* ==== UA ==== */}
                  {chooseLanguage === 'ua' && (
                    <>
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
                          placeholder="basic"
                          value={values.titleUa}
                        />
                      </FormField>
                      <FormField>
                        <FormLabel htmlFor="priceUa">
                          <span>Price</span>
                          {errors.priceUa && touched.priceUa ? (
                            <Error>{errors.priceUa}</Error>
                          ) : null}
                        </FormLabel>
                        <FormInput
                          type="text"
                          id="priceUa"
                          name="priceUa"
                          placeholder="$ 100 USD"
                          value={values.priceUa}
                        />
                      </FormField>
                      <FormField>
                        <FormLabel htmlFor="contentUa">
                          <span>Content</span>
                          {errors.contentUa && touched.contentUa ? (
                            <Error>{errors.contentUa}</Error>
                          ) : null}
                        </FormLabel>
                        <FormInput
                          type="text"
                          id="contentUa"
                          name="contentUa"
                          placeholder="Content of the package"
                          value={values.contentUa}
                        />
                      </FormField>
                      <FieldArray
                        name="featuresUa"
                        render={arrayHelpers => (
                          <FormInputArray>
                            <FormLabel>Features</FormLabel>
                            <FormInputBoxColumn>
                              {values.featuresUa &&
                              values.featuresUa.length > 0 ? (
                                values.featuresUa.map((item, index) => (
                                  <div key={index}>
                                    <FormInput name={`featuresUa.${index}`} />
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
                                  Add a feature
                                </AddDetailsBtn>
                              )}
                            </FormInputBoxColumn>
                          </FormInputArray>
                        )}
                      />
                    </>
                  )}
                  {/* ==== DE ==== */}
                  {chooseLanguage === 'de' && (
                    <>
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
                          placeholder="basic"
                          value={values.titleDe}
                        />
                      </FormField>
                      <FormField>
                        <FormLabel htmlFor="priceDe">
                          <span>Price</span>
                          {errors.priceDe && touched.priceDe ? (
                            <Error>{errors.priceDe}</Error>
                          ) : null}
                        </FormLabel>
                        <FormInput
                          type="text"
                          id="priceDe"
                          name="priceDe"
                          placeholder="$ 100 USD"
                          value={values.priceDe}
                        />
                      </FormField>
                      <FormField>
                        <FormLabel htmlFor="contentDe">
                          <span>Content</span>
                          {errors.contentDe && touched.contentDe ? (
                            <Error>{errors.contentDe}</Error>
                          ) : null}
                        </FormLabel>
                        <FormInput
                          type="text"
                          id="contentDe"
                          name="contentDe"
                          placeholder="content of the packaget"
                          value={values.contentDe}
                        />
                      </FormField>
                      <FieldArray
                        name="featuresDe"
                        render={arrayHelpers => (
                          <FormInputArray>
                            <FormLabel>Features</FormLabel>
                            <FormInputBoxColumn>
                              {values.featuresDe &&
                              values.featuresDe.length > 0 ? (
                                values.featuresDe.map((item, index) => (
                                  <div key={index}>
                                    <FormInput name={`featuresDe.${index}`} />
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
                                  Add a feature
                                </AddDetailsBtn>
                              )}
                            </FormInputBoxColumn>
                          </FormInputArray>
                        )}
                      />
                    </>
                  )}
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
