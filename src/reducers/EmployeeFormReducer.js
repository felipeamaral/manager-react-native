import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVE_SUCCESS,
  EMPLOYEE_DELETE_SUCCESS
} from '../actions/types';

const INITITAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
        return { ... state, [action.payload.prop]: action.payload.value};
    case EMPLOYEE_CREATE:
        return INITITAL_STATE;
    case EMPLOYEE_SAVE_SUCCESS:
      return INITITAL_STATE
    case EMPLOYEE_DELETE_SUCCESS:
      return INITITAL_STATE
    default:
      return state;
  }
}
