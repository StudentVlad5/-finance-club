import axios from 'axios';
import PropTypes from 'prop-types';
import { BASE_URL } from 'helpers/constants';

async function fetchData(pathParams) {
  const axiosInstance = axios.create({
    baseURL: `${BASE_URL}${pathParams}`,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
      'Access-Control-Expose-Headers': 'Content-Range',
    },
  });
  return await axiosInstance.get();
}

async function createFormRegistration(pathParams, body) {
  return await axios.post(`${BASE_URL}${pathParams}`, body, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
      'Access-Control-Expose-Headers': 'Content-Range',
    },
  });
}

async function createUserData(pathParams, body, file) {
  const formData = new FormData();
  file && formData.set('avatar', file);
  formData.append('name', body.name);
  formData.append('surname', body.surname);
  formData.append('email', body.email);
  formData.append('password', body.password);
  formData.append('phone', body.phone);
  formData.append('birthday', body.birthday);
  formData.append('company', body.company);
  formData.append('position', body.position);
  body.events.forEach(value => {
    formData.append('events[]', value);
  });
  body.packages.forEach(value => {
    formData.append('packages[]', value);
  });
  formData.append('status', body.status);
  formData.append('role', body.role);

  return await axios.post(`${BASE_URL}${pathParams}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
      'Access-Control-Expose-Headers': 'Content-Range',
    },
  });
}

async function editUserData(pathParams, body, file) {
  console.log('editUserData ~ formData:', body, file);
  const formData = new FormData();
  file && formData.set('avatar', file);
  formData.append('name', body.name);
  formData.append('surname', body.surname);
  formData.append('email', body.email);
  formData.append('phone', body.phone);
  formData.append('birthday', body.birthday);
  formData.append('company', body.company);
  formData.append('position', body.position);
  body.events.forEach(value => {
    formData.append('events[]', value);
  });
  body.packages.forEach(value => {
    formData.append('packages[]', value);
  });
  formData.append('status', body.status);
  formData.append('role', body.role);

  return await axios.patch(`${BASE_URL}${pathParams}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
      'Access-Control-Expose-Headers': 'Content-Range',
    },
  });
}

async function updateUserData(pathParams, body, file) {
  const formData = new FormData();
  file && formData.set('avatar', file);
  formData.append('name', body.name);
  formData.append('surname', body.surname);
  formData.append('email', body.email);
  formData.append('phone', body.phone);
  formData.append('birthday', body.birthday);
  formData.append('company', body.company);
  formData.append('position', body.position);

  return await axios.patch(`${BASE_URL}${pathParams}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
      'Access-Control-Expose-Headers': 'Content-Range',
    },
  });
}

async function changePassword(pathParams, body) {
  const formData = new FormData();
  formData.append('password', body);
  return axios.patch(`${BASE_URL}${pathParams}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
      'Access-Control-Expose-Headers': 'Content-Range',
    },
  });
}

async function updateEventsData(pathParams, body) {
  const formData = new FormData();
  formData.append('date', body.date);
  formData.append('time', body.time);
  formData.append('duration', body.duration);
  formData.append('location', body.location);
  formData.append('title', body.title);
  formData.append('description', body.description);
  body.plan.forEach(value => {
    formData.append('plan[]', value);
  });
  body.speakers.forEach(value => {
    formData.append('speakers[]', value);
  });
  formData.append('moderator', body.moderator);
  body.packages.forEach(value => {
    formData.append('packages[]', value);
  });
  file && file !== 'none'
    ? formData.set('images', file, file.name.replaceAll(' ', '_'))
    : formData.append('image', body.image);

  return await axios.patch(`${BASE_URL}${pathParams}`, formData, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
      'Access-Control-Expose-Headers': 'Content-Range',
    },
  });
}

async function createEventsData(pathParams, body) {
  const formData = new FormData();
  formData.append('date', body.date);
  formData.append('time', body.time);
  formData.append('duration', body.duration);
  formData.append('location', body.location);
  formData.append('title', body.title);
  formData.append('description', body.description);
  body.plan.forEach(value => {
    formData.append('plan[]', value);
  });
  body.speakers.forEach(value => {
    formData.append('speakers[]', value);
  });
  formData.append('moderator', body.moderator);
  body.packages.forEach(value => {
    formData.append('packages[]', value);
  });
  file && formData.set('images', file, file.name.replaceAll(' ', '_'));

  return await axios.post(`${BASE_URL}${pathParams}`, formData, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
      'Access-Control-Expose-Headers': 'Content-Range',
    },
  });
}

async function deleteData(pathParams) {
  const formData = new FormData();
  return axios.delete(`${BASE_URL}${pathParams}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
      'Access-Control-Expose-Headers': 'Content-Range',
    },
  });
}

async function createPackagesData(pathParams, body) {
  const formData = new FormData();
  formData.append('titleEn', body.titleEn);
  formData.append('priceEn', body.priceEn);
  formData.append('contentEn', body.contentEn);
  formData.append('featuresEn', body.featuresEn);
  formData.append('titleUa', body.titleUa);
  formData.append('priceUa', body.priceUa);
  formData.append('contentUa', body.contentUa);
  formData.append('featuresUa', body.featuresUa);
  formData.append('titleDe', body.titleDe);
  formData.append('priceDe', body.priceDe);
  formData.append('contentDe', body.contentDe);
  formData.append('featuresDe', body.featuresDe);

  return await axios.post(`${BASE_URL}${pathParams}`, formData, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
      'Access-Control-Expose-Headers': 'Content-Range',
    },
  });
}

async function updatePackageData(pathParams, body) {
  // console.log(body);
  const formData = new FormData();
  formData.append('titleEn', body.titleEn);
  formData.append('priceEn', body.priceEn);
  formData.append('contentEn', body.contentEn);
  formData.append('featuresEn', body.featuresEn);
  formData.append('titleUa', body.titleUa);
  formData.append('priceUa', body.priceUa);
  formData.append('contentUa', body.contentUa);
  formData.append('featuresUa', body.featuresUa);
  formData.append('titleDe', body.titleDe);
  formData.append('priceDe', body.priceDe);
  formData.append('contentDe', body.contentDe);
  formData.append('featuresDe', body.featuresDe);

  return await axios.patch(`${BASE_URL}${pathParams}`, formData, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
      'Access-Control-Expose-Headers': 'Content-Range',
    },
  });
}

fetchData.propTypes = {
  pathParams: PropTypes.string.isRequired,
};

deleteData.propTypes = {
  pathParams: PropTypes.string.isRequired,
};

updateUserData.propTypes = {
  pathParams: PropTypes.string.isRequired,
  formData: PropTypes.string.isRequired,
  file: PropTypes.string,
};

editUserData.propTypes = {
  pathParams: PropTypes.string.isRequired,
  formData: PropTypes.string.isRequired,
  file: PropTypes.string,
};

createUserData.propTypes = {
  pathParams: PropTypes.string.isRequired,
  formData: PropTypes.string.isRequired,
  file: PropTypes.string,
};

updateEventsData.propTypes = {
  pathParams: PropTypes.string.isRequired,
  formData: PropTypes.string.isRequired,
};

updatePackageData.propTypes = {
  pathParams: PropTypes.string.isRequired,
  formData: PropTypes.string.isRequired,
};

createEventsData.propTypes = {
  pathParams: PropTypes.string.isRequired,
  formData: PropTypes.string.isRequired,
};

createPackagesData.propTypes = {
  pathParams: PropTypes.string.isRequired,
  formData: PropTypes.string.isRequired,
};

createFormRegistration.propTypes = {
  pathParams: PropTypes.string.isRequired,
  formData: PropTypes.string.isRequired,
};

export {
  fetchData,
  createFormRegistration,
  updateUserData,
  createUserData,
  editUserData,
  createEventsData,
  updateEventsData,
  deleteData,
  changePassword,
  createPackagesData,
  updatePackageData,
};
