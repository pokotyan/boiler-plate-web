import { put, take, all, fork } from 'redux-saga/effects';
import req from '../service/Request';
import * as testActions from '../actions/test';
import getToken from '../service/Auth/get-token';

const token = getToken();

function* test() {
  for (;;) {
    const { payload } = yield take(testActions.TEST);

    const result = yield req.get(
      'https://eopxaejqa5.execute-api.ap-northeast-1.amazonaws.com/dev/user-profile',
      {
        params: { accessToken: token.accessToken }
      }
    );

    console.log(result);

    yield put(testActions.test(result));
  }
}

export default function* rootSaga() {
  yield all([fork(test)]);
}
