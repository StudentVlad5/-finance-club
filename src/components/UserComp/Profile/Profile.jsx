import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { getUser, selectId } from 'redux/auth/selectors';
import { update } from 'redux/auth/operations';
import schemas from 'utils/schemas';
import { BtnContainer, BtnDarkUser, BtnLightUser } from '../UserData/UserData.styled';
import {
  Error,
  ProfileInput,
  ProfileLabel,
  ProfileName,
  ProfileList,
} from './Profile.styled';
import { useTranslation } from 'react-i18next';

export const Profile = ({ onClose }) => {
  const { t } = useTranslation();

  let  userIn  = useSelector(getUser);
  const [updateData, setUpdateData] = useState(userIn ?? []);
  const id = useSelector(selectId);
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: updateData?.name ? updateData.name : '',
        surname: updateData?.surname ? updateData.surname : '',
        company: updateData?.company ? updateData.company : '',
        position: updateData?.position ? updateData.position : '',
        email: updateData?.email ? updateData.email : '',
        phone: updateData?.phone ? updateData.phone : '',
        birthday: updateData?.birthday ? updateData.birthday : '',
      }}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(update({ ...values, id }));
        setSubmitting(false);
        onClose(false);
      }}
      enableReinitialize={true}
      validationSchema={schemas.updateSchema}
    >
      {({
        handleChange,
        handleSubmit,
        isSubmitting,
        values,
        errors,
        touched,
      }) => (
        <ProfileList
          autoComplete="off"
          onSubmit={handleSubmit}
          onChange={handleChange}
        >
          <ProfileLabel htmlFor="name">
            <ProfileName>{t("First name")}</ProfileName>
            <ProfileInput
              type="text"
              name="name"
              id="name"
              value={values.name}
              required
            />
            {errors.name && touched.name ? (
              <Error>{errors.name}</Error>
            ) : null}
          </ProfileLabel>
          <ProfileLabel htmlFor="surname">
            <ProfileName>{t("Last name")}</ProfileName>
            <ProfileInput
              type="text"
              name="surname"
              id="surname"
              value={values.surname}
            />
            {errors.surname && touched.surname ? (
              <Error>{errors.surname}</Error>
            ) : null}
          </ProfileLabel>
          <ProfileLabel htmlFor="company">
            <ProfileName>{t("Company")}</ProfileName>
            <ProfileInput
              type="text"
              name="company"
              id="company"
              value={values.company}
            />
            {errors.company && touched.company ? (
              <Error>{errors.company}</Error>
            ) : null}
          </ProfileLabel>
          <ProfileLabel htmlFor="position">
            <ProfileName>{t("Position")}</ProfileName>
            <ProfileInput
              type="text"
              name="position"
              id="position"
              value={values.position}
            />
            {errors.position && touched.position ? (
              <Error>{errors.position}</Error>
            ) : null}
          </ProfileLabel>
          <ProfileLabel htmlFor="email">
            <ProfileName>{t("Email")}</ProfileName>
            <ProfileInput
              type="email"
              name="email"
              id="email"
              value={values.email}
              required
            />
            {errors.email && touched.email ? (
              <Error>{errors.email}</Error>
            ) : null}
          </ProfileLabel>
          <ProfileLabel htmlFor="phone">
            <ProfileName>{t({Phone})}</ProfileName>
            <ProfileInput
              type="tel"
              name="phone"
              id="phone"
              value={values.phone}
              required
            />
            {errors.phone && touched.phone ? (
              <Error>{errors.phone}</Error>
            ) : null}
          </ProfileLabel>
          <ProfileLabel htmlFor="birthday">
            <ProfileName>{t("Birthday")}</ProfileName>
            <ProfileInput
              type="date"
              name="birthday"
              id="birthday"
              value={values.birthday.split('T')[0]}
            />
            {errors.birthday && touched.birthday ? (
              <Error>{errors.birthday}</Error>
            ) : null}
          </ProfileLabel>
          <BtnContainer>
            <BtnLightUser
              type="button"
              aria-label="Close"
              onClick={() => onClose(false)}
            >
              {t("CANCEL")}
            </BtnLightUser>
            <BtnDarkUser type="submit" disabled={isSubmitting} aria-label="Submit">
              {t("SAVE")}
            </BtnDarkUser>
          </BtnContainer>
        </ProfileList>
      )}
    </Formik>
  );
};

Profile.propTypes = {
  onClose: PropTypes.func,
};
