import React, { useEffect } from 'react';
import {GoogleOutlined , FacebookOutlined} from '@ant-design/icons';
import { useAuth } from '../../Context/AuthContext';
import './login.css';
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const {googleSignIn , currentUser} = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect (() => {
    if(currentUser != null ){
      navigate('/Clone__Chat/');
      console.log(currentUser)
    }
  },[currentUser])

  return (
    <div className='login__container'>
      <div className='login__wrapper'>
        <p>WELCOME !!</p>
        <p>What's App Clone</p>
        <form>
            <div className='login__button__google' onClick={handleGoogleSignIn}>
              <GoogleOutlined /> Sign In With Google
            </div>
            {/* <div className='login-button-facebook' onClick={() => auth.signInWithRedirect(new initializeApp.auth.FacebookAuthProvider())}>
              <FacebookOutlined /> Sign In With Facebook
            </div> */}
        </form>
      </div>
    </div>
  )
}

export default Login
