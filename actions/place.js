// place.js

import { UPDATE_ADDRESS } from './types';

export const addPlace = newAddress => {
  return {
    type: UPDATE_ADDRESS,
    payload: newAddress
  }
}
