import {React , useContext, useEffect , useState} from 'react';
import '../homepage/navbar.css';
import { signOut } from 'firebase/auth';
import {auth} from "../../firebase";
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';


const Navbar = () => {

  const logout = () => {
    signOut(auth);
  }

  const {currentUser} = useAuth();
  console.log(currentUser)

  return (
    <div className='navbar'>
      <div className='logo'>Clone Chat</div>
      <div className='user'>
        <img src='https://images.pexels.com/photos/10458386/pexels-photo-10458386.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' />
        <span>{currentUser.displayName}</span>
        <Link to='/Clone__Chat/'>
          <button onClick={logout}>Logout</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
