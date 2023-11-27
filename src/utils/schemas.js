import * as Yup from 'yup';

const registerSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/\S{2,}/, 'Name too short (min 2)')
    .matches(
      /((\s*[a-zA-Z]+\s*){2,}|[a-zA-Z]{2,})/,
      'Name must includes only Latin alphabet',
    )
    .required('Require field'),
  surname: Yup.string()
    .matches(/\S{2,}/, 'Name too short (min 2)')
    .matches(
      /((\s*[a-zA-Z]+\s*){2,}|[a-zA-Z]{2,})/,
      'Name must includes only Latin alphabet',
    )
    .required('Require field'),
  email: Yup.string()
    .matches(/^\s*\S+\s*$/, 'Email must be without spaces')
    .matches(/\S{7,}/, 'Email too short (min 7 symbols)')
    .matches(
      /^(?=.{7,63}$)([^а-яА-Я]+@([a-zA-Z]+\.)+[a-zA-z]{2,3})$/g,
      'Invalid email',
    )
    .matches(
      /^[^-]+((.*[^-]))*@([a-zA-Z]+\.)+[a-zA-z]{2,3}$/g,
      'Dashes should only be inside email',
    )
    .required('Require field'),
  phone: Yup.number()
    .nullable(true)
    .required('Require field')
    .min(99999)
    .max(999999999999),
  company: Yup.string()
    .matches(/\S{2,}/, 'Company too short (min 2)')
    .matches(
      /((\s*[a-zA-Z]+\s*){2,}|[a-zA-Z]{2,})/,
      'Company must includes only Latin alphabet',
    )
    .required('Require field'),
  position: Yup.string()
    .matches(/\S{2,}/, 'Position too short (min 2)')
    .matches(
      /((\s*[a-zA-Z]+\s*){2,}|[a-zA-Z]{2,})/,
      'Position must includes only Latin alphabet',
    )
    .required('Require field'),
  packages: Yup.string(),
});

const schemasLogin = Yup.object().shape({
  email: Yup.string()
    .matches(/^\s*\S+\s*$/, 'Email must be without spaces')
    .matches(/\S{7,}/, 'Email too short (min 7 symbols)')
    .matches(
      /^(?=.{7,63}$)([^а-яА-Я]+@([a-zA-Z]+\.)+[a-zA-z]{2,3})$/g,
      'Invalid email',
    )
    .matches(
      /^[^-]+((.*[^-]))*@([a-zA-Z]+\.)+[a-zA-z]{2,3}$/g,
      'Dashes should only be inside email',
    )
    .required('Require'),
  password: Yup.string()
    .min(4, 'Password too short (min 4)')
    .max(32, 'Password too long (max 32)')
    .matches(/^\s*\S+\s*$/, 'Password must be without spaces')
    .required('Require'),
});

const changePasswordSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^\s*\S+\s*$/, 'Email must be without spaces')
    .matches(/\S{7,}/, 'Email too short (min 7 symbols)')
    .matches(
      /^(?=.{7,63}$)([^а-яА-Я]+@([a-zA-Z]+\.)+[a-zA-z]{2,3})$/g,
      'Invalid email',
    )
    .matches(
      /^[^-]+((.*[^-]))*@([a-zA-Z]+\.)+[a-zA-z]{2,3}$/g,
      'Dashes should only be inside email',
    )
    .required('Require field'),
});

const updateSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/\S{2,}/, 'Name too short (min 2)')
    .matches(
      /((\s*[a-zA-Z]+\s*){2,}|[a-zA-Z]{2,})/,
      'Name must includes only Latin alphabet',
    )
    .required('Require field'),
  surname: Yup.string()
    .matches(/\S{2,}/, 'Name too short (min 2)')
    .matches(
      /((\s*[a-zA-Z]+\s*){2,}|[a-zA-Z]{2,})/,
      'Surname must includes only Latin alphabet',
    ),
  email: Yup.string()
    .matches(/^\s*\S+\s*$/, 'Email must be without spaces')
    .matches(/\S{7,}/, 'Email too short (min 7 symbols)')
    .matches(
      /^(?=.{7,63}$)([^а-яА-Я]+@([a-zA-Z]+\.)+[a-zA-z]{2,3})$/g,
      'Invalid email',
    )
    .matches(
      /^[^-]+((.*[^-]))*@([a-zA-Z]+\.)+[a-zA-z]{2,3}$/g,
      'Dashes should only be inside email',
    )
    .required('Require field'),
  phone: Yup.number()
    .nullable(true)
    .required('Require field')
    .min(99999)
    .max(999999999999),
  birthday: Yup.date(),
  company: Yup.string()
    .matches(/\S{2,}/, 'Company too short (min 2)')
    .matches(
      /((\s*[a-zA-Z]+\s*){2,}|[a-zA-Z]{2,})/,
      'Company must includes only Latin alphabet',
    )
    .required('Require field'),
  position: Yup.string()
    .matches(/\S{2,}/, 'Position too short (min 2)')
    .matches(
      /((\s*[a-zA-Z]+\s*){2,}|[a-zA-Z]{2,})/,
      'Position must includes only Latin alphabet',
    )
    .required('Require field'),
  company: Yup.string(),
});

const updatePasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(7, 'Password too short (min 7)')
    .max(32, 'Password too long (max 32)')
    .matches(/^\s*\S+\s*$/, 'Password must be without spaces')
    .required('Require field'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Your passwords do not match')
    .required('Require field'),
});

const schemasEvents = Yup.object().shape({
  date: Yup.date().required('Require field'),
  time: Yup.string().required('Require field'),
  duration: Yup.string(),
  location: Yup.string().required('Require field'),
  title: Yup.string().required('Require field'),
  description: Yup.string().required('Require field'),
  plan: Yup.mixed(),
  speakers: Yup.array().required('Require field'),
  moderator: Yup.string(),
  packages: Yup.array().required('Require field'),
  image: Yup.string(),
});

const schemas = {
  registerSchema,
  schemasLogin,
  changePasswordSchema,
  updateSchema,
  updatePasswordSchema,
  schemasEvents,
};

export default schemas;
