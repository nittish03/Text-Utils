import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
}from "react-router-dom";

function App() {

const [tc,setTc] = useState('dark');
const [Mode, setMode] = useState('light');
const [buttonColor,setButtonColor] = useState('success')


const toggleMode=()=>{
  if(Mode==='light'){
    setMode('dark');
    document.getElementById("myBox").style.backgroundColor="grey";
    document.getElementById("myBox").style.color="white";
    document.body.style.backgroundColor="#131517";
    document.body.style.color="white";
    document.title="textUtils-dark-mode"
    setButtonColor('warning');
    setTc('light');
    toast.success("dark mode has been enabled")
  }else{
    setMode('light'); 
    document.getElementById("myBox").style.backgroundColor="white";
    document.body.style.backgroundColor="white";
    document.getElementById("myBox").style.color="black";
    toast.success("light mode has been enabled");
    document.body.style.color="black";
    setTc('dark');
    setButtonColor('success');
    document.title="textUtils-light-mode"

  }
}

  return (
  <>
  <BrowserRouter>

<Navbar title="TextUtils" mode={Mode} tc={tc} toggleMode={toggleMode} aboutText="about"></Navbar>
 <Toaster />
  <Routes>
    <Route exact path='/Home' element={<TextForm 
     heading="Enter the text to analyse below" buttonColor={buttonColor} ></TextForm>}></Route>
    <Route exact path='/' element={<TextForm 
    heading="Enter the text to analyse below" buttonColor={buttonColor}></TextForm>}></Route>
  </Routes>

  </BrowserRouter>
  </>
  );
}
export default App;
