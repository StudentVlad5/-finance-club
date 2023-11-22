import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik, Formik } from 'formik';
import schemas from 'utils/schemas';
import { register } from 'redux/auth/operations';
import { theme } from 'components/baseStyles/Variables.styled';
import {
  FormRegister,
  FormRegisterColumn,
  FormRegisterContainer,
  TitleRegister,
  FormRegisterItemContainer,
  InputWithStyle,
  TitlePackage,
  LabelRadioButton,
  ContainerRadioButton,
  LabelRadioButtonContainer,
  LabelRadioButtonCheck,
  ListRadioButton,
  ButtonRegistration,
  BtnContainerRegistration,
  SpanRegistration,
} from './RegisterForm.styled';
import {
  BoxText,
  ErrorBox,
  FormContainer,
  FormSection,
  IconInValid,
  IconValid,
  Label,
  StyledLink,
} from '../AuthForm.styled';
import { onLoaded, onLoading } from 'helpers/Loader/Loader';

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleChangeClass = e => {
    const listPackage = document.querySelectorAll('.packageContainer');
    listPackage.forEach(it =>
      it.dataset.info === e.currentTarget.dataset.info
        ? it.classList.add('active')
        : it.classList.remove('active'),
    );
  };
  const onSubmit = ({ values }) => {
    console.log(values);
    setIsLoading(true);
    const { name, surname, email, phone, company, position, packageUser } =
      values;
    dispatch(
      register({
        name,
        surname,
        email,
        phone,
        company,
        position,
        packageUser,
      }),
    );
    setIsLoading(false);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      phone: '',
      company: '',
      position: '',
      packageUser: 'Basic',
    },
    validationSchema: schemas.registerSchema,
    onSubmit: (values, action) => {
      onSubmit({ values, action });
    },
  });

  const showAccentValidateInput = (hasValue, isValide) => {
    return !hasValue
      ? null
      : isValide
      ? `${theme.colors.grey}`
      : `${theme.colors.black}`;
  };

  return (
    <FormSection>
      <FormContainer>
        {isLoading ? onLoading() : onLoaded()}
        <Formik validationSchema={schemas.registerSchema}>
          <FormRegister onSubmit={formik.handleSubmit} autoComplete="off">
            <TitleRegister>{'Become a member'}</TitleRegister>
            <FormRegisterContainer>
              <FormRegisterColumn>
                <FormRegisterItemContainer>
                  <Label htmlFor="name">Name</Label>
                  <InputWithStyle
                    style={{
                      borderColor: showAccentValidateInput(
                        formik.values.name,
                        formik.errors.name,
                      ),
                    }}
                    name="name"
                    id="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                    placeholder="James"
                  />
                  {!formik.values.name ? null : !formik.errors.name ? (
                    <IconValid color={theme.colors.grey} />
                  ) : (
                    <IconInValid color={theme.colors.grey} />
                  )}
                  {formik.errors.name && formik.touched.name ? (
                    <ErrorBox>{formik.errors.name}</ErrorBox>
                  ) : null}
                </FormRegisterItemContainer>
                <FormRegisterItemContainer>
                  <Label htmlFor="surname">Surname</Label>
                  <InputWithStyle
                    style={{
                      borderColor: showAccentValidateInput(
                        formik.values.surname,
                        formik.errors.surname,
                      ),
                    }}
                    name="surname"
                    id="surname"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.surname}
                    onBlur={formik.handleBlur}
                    placeholder="Bond"
                  />
                  {!formik.values.surname ? null : !formik.errors.surname ? (
                    <IconValid color={theme.colors.grey} />
                  ) : (
                    <IconInValid color={theme.colors.grey} />
                  )}
                  {formik.errors.surname && formik.touched.surname ? (
                    <ErrorBox>{formik.errors.surname}</ErrorBox>
                  ) : null}
                </FormRegisterItemContainer>
              </FormRegisterColumn>
              <FormRegisterColumn>
                <FormRegisterItemContainer>
                  <Label htmlFor="email">Email</Label>
                  <InputWithStyle
                    style={{
                      borderColor: showAccentValidateInput(
                        formik.values.email,
                        formik.errors.email,
                      ),
                    }}
                    name="email"
                    id="email"
                    type="email"
                    value={formik.values.email}
                    validate={schemas.registerSchema.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="brand-maze@gmail.com"
                  />
                  {!formik.values.email ? null : !formik.errors.email ? (
                    <IconValid color={theme.colors.grey} />
                  ) : (
                    <IconInValid color={theme.colors.grey} />
                  )}
                  {formik.errors.email && formik.touched.email ? (
                    <ErrorBox>{formik.errors.email}</ErrorBox>
                  ) : null}
                </FormRegisterItemContainer>
                <FormRegisterItemContainer>
                  <Label htmlFor="phone">Mobile phone</Label>
                  <InputWithStyle
                    style={{
                      borderColor: showAccentValidateInput(
                        formik.values.phone,
                        formik.errors.phone,
                      ),
                    }}
                    id="phone"
                    name="phone"
                    type="phone"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    onBlur={formik.handleBlur}
                    placeholder="1234567890"
                  />
                  {!formik.values.phone ? null : !formik.errors.phone ? (
                    <IconValid color={theme.colors.grey} />
                  ) : (
                    <IconInValid color={theme.colors.grey} />
                  )}
                  {formik.errors.phone && formik.touched.phone ? (
                    <ErrorBox>{formik.errors.phone}</ErrorBox>
                  ) : null}
                </FormRegisterItemContainer>
              </FormRegisterColumn>
              <FormRegisterColumn>
                <FormRegisterItemContainer>
                  <Label htmlFor="company">Company</Label>
                  <InputWithStyle
                    style={{
                      borderColor: showAccentValidateInput(
                        formik.values.company,
                        formik.errors.company,
                      ),
                    }}
                    name="company"
                    id="company"
                    type="text"
                    value={formik.values.company}
                    onBlur={formik.handleBlur}
                    onChange={e => {
                      formik.handleChange(e);
                    }}
                    placeholder="Brand-Maze"
                  />
                  {!formik.values.company ? null : !formik.errors.company ? (
                    <IconValid color={theme.colors.grey} />
                  ) : (
                    <IconInValid color={theme.colors.grey} />
                  )}

                  {formik.errors.company && formik.touched.company ? (
                    <ErrorBox>{formik.errors.company}</ErrorBox>
                  ) : null}
                </FormRegisterItemContainer>
                <FormRegisterItemContainer>
                  <Label htmlFor="position">Position</Label>
                  <InputWithStyle
                    style={{
                      borderColor: showAccentValidateInput(
                        formik.values.position,
                        formik.errors.position,
                      ),
                    }}
                    name="position"
                    id="position"
                    type="text"
                    value={formik.values.position}
                    onBlur={formik.handleBlur}
                    onChange={e => {
                      formik.handleChange(e);
                    }}
                    placeholder="CEO"
                  />
                  {!formik.values.position ? null : !formik.errors.position ? (
                    <IconValid color={theme.colors.grey} />
                  ) : (
                    <IconInValid color={theme.colors.grey} />
                  )}

                  {formik.errors.position && formik.touched.position ? (
                    <ErrorBox>{formik.errors.position}</ErrorBox>
                  ) : null}
                </FormRegisterItemContainer>
              </FormRegisterColumn>
              <FormRegisterItemContainer></FormRegisterItemContainer>
            </FormRegisterContainer>
            <ContainerRadioButton>
              <TitlePackage>Package</TitlePackage>
              <ListRadioButton>
                <LabelRadioButtonContainer
                  className="packageContainer active"
                  data-info="Basic"
                  onClick={e => handleChangeClass(e)}
                >
                  <LabelRadioButtonCheck className="labelRadioButtonCheck" />
                  <LabelRadioButton>
                    <InputWithStyle
                      style={{ display: 'none' }}
                      name="packageUser"
                      type="radio"
                      onChange={formik.handleChange}
                      value="Basic"
                      onBlur={formik.handleBlur}
                      checked={formik.values.packageUser === 'Basic'}
                    />
                    Basic
                  </LabelRadioButton>
                </LabelRadioButtonContainer>
                <LabelRadioButtonContainer
                  className="packageContainer"
                  data-info="Pro"
                  onClick={e => handleChangeClass(e)}
                >
                  <LabelRadioButtonCheck className="labelRadioButtonCheck" />
                  <LabelRadioButton>
                    <InputWithStyle
                      style={{ display: 'none' }}
                      name="packageUser"
                      type="radio"
                      onChange={formik.handleChange}
                      value="Pro"
                      onBlur={formik.handleBlur}
                      checked={formik.values.packageUser === 'Pro'}
                    />
                    Pro
                  </LabelRadioButton>
                </LabelRadioButtonContainer>
                <LabelRadioButtonContainer
                  className="packageContainer"
                  data-info="Expert"
                  onClick={e => handleChangeClass(e)}
                >
                  <LabelRadioButtonCheck className="labelRadioButtonCheck" />
                  <LabelRadioButton>
                    <InputWithStyle
                      style={{ display: 'none' }}
                      name="packageUser"
                      type="radio"
                      onChange={formik.handleChange}
                      value="Expert"
                      onBlur={formik.handleBlur}
                      checked={formik.values.packageUser === 'Expert'}
                    />
                    Expert
                  </LabelRadioButton>
                </LabelRadioButtonContainer>
              </ListRadioButton>
            </ContainerRadioButton>
            <BtnContainerRegistration>
              <div>
                <ButtonRegistration
                  type="submit"
                  aria-label="submit registration"
                  disabled={
                    formik.values.name === '' ||
                    formik.values.surname === '' ||
                    formik.values.email === '' ||
                    formik.values.phone === '' ||
                    formik.values.company === '' ||
                    formik.values.position === ''
                  }
                >
                  Send application
                </ButtonRegistration>
              </div>
              <BoxText>
                <SpanRegistration>
                  {'Already have an account?'}
                </SpanRegistration>{' '}
                <StyledLink to="/login" styled={{ cursor: 'pointer' }}>
                  <SpanRegistration>Log In</SpanRegistration>
                </StyledLink>
              </BoxText>
            </BtnContainerRegistration>
          </FormRegister>
        </Formik>
      </FormContainer>
    </FormSection>
  );
};

export default RegisterForm;
