const initialState = {
  currentUser: {},
  errors: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_USER':
      return { ...state, currentUser: action.payload };
    case 'LOGOUT_USER':
      return { ...state, currentUser: {} };
    case 'CHANGE_FETCH_STATUS':
      return { ...state, errors: action.payload };
    default:
      return state;
  }
}
