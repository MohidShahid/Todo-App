import { useState } from 'react'
import UserContext from './Contexts/index'
import './App.css'
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';
import Foot from './Footer/Foot';
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

function App() {
  const [username, Setusername] = useState('');
  const [Password, SetPassword]  = useState('');
  console.log(username , Password)
  return (
    <>
     <UserContext.Provider value={{Setusername , SetPassword, username}}>

      <Header />
     <Outlet />
     <Foot />
    </UserContext.Provider>
    </>
  )
}

export default App
