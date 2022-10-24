import {
  AUTH_SUCCESS,
  AUTH_REQUEST,
  AUTH_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT,
  LOGOUT_FAILURE,
  CLEAR_REGISTRATION_STATUS_CODE,
} from 'actions/actionTypes';

const initialState = {
  isLoading: false,
  token: null,
  authError: null,
  registrationError: null,
  registrationStatusCode: null,
  userID: null,
  city: null,
};

const authReducer = (state = initialState, action) => {
  const {payload} = action;

  switch (action.type) {
    case AUTH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        authError: null,
        token: payload.token,
        email: payload.email,
        firstname: payload.firstname,
        lastname: payload.lastname,
        city: payload.city,
        userID: payload.userID,
      };
    case AUTH_FAILURE:
      return {
        ...state,
        authError: payload.message,
        isLoading: false,
      };
    case CLEAR_REGISTRATION_STATUS_CODE:
      return {
        ...state,
        registrationStatusCode: null,
      };

    case LOGOUT:
      return {
        isLoading: false,
        token: null,
        email: null,
        firstname: null,
        lastname: null,
        userID: null,
        city: null,
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        registrationError: null,
        registrationStatusCode: payload.statusCode,
      };
    case REGISTER_FAILURE:

      return {
        ...state,
        isLoading: false,
        registrationError: payload.message,
        registrationStatusCode: payload.statusCode,
      };

    default:
      return state;
  }
};

export default authReducer;
