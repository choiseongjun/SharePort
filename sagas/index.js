import { all, fork } from 'redux-saga/effects';
import user from './user';
import post from './post';
/*
  @Date 2019-08-02
  @author 최성준
  @brief 루트 리듀서
*/
export default function* rootSaga() {
  yield all([
    fork(user),
    fork(post),
  ]);
}
