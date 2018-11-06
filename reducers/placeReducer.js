import { UPDATE_ADDRESS } from '../actions/types';

const initialState = {
  placeName: "Hello",
  places: []
};

const addressReducer = (state = initialState, action) => {
  console.log(action);
  
  switch(action.type) {
    case UPDATE_ADDRESS:
    return {
      ...state,
      placeName: action.placeName /* placeName was defined in your action creator */
    };

    default:
      return state;
  }

  
}

export default addressReducer;
