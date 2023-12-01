import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdClose, MdDone } from 'react-icons/md';
import { FieldArray, Formik } from 'formik';
import { closeModalWindow } from 'hooks/modalWindow';
import { cleanModal } from 'redux/modal/operation';
import { modalComponent } from 'redux/modal/selectors';
import { addReload } from 'redux/reload/slice';
import { createPackagesData } from 'services/APIservice';
import { onFetchError } from 'helpers/Messages/NotifyMessages';
import { onLoaded, onLoading } from 'helpers/Loader/Loader';
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
} from '../Modal.styled';

export const CreatePackageModal = (selectedLanguage) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const modal = useSelector(modalComponent);
  const dispatch = useDispatch();
  async function createPackage(values) {
    setIsLoading(true);
    try {
      const { code } = await createPackagesData(`/admin/packages/create`, values);
      if (code && code !== 201) {
        return onFetchError('Whoops, something went wrong');
      }
    } catch (error) {
      setError(error);
      alert(error.message);
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
              title: '',
              price: '',
              content: '',
              features: [],
            }}
            onSubmit={(values, { setSubmitting }) => {
              createPackage(values);
              dispatch(addReload(false));
              setSubmitting(false);
              closeModalWindow();
              dispatch(cleanModal());
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
                      placeholder="basic"
                      value={values.title}
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
                      type="price"
                      id="price"
                      name="price"
                      placeholder="$ 100 USD"
                      value={values.price}
                    />
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="content">
                      <span>Content</span>
                      {errors.content && touched.content ? (
                        <Error>{errors.content}</Error>
                      ) : null}
                    </FormLabel>
                    <FormInput
                      type="text"
                      id="content"
                      name="content"
                      placeholder="content of the packaget"
                      value={values.content}
                    />
                  </FormField>
                  <FieldArray
                    name="features"
                    render={arrayHelpers => (
                      <FormInputArray>
                        <FormLabel>Features</FormLabel>
                        <FormInputBoxColumn>
                          {values.features && values.features.length > 0 ? (
                            values.features.map((item, index) => (
                              <div key={index}>
                                <FormInput name={`features.${index}`} />
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
                              Add a feature
                            </AddDetailsBtn>
                          )}
                        </FormInputBoxColumn>
                      </FormInputArray>
                    )}
                  />
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
