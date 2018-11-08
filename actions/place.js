// place.js

import { SET_ADDRESS } from './types';

export const addPlace = newAddress => {
  return {
    type: SET_ADDRESS,
    payload: newAddress
  }
}
