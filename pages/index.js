
import React from 'react';
import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';
import { useSelector } from 'react-redux';
import SharePortForm from '../components/SharePort/SharePortForm';

/*
  @Date 2019-08-02
  @author 최성준
  @brief 홈
*/
const home  = () => {  
    const { isLoggedIn } = useSelector(state => state.user);
    const { mainPosts } = useSelector(state => state.post);

    console.log(mainPosts)
    return (
    <>
           <div name="LoginCheck">
                {isLoggedIn
                ? <UserProfile />
                : <LoginForm />}
            </div>  
            <div>
              <h1>포트폴리오 작성하기</h1>
              <SharePortForm />
            </div>
    </>
   );
}; 


export default home;