import { combineReducers } from 'redux';
import user from './user';
import post from './post';

/*
  @Date 2019-08-02
  @author 최성준
  @brief 루트 리듀서
*/
const rootReducer = combineReducers({
  user,
  post,
}); 

export default rootReducer;
