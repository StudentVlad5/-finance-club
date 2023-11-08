import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdClose, MdDone } from 'react-icons/md';
import { FieldArray, Formik } from 'formik';
import { closeModalWindow } from 'hooks/modalWindow';
import { cleanModal } from 'redux/modal/operation';
import { modalComponent } from 'redux/modal/selectors';
import { selectUser } from 'redux/auth/selectors';
import { addReload } from 'redux/reload/slice';
import { fetchData, updateServiceData } from 'services/APIservice'; //fetchServiceData,
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

export const EditModal = () => {
  const { BASE_URL_IMG } = window.global;

  const [dataUpdate, setDataUpdate] = useState([]);
  const [img, setImg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const modal = useSelector(modalComponent);
  const dispatch = useDispatch();
  const userName = useSelector(selectUser);

  const itemForFetch = `/admin/${modal.id}`;

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

  async function editPosition(values) {
    let file = false;
    if (typeof img === 'string' && img !== '' && img !== 'none') {
      values.images = img;
    } else {
      file = img;
    }

    // console.log('editPosition ~ file:', file);
    // console.log('editPosition ~ values:', values);

    setIsLoading(true);
    try {
      const { code } = await updateServiceData(
        `/admin/${modal.id}`,
        values,
        file
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
              article: dataUpdate?.article ? dataUpdate.article : '',
              product: dataUpdate?.product ? dataUpdate.product : '',
              category: dataUpdate?.category ? dataUpdate.category : '',
              name: dataUpdate?.name ? dataUpdate.name : '',
              price: dataUpdate?.price ? dataUpdate.price : '',
              currency: dataUpdate?.currency ? dataUpdate.currency : '₴',
              latin_name: dataUpdate?.latin_name ? dataUpdate.latin_name : '',
              alcohol: dataUpdate?.alcohol ? dataUpdate.alcohol : [],
              details: dataUpdate?.details ? dataUpdate.details : [],
              images: '',
              size: dataUpdate?.size
                ? dataUpdate.size
                : { value: '', mesure: '' },
              active: dataUpdate?.active ? dataUpdate.active : 'false',
              admin: userName,
            }}
            onSubmit={(values, { setSubmitting }) => {
              editPosition(values);
              dispatch(addReload(false));
              setSubmitting(false);
              dispatch(cleanModal());
              closeModalWindow();
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
                      type="text"
                      id="article"
                      name="article"
                      placeholder="Type position article"
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
                      placeholder="Type position product"
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
                      placeholder="Type category"
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
                      placeholder="Type name"
                      value={values.name}
                    />
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="price">
                      <span>Price</span>
                      {errors.price && touched.price ? (
                        <Error>{errors.price}</Error>
                      ) : null}
                    </FormLabel>
                    <FormInput
                      type="number"
                      id="price"
                      name="price"
                      placeholder="Type position price"
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
                      placeholder="Type position currency"
                      value={values.currency}
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
                      placeholder="Type position latin_name"
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
                                <FormInput name={`alcohol.${index}`} />
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
                                <FormInput name={`details.${index}`} />
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
                    <FormLabel htmlFor="active">
                      <span>Active</span>
                      {errors.active && touched.active ? (
                        <Error>{errors.active}</Error>
                      ) : null}
                    </FormLabel>
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
                          checked={values.active === true}
                        />
                        <span>true</span>
                      </label>
                      <label htmlFor="active_false">
                        <FormInput
                          type="radio"
                          id="active_false"
                          name="active"
                          value="false"
                          checked={values.active === false}
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
                    {dataUpdate.images && dataUpdate.images !== 'none' ? (
                      <FormInputFile
                        style={{
                          backgroundImage: `url(${
                            BASE_URL_IMG + dataUpdate.images
                          })`,
                          // backgroundSize: '20px ,20px',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: 'cover',
                        }}
                        type="file"
                        id="images"
                        name="images"
                        placeholder="Type images"
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
                  <FormField>
                    <FormLabel htmlFor="admin">
                      <span>Created / edited by</span>
                    </FormLabel>
                    <FormInput type="text" id="admin" name="admin" disabled />
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
