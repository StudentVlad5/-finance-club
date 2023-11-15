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

async function createUserData(pathParams, body, file) {
  const formData = new FormData();
  file && formData.set('avatar', file);
  formData.append('name', body.name);
  formData.append('surname', body.surname);
  formData.append('email', body.email);
  formData.append('phone', body.phone);
  formData.append('birthday', body.birthday);
  formData.append('company', body.company);
  formData.append('position', body.position);
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

createUserData.propTypes = {
  pathParams: PropTypes.string.isRequired,
  formData: PropTypes.string.isRequired,
  file: PropTypes.string,
};

updateEventsData.propTypes = {
  pathParams: PropTypes.string.isRequired,
  formData: PropTypes.string.isRequired,
};

createEventsData.propTypes = {
  pathParams: PropTypes.string.isRequired,
  formData: PropTypes.string.isRequired,
};

export {
  fetchData,
  updateUserData,
  createUserData,
  createEventsData,
  updateEventsData,
  deleteData,
  changePassword,
};
