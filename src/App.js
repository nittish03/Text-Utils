import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import React, { useState } from 'react';
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
const [alert, setAlert] = useState(null);

const showAlert=(message,type)=>{
setAlert({
  msg:message,
  type:type
})
setTimeout(() => {
  setAlert(null);
}, 2000);
}

const toggleMode=()=>{
  if(Mode==='light'){
    setMode('dark');
    showAlert("dark mode has been enabled","success");
    document.getElementById("myBox").style.backgroundColor="grey";
    document.getElementById("myBox").style.color="white";
    document.body.style.backgroundColor="#131517";
    document.body.style.color="white";
    document.title="textUtils-dark-mode"
    setTc('light');
  }else{
    setMode('light'); 
    showAlert("light mode has been enabled","success");
    document.getElementById("myBox").style.backgroundColor="white";
    document.body.style.backgroundColor="white";
    document.getElementById("myBox").style.color="black";

    document.body.style.color="black";
    setTc('dark');
    document.title="textUtils-light-mode"

  }
}

  return (
  <>
  <BrowserRouter>

<Navbar title="TextUtils" mode={Mode} tc={tc} toggleMode={toggleMode} aboutText="about"></Navbar>
<Alert alert={alert} ></Alert>
  <div>
  <Routes>
    <Route showAlert={showAlert} exact path='/about' element={<About></About>}></Route>
    <Route exact path='/Home' element={<div className="container my-3">
<TextForm showAlert={showAlert} heading="Enter the text to analyse below"></TextForm>
</div>
}></Route>
  </Routes>
  </div>

  </BrowserRouter>
  </>
  );
}
export default App;
