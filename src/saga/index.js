import { fork, all } from 'redux-saga/effects';
import test from './test';

export default function* rootSaga() {
  yield all([fork(test)]);
}
