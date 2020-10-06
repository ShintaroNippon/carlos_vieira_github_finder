import { ADD_USERS_COMPANIES } from '../constants/action-types';

const initialState = {
  users: [],
  companies: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_USERS_COMPANIES) {
    return Object.assign({}, state, {
      users: action.payload.users,
      companies: action.payload.companies
    });
  }
  return state;
}

export default rootReducer;
