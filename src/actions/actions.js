import axios from 'axios';
import { createAction } from 'redux-actions';
import routes from '../routes';

export const changeFetchStatus = createAction('CHANGE_FETCH_STATUS');
export const loginUser = createAction('LOGIN_USER');
export const logoutUser = createAction('LOGOUT_USER');

const userFetch = async (user, dispatch, url) => {
  const response = await axios.post(url, { user });
  const { data } = response;
  localStorage.setItem('token', data.user.token);
  dispatch(changeFetchStatus(null));
  dispatch(loginUser(data.user));
};

// ------------------ userPostFetch ----------------------
export const userPostFetch = (user, setFieldError) => async (dispatch) => {
  try {
    await userFetch(user, dispatch, routes.userPostUrl());
  } catch ({ response }) {
    const { errors } = response.data;
    dispatch(changeFetchStatus(errors));
    setFieldError('email', errors.email);
    setFieldError('username', errors.username);
    setFieldError('password', errors.password);
  }
};

// ------------------ userLoginFetch ----------------------
export const userLoginFetch = (user, setFieldError) => async (dispatch) => {
  try {
    await userFetch(user, dispatch, routes.userLoginUrl());
  } catch ({ response }) {
    const { errors } = response.data;
    dispatch(changeFetchStatus(errors));
    // setFieldError('email', `email or password ${errors['email or password']}`);
    setFieldError('password', `email or password ${errors['email or password']}`);
  }
};

// --------------------getProfileFetch--------------------
export const getProfileFetch = () => async (dispatch) => {
  const { token } = localStorage;

  // await axios.interceptors.request.use((config) => {
  //   config.headers.Authorization = token;
  //   console.log(config.headers.Authorization, token);
  // });

  // -----------------------------
  // const createSetAuthInterceptor = (options) => {
  //   if (options.access) {
  //     config.headers.Authorization = options.access;
  //   } else {
  //     delete config.headers.Authorization;
  //   }
  //   return config;
  // };

  // const setAuthCb = createSetAuthInterceptor(store.state.auth);
  // axios.interceptors.request.use(setAuthCb);
  // -----------------------------

  if (!token) {
    return;
  }
  try {
    await axios.interceptors.request.use((config) => {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Token ${token}`;
      return config;
    });
    const url = routes.getProfileUrl();
    const response = await axios.get(url);
    const { data } = response;
    dispatch(loginUser(data.user));
  } catch (err) {
    if (err.response.status === 401) {
      localStorage.removeItem('token');
    }
  }
};
