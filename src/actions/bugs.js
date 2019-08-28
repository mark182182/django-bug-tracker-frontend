import { ADD_BUG } from '../constants/action-type';

export const addBug = (payload) => {
  return { type: ADD_BUG, payload };
}