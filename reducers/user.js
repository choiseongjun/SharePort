
/*
  @Date 2019-08-02
  @author 최성준
  @brief 유저관련 리듀서
*/
const dummyUser = {
  nickname: '최성준',
  Post: [],
  Followings: [],
  Followers: [],
  id: 1,
};
const initialState={
  isLoggedIn: false, // 로그인 여부
  isLoggingOut: false, // 로그아웃 시도중
  isLoggingIn: false, // 로그인 시도중
  logInErrorReason: '', // 로그인 실패 사유
  isSignedUp: false, // 회원가입 성공
  isSigningUp: false, // 회원가입 시도중
  signUpErrorReason: '', // 회원가입 실패 사유
  me: null, // 내 정보
}
//액션 이름들..
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'; 

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

const loginAction = {
    data : {
        nickname : '최성준',
    }
};
export const logoutAction = {
    type: LOG_OUT_REQUEST,
  };
  export default (state = initialState, action) => {

    switch (action.type) {
      case LOG_IN_REQUEST: {
        return {
          ...state,
          isLoggingIn: true,
          logInErrorReason: '',
        };
      }
      case LOG_IN_SUCCESS: {
        return {
          ...state,
          isLoggingIn: false,
          isLoggedIn: true,
          me: dummyUser,
          isLoading: false,
        };
      }
      case LOG_IN_FAILURE: {
        return {
          ...state,
          isLoggingIn: false,
          isLoggedIn: false,
          logInErrorReason: action.error,
          me: null,
        };
      }
      case LOG_OUT_REQUEST: {
        return {
          ...state,
          isLoggedIn: false,
          me: null,
        };
      }
      case SIGN_UP_REQUEST: {
        return {
          ...state,
          isSigningUp: true,
          isSignedUp: false,
          signUpErrorReason: '',
        };
      }
      case SIGN_UP_SUCCESS: {
        return {
          ...state,
          isSigningUp: false,
          isSignedUp: true,
        };
      }
      case SIGN_UP_FAILURE: {
        return {
          ...state,
          isSigningUp: false,
          signUpErrorReason: action.error,
        };
      } 
        default: {
        return {
            ...state,
            }
        }
    }
};
