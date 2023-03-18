import {React , useEffect , useState} from 'react';
import {Login , Home} from './Components/pages';
import { BrowserRouter as Router , Routes , Route,  Navigate } from 'react-router-dom';
import { AuthContext, AuthProvider} from './Context/AuthContext';
import { useContext } from 'react';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
        <Routes>
          <Route index element={<Home/>}></Route>
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App

