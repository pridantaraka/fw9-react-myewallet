import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import CreatePin from './pages/CreatePin'
import Pin from './pages/Pin'
import ForgetPwd from './pages/ForgetPwd'
import CreateNewPwd from './pages/CreateNewPwd'
import Dashboard from './homepages/Dashboard'
import Historypage from './homepages/Historypage'
import Confirmpage from './homepages/Confirmpage'
import Profilepage from './homepages/Profilepage'
import Personalinfo from './homepages/Personalinfo';
import Searchpage from './homepages/Searchpage';
import Changepwd from './homepages/Changepwd';
import ChangePin from './homepages/ChangePin';
import Addphone from './homepages/Addphone';
import Managephone from './homepages/Managephone';
import Topup from './homepages/Topup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />}/>
        <Route path="signup" element={<Signup />}/>
        <Route path="createpin" element={<CreatePin />}/>
        <Route path="pinsuccess" element={<Pin />}/>
        <Route path="forgetpwd" element={<ForgetPwd />}/>
        <Route path="createnewpwd" element={<CreateNewPwd />}/>
        <Route path="dashboard" element={<Dashboard />}/>
        <Route path="historypage" element={<Historypage />}/>
        <Route path="confirmpage" element={<Confirmpage />}/>
        <Route path="profilepage" element={<Profilepage />}/>
        <Route path="personalinfo" element={<Personalinfo />}/>
        <Route path="searchpage" element={<Searchpage />}/>
        <Route path="changepwd" element={<Changepwd />}/>
        <Route path="changepin" element={<ChangePin />}/>
        <Route path="addphone" element={<Addphone />}/>
        <Route path="managephone" element={<Managephone />}/>
        <Route path="topup" element={<Topup />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App