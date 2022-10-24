import axios from 'axios';
import {
  AUTH_SUCCESS,
  AUTH_REQUEST,
  AUTH_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
  ADD_ITEM_REQUEST,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE,
  LOGOUT,
  CLEAR_AUTH_ERROR,
} from 'actions/actionTypes';
import {ADDRESS} from 'constants';
import {containsAnyLetters} from 'utils';
import Geocoder from 'react-native-geocoding';
import {GOOGLE_API_KEY} from 'constants';

Geocoder.init(GOOGLE_API_KEY, {language: 'pl'});

export const authenticateAction = (login, password) => {
  return function (dispatch) {
    dispatch({type: `${AUTH_REQUEST}`});
    axios
      .post(`${ADDRESS}/login`, {
        email: login,
        password: password,
      })
      .then(res => {
        dispatch({
          type: `${AUTH_SUCCESS}`,
          payload: {
            token: res.data.token,
            email: res.data.email,
            firstname: res.data.firstname,
            lastname: res.data.lastname,
            city: res.data.city,
            userID: res.data.userID,
          },
        });
      })
      .catch(err => {
        dispatch({
          type: `${AUTH_FAILURE}`,
          payload: {
            message: err.response.data.message,
          },
        });
      });
  };
};

export const registerAction = (username, email, password, city) => {
  return function (dispatch) {
    dispatch({type: `${REGISTER_REQUEST}`});

    axios
      .post(`${ADDRESS}/register`, {
        name: username,
        email,
        password,
        city,
      })
      .then(res => {
        dispatch({
          type: `${REGISTER_SUCCESS}`,
          payload: {
            statusCode: res.status,
          },
        });
      })
      .catch(err => {
        dispatch({
          type: `${REGISTER_FAILURE}`,
          payload: {
            statusCode: err.response.status,
            message: err.response.data.message,
          },
        });
      });
  };
};

export const logoutAction = () => ({
  type: LOGOUT,
});

export const clearAuthError = () => ({
  type: CLEAR_AUTH_ERROR,
});

export const fetchItems = () => {
  return async function (dispatch, getState) {
    const token = getState().authReducer.token;
    dispatch({type: `${FETCH_ITEMS_REQUEST}`});

    try {
      const response = await axios.get(`${ADDRESS}/api/v1/events`, {
        params: {
          token: token,
        },
      });
      const eventItems = response.data.map(item => {
        const timestamp = item.timestamp + 7200000;
        const [date, time] = new Date(timestamp)
          .toISOString()
          .replace(/T/, ' ')
          .replace(/\..+/, '')
          .split(' ');
        const formattedTime = time.slice(0, -3);

        return {...item, date, time: formattedTime};
      });

      dispatch({
        type: `${FETCH_ITEMS_SUCCESS}`,
        payload: {
          eventItems,
        },
      });
    } catch (err) {
      dispatch({
        type: `${FETCH_ITEMS_FAILURE}`,
        payload: {
          message: err?.response?.data?.message,
        },
      });
    }
  };
};

export const addItem = ({type, title, description, location}) => {
  return async function (dispatch, getState) {
    const token = getState().authReducer.token;
    const userID = getState().authReducer.userID;
    const city = getState().authReducer.city;
    dispatch({type: `${ADD_ITEM_REQUEST}`});

    let address = null;
    let coordinates = null;
    if (containsAnyLetters(location)) {
      const json = await Geocoder.from(`${location} ${city}`);
      const {lat: latitude, lng: longitude} = json.results[0].geometry.location;

      coordinates = `${latitude} ${longitude}`;
      address = location;
    } else {
      const [latitude, longitude] = location.split(' ');
      const json = await Geocoder.from(latitude, longitude);

      address = json.results[0].formatted_address;
      coordinates = location;
    }

    try {
      await axios.post(`${ADDRESS}/api/v1/events`, {
        type,
        title,
        description,
        location: coordinates || null,
        address: address || null,
        userID,
        token,
      });
      dispatch({
        type: `${ADD_ITEM_SUCCESS}`,
        payload: {
          item: {
            type,
            description,
          },
        },
      });
    } catch (err) {
      dispatch({
        type: `${ADD_ITEM_FAILURE}`,
        payload: {
          message: err?.response?.data?.message,
        },
      });
    }
  };
};
