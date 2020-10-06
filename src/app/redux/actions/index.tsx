import { ADD_USERS_COMPANIES } from '../constants/action-types';

export function addUsersAndCompanies(payload: any) {
  return { type: ADD_USERS_COMPANIES, payload };
}
