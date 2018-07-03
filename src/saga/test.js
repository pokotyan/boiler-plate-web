import { put, take, all, fork } from 'redux-saga/effects';
import * as testActions from '../actions/test';

function* test() {
  for (;;) {
    const { payload } = yield take(testActions.TEST);

    yield put(testActions.test(payload));
  }
}

export default function* rootSaga() {
  yield all([fork(test)]);
}
