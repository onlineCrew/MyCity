import {
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
  ADD_ITEM_REQUEST,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE,
} from 'actions/actionTypes';

const initialState = {
  isLoading: false,
  items: [],
};

const userReducer = (state = initialState, action) => {
  const {payload} = action;

  switch (action.type) {
    case FETCH_ITEMS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: [...payload.eventItems.reverse()],
      };
    case FETCH_ITEMS_FAILURE:
      return {
        ...state,
        isLoading: false,
        fetchError: payload.message,
      };
    case ADD_ITEM_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
