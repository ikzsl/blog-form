import axios from 'axios';
import routes from '../routes';

const fetchLoginFailure = (errorMessage) => ({
  type: 'CHANGE_FETCH_STATUS',
  payload: errorMessage,
});

const fetchLoginSuccess = () => ({
  type: 'CHANGE_FETCH_STATUS',
  payload: null,
});

const loginUser = (userObj) => ({
  type: 'LOGIN_USER',
  payload: userObj,
});

export const logoutUser = () => ({
  type: 'LOGOUT_USER',
});

// ------------------ userPostFetch ----------------------

export const userPostFetch = (user) => async (dispatch) => {
  try {
    const url = routes.userPostUrl();
    const response = await axios.post(url, { user });
    const { data } = response;
    localStorage.setItem('token', data.user.token);
    dispatch(fetchLoginSuccess());
    dispatch(loginUser(data.user));
  } catch (err) {
    const { errors } = err.response.data;
    const errorName = Object.keys(errors);
    const errorMessage = `${errorName[0]} ${errors[errorName[0]].join(' ')}`;
    dispatch(fetchLoginFailure(errorMessage));
  }
};

// ------------------ userLoginFetch ----------------------

export const userLoginFetch = (user) => async (dispatch) => {
  try {
    const url = routes.userLoginUrl();
    const response = await axios.post(url, { user });
    const { data } = response;
    localStorage.setItem('token', data.user.token);
    dispatch(fetchLoginSuccess());
    dispatch(loginUser(data.user));
  } catch (err) {
    const { errors } = err.response.data;
    const errorName = Object.keys(errors);
    const errorMessage = `${errorName[0]} ${errors[errorName[0]].join(' ')}`;
    dispatch(fetchLoginFailure(errorMessage));
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
    localStorage.removeItem('token');
  }
};
