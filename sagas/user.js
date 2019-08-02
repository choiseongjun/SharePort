import { all, fork, takeEvery, call, put, take, delay } from 'redux-saga/effects';

import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, SIGN_UP_REQUEST, SIGN_UP_FAILURE, SIGN_UP_SUCCESS } from '../reducers/user';
/*
  @Date 2019-08-02
  @author 최성준
  @brief 유저관련 리듀서사가
*/
function loginAPI(){
  // 서버에 요청을 보내는 부분
  // return axios.post('/user/login', loginData, {
  //   withCredentials: true,
  // });
};

function* login() { //실제 axios호출시 action 넣기
    try {
      //const result = yield call(logInAPI, action.data);
      // yield call(loginAPI);
      yield delay(1000);
      yield put({ // put은 dispatch 동일
        type: LOG_IN_SUCCESS,
        //data: result.data,
      });
    } catch (e) { // loginAPI 실패
      console.error(e);
      yield put({
        type: LOG_IN_FAILURE,
      });
    }
  }

function* watchLogin() {
    yield takeEvery(LOG_IN_REQUEST, login);//로그인이라는 액션이 들어오는지 기다림
  }
  function signUpAPI() {
    // 서버에 요청을 보내는 부분
    return axios.post('/login');
  }
  
  function* signUp() {
    try {
      // yield call(signUpAPI);
      yield delay(2000);
     
      yield put({ // put은 dispatch 동일
        type: SIGN_UP_SUCCESS,
      });
    } catch (e) { // loginAPI 실패
      console.error(e);
      yield put({
        type: SIGN_UP_FAILURE,
        error: e
      });
    }
  }
  
function* watchSignUp() {
yield takeEvery(SIGN_UP_REQUEST, signUp);
}
function* helloSaga(){
    console.log("saga Test by Seong Jun");
}
export default function* userSaga() {
    yield all([
      fork(watchLogin),
      fork(watchSignUp),
      helloSaga(),
    ]);
  }
  