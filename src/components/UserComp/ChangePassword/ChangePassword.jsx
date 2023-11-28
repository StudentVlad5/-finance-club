import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ImEye, ImEyeBlocked } from 'react-icons/im';
import { Formik } from 'formik';
import { changePasswordAuth } from 'redux/auth/operations';
import schemas from 'utils/schemas';
import {
  Error,
  ProfileInput,
  ProfileLabel,
  ProfileName,
  ProfileList,
} from '../Profile/Profile.styled';
import {
  BtnContainer,
  BtnDarkUser,
  BtnLightUser,
  PensilStyle,
} from '../UserData/UserData.styled';
import { EditBtn, Input, Label, ShowIcon } from './ChangePassword.styled';
import { getUser } from 'redux/auth/selectors';
import { useTranslation } from 'react-i18next';

export const ChangePassword = () => {
  const { t } = useTranslation();

  const [isShown, setIsShown] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  let  userIn  = useSelector(getUser);
  const dispatch = useDispatch();

  const showPassword = () => {
    setShowPass(!showPass);
  };
  const showConfirmPassword = () => {
    setShowConfirmPass(!showConfirmPass);
  };

  return (
    <>
      {!isShown && (
        <Label htmlFor="password">
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="******"
          />
          <EditBtn onClick={() => setIsShown(true)}>
            <PensilStyle />
          </EditBtn>
        </Label>
      )}
      {isShown && (
        <Formik
          initialValues={{
            password: '',
            confirmPassword: '',
          }}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(
              changePasswordAuth({
                email: userIn.email,
                password: values.password,
              }),
            );
            setSubmitting(false);
            setIsShown(false);
          }}
          enableReinitialize={true}
          validationSchema={schemas.updatePasswordSchema}
        >
          {({
            handleSubmit,
            handleChange,
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
              <ProfileLabel htmlFor="password">
                <ProfileName>{t("New password")}</ProfileName>
                <ProfileInput
                  type={showPass ? 'text' : 'password'}
                  name="password"
                  id="password"
                  value={values.password}
                  required
                />
                <ShowIcon onClick={showPassword}>
                  {!showPass ? <ImEyeBlocked /> : <ImEye />}
                </ShowIcon>
                {errors.password && touched.password ? (
                  <Error>{errors.password}</Error>
                ) : null}
              </ProfileLabel>
              <ProfileLabel htmlFor="confirmPassword">
                <ProfileName>{t("Repeat new password")}</ProfileName>
                <ProfileInput
                  type={showConfirmPass ? 'text' : 'password'}
                  name="confirmPassword"
                  id="confirmPassword"
                  value={values.confirmPassword}
                />
                <ShowIcon onClick={showConfirmPassword}>
                  {!showConfirmPass ? <ImEyeBlocked /> : <ImEye />}
                </ShowIcon>
                {errors.confirmPassword && touched.confirmPassword ? (
                  <Error>{errors.confirmPassword}</Error>
                ) : null}
              </ProfileLabel>

              <BtnContainer>
                <BtnDarkUser
                  type="button"
                  aria-label="Close"
                  onClick={() => setIsShown(false)}
                >
                  {t("CANCEL")}
                </BtnDarkUser>
                <BtnLightUser
                  type="submit"
                  disabled={isSubmitting}
                  aria-label="Submit"
                >
                  {t("SAVE")}
                </BtnLightUser>
              </BtnContainer>
            </ProfileList>
          )}
        </Formik>
      )}
    </>
  );
};
