import { TEST } from '../actions/test';

const initialState = { value: 0 };

function test(state = initialState, action) {
  switch (action.type) {
    case TEST:
      return Object.assign({}, state, {
        value: action.payload
      });
    default:
      return state;
  }
}

export default test;
