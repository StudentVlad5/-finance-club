import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdClose, MdDone } from 'react-icons/md';
import { FieldArray, Formik } from 'formik';
import PropTypes from 'prop-types';
import { closeModalWindow } from 'hooks/modalWindow';
import { cleanModal } from 'redux/modal/operation';
import { modalComponent } from 'redux/modal/selectors';
import { selectUser } from 'redux/auth/selectors';
import { addReload } from 'redux/reload/slice';
import { createServiceData } from 'services/APIservice';
import { onFetchError } from 'helpers/Messages/NotifyMessages';
import { onLoaded, onLoading } from 'helpers/Loader/Loader';
import { setImage } from 'utils/setimage';
import schemas from 'utils/schemas';
import {
  AddDetailsBtn,
  Backdrop,
  CloseBtn,
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
  Modal,
  ModalForm,
} from './Modal.styled';

export const CreateModal = ({ lastArticle }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [img, setImg] = useState('');
  const modal = useSelector(modalComponent);
  const dispatch = useDispatch();
  const userName = useSelector(selectUser);

  async function createService(values) {
    const file = img;

    // console.log('createService ~ file:', file);
    // console.log('createService ~ values:', values);

    setIsLoading(true);
    try {
      const { code } = await createServiceData(`/admin/create`, values, file);
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
              article: lastArticle !== -Infinity ? lastArticle + 1 : '',
              product: '',
              category: '',
              name: '',
              price: '',
              currency: '₴',
              latin_name: '',
              alcohol: [],
              details: [],
              images: '',
              size: { value: '', mesure: '' },
              active: 'false',
              admin: userName,
            }}
            onSubmit={(values, { setSubmitting }) => {
              createService(values);
              dispatch(addReload(false));
              setSubmitting(false);
              closeModalWindow();
              dispatch(cleanModal());
            }}
            enableReinitialize={true}
            validationSchema={schemas.schemasMenuPosition}
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
                    <FormLabel htmlFor="article">
                      <span>Article</span>
                      {errors.article && touched.article ? (
                        <Error>{errors.article}</Error>
                      ) : null}
                    </FormLabel>
                    <FormInput
                      id="article"
                      type="text"
                      name="article"
                      placeholder="Position article"
                      value={values.article}
                    />
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="product">
                      <span>Product</span>
                      {errors.product && touched.product ? (
                        <Error>{errors.product}</Error>
                      ) : null}
                    </FormLabel>
                    <FormInput
                      type="text"
                      id="product"
                      name="product"
                      placeholder="Position product"
                      value={values.product}
                    />
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="category">
                      <span>Category</span>
                      {errors.category && touched.category ? (
                        <Error>{errors.category}</Error>
                      ) : null}
                    </FormLabel>
                    <FormInput
                      type="text"
                      id="category"
                      name="category"
                      placeholder="Position category"
                      value={values.category}
                    />
                  </FormField>
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
                      placeholder="Position name"
                      value={values.name}
                    />
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="latin_name">
                      <span>Latin name</span>
                      {errors.latin_name && touched.latin_name ? (
                        <Error>{errors.latin_name}</Error>
                      ) : null}
                    </FormLabel>
                    <FormInput
                      type="text"
                      id="latin_name"
                      name="latin_name"
                      placeholder="Position latin_name"
                      value={values.latin_name}
                    />
                  </FormField>
                  <FieldArray
                    name="alcohol"
                    render={arrayHelpers => (
                      <FormInputArray>
                        <FormLabel>Alcohol</FormLabel>
                        <FormInputBoxColumn>
                          {values.alcohol && values.alcohol.length > 0 ? (
                            values.alcohol.map((alc, index) => (
                              <div key={index}>
                                <FormInput
                                  name={`alcohol.${index}`}
                                  value={alc}
                                />
                                <IncrementBtn
                                  type="button"
                                  onClick={() => arrayHelpers.remove(index)} // remove a detail from the list
                                >
                                  -
                                </IncrementBtn>
                                <IncrementBtn
                                  type="button"
                                  onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
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
                              Add an alcohol
                            </AddDetailsBtn>
                          )}
                        </FormInputBoxColumn>
                      </FormInputArray>
                    )}
                  />
                  <FieldArray
                    name="details"
                    render={arrayHelpers => (
                      <FormInputArray>
                        <FormLabel>Details</FormLabel>
                        <FormInputBoxColumn>
                          {values.details && values.details.length > 0 ? (
                            values.details.map((detail, index) => (
                              <div key={index}>
                                <FormInput
                                  name={`details.${index}`}
                                  value={detail}
                                />
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
                              Add a detail
                            </AddDetailsBtn>
                          )}
                        </FormInputBoxColumn>
                      </FormInputArray>
                    )}
                  />
                  <FormField>
                    <FormLabel htmlFor="price">
                      <span>Price</span>
                      {errors.price && touched.price ? (
                        <Error>{errors.price}</Error>
                      ) : null}
                    </FormLabel>
                    <FormInput
                      type="text"
                      id="price"
                      name="price"
                      placeholder="Position price"
                      value={values.price}
                    />
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="currency">
                      <span>Currency</span>
                      {errors.currency && touched.currency ? (
                        <Error>{errors.currency}</Error>
                      ) : null}
                    </FormLabel>
                    <FormInput
                      type="text"
                      id="currency"
                      name="currency"
                      placeholder="Position currency"
                      value={values.currency}
                    />
                  </FormField>
                  <FormField>
                    <FormLabelBox>
                      <span>Size</span>
                      {errors.size?.value &&
                      touched.size?.value &&
                      errors.size?.mesure &&
                      touched.size?.mesure ? (
                        <Error>{errors.size}</Error>
                      ) : null}

                      <FormInputBox>
                        <label htmlFor="size_value">
                          <FormInput
                            style={{ width: '70px' }}
                            type="number"
                            id="size_value"
                            name="size.value"
                            placeholder="value"
                            value={values.size.value}
                          />
                        </label>
                        <label htmlFor="size_measure">
                          <FormInput
                            style={{ width: '70px' }}
                            type="text"
                            id="size_measure"
                            name="size.mesure"
                            placeholder="measure"
                            value={values.size.mesure}
                          />
                        </label>
                      </FormInputBox>
                    </FormLabelBox>
                  </FormField>
                  <FormField>
                    <FormLabelBox>
                      <span>Active</span>
                      {errors.active && touched.active ? (
                        <Error>{errors.active}</Error>
                      ) : null}
                    </FormLabelBox>
                    <FormRatio>
                      <label
                        style={{ marginRight: '5px' }}
                        htmlFor="active_true"
                      >
                        <FormInput
                          type="radio"
                          id="active_true"
                          name="active"
                          value="true"
                          checked={values.active === 'true'}
                        />
                        <span>true</span>
                      </label>
                      <label htmlFor="active_false">
                        <FormInput
                          type="radio"
                          id="active_false"
                          name="active"
                          value="false"
                          checked={values.active === 'false'}
                        />
                        <span>false</span>
                      </label>
                    </FormRatio>
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="images">
                      <span>Image</span>
                      {errors.images && touched.images ? (
                        <Error>{errors.images}</Error>
                      ) : null}
                    </FormLabel>
                    {values.images ? (
                      <FormInputFile
                        style={{
                          backgroundImage: `url(${values.images})`,
                          backgroundSize: '20px ,20px',
                        }}
                        type="file"
                        id="images"
                        name="images"
                        placeholder="Type images"
                        accept=".jpg,.jpeg,.webp,.png,.gif"
                        onChange={e => {
                          handleChange(e);
                          setImg(e.target.files[0]);
                          setImage(e);
                          setFieldValue('images', e.target.files[0]);
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
                          setImg(e.target.files[0]);
                          setImage(e);
                          setFieldValue('images', e.target.files[0]);
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
    document.querySelector('#popup-root')
  );
};

CreateModal.propTypes = {
  lastArticle: PropTypes.any,
};
