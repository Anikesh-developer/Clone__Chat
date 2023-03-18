import React, { useContext , useRef , useState , useEffect , avatar} from 'react'
import { ChatEngine } from 'react-chat-engine';
import {useAuth} from '../../Context/AuthContext';
import {Navbar} from '../homepage';
import axios from 'axios';
import '../pages/home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const {currentUser} = useAuth();
  const navigate = useNavigate();

  const [loading , setLoading] = useState(true);

  const getFile = async (url) =>{
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], 'userPhoto.jpg', {type:'image/jpeg'})
  };

  useEffect(() => {

    if (!currentUser){
      navigate('/Clone__Chat/')
      return;
    }

    axios.get('https://api.chatengine.io/users/me/', {
      headers: {
        "project-id":process.env.REACT_APP_CHAT_ENGINE_ID,
        "user-name" : currentUser.email,
        "user-secret" : currentUser.uid,
      }
    })
    .then (() => {
      setLoading(false);
    })
    .catch(() => {
      let formdata = new FormData();
      formdata.append('email', currentUser.email);
      formdata.append('username', currentUser.email);
      formdata.append('secret', currentUser.uid);
  
      getFile(currentUser.photoURL)
        .then((avatar) => {
          formdata.append('avatar' , avatar , avatar.name);
  
          axios.post('https://api.chatengine.io/users/', 
            formdata ,
            {headers:{"private-key":process.env.REACT_APP_CHAT_ENGINE_KEY}}
          )
          .then(() => setLoading(false))
          .catch((error)=> console.log(error))
        })
    })   
  }, [currentUser,navigate])

  if (!currentUser) {
    return 'Loading...' ;
  }

  return (
    <div className='home'>
      <div className='container'>
        <Navbar />
        <ChatEngine 
          height="calc(100vh - 52px)"
          projectID = {process.env.REACT_APP_CHAT_ENGINE_ID}
          userName = {currentUser.email}
          userSecret = {currentUser.uid}
        />
      </div>
    </div>
  )
}

export default Home
