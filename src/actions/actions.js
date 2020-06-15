import axios from 'axios';
import { createAction } from 'redux-actions';
import routes from '../routes';

export const changeFetchStatus = createAction('CHANGE_FETCH_STATUS');
export const loginUser = createAction('LOGIN_USER');
export const logoutUser = createAction('LOGOUT_USER');

// ------------------ userPostFetch ----------------------

export const userPostFetch = (user, setFieldError) => async (dispatch) => {
  try {
    const url = routes.userPostUrl();
    const response = await axios.post(url, { user });
    const { data } = response;
    localStorage.setItem('token', data.user.token);
    dispatch(changeFetchStatus(null));
    dispatch(loginUser(data.user));
  } catch (err) {
    const { errors } = err.response.data;
    dispatch(changeFetchStatus(errors));
    setFieldError('email', errors.email);
    setFieldError('username', errors.username);
    setFieldError('password', errors.password);
  }
};

// ------------------ userLoginFetch ----------------------

export const userLoginFetch = (user, setFieldError) => async (dispatch) => {
  try {
    const url = routes.userLoginUrl();
    const response = await axios.post(url, { user });
    const { data } = response;
    localStorage.setItem('token', data.user.token);
    dispatch(changeFetchStatus(null));
    dispatch(loginUser(data.user));
  } catch (err) {
    const { errors } = err.response.data;
    dispatch(changeFetchStatus(errors));
    // setFieldError('email', `email or password ${errors['email or password']}`);
    setFieldError('password', `email or password ${errors['email or password']}`);
  }
};

// --------------------getProfileFetch--------------------

export const getProfileFetch = () => async (dispatch) => {
  const { token } = localStorage;
  if (!token) {
    return;
  }
  try {
    const url = routes.getProfileUrl();
    const response = await axios.get(url, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    const { data } = response;
    dispatch(loginUser(data.user));
  } catch (err) {
    if (err.response.status === 401) {
      localStorage.removeItem('token');
    }
  }
};
