import './App.css';
import React, { useState } from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import TextForm from "./Components/TextForm";
import About from "./Components/About";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert('Dark Mode Enabled','success');
      document.title="Text-Utils Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Light Mode Enabled','success');
      document.title="Text-Utils";
    }
  }
  const [alert, setAlert] = useState(null);
  let showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
    
  }
  return (
    <>
      <BrowserRouter>
      <Navbar title1="Text-Utils" title2="Home" title3="About" mode={mode} toggle={toggleMode}/>
     <Alert alert={alert}/>
      <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}/>
          <Route exact path="/" element={<div className="container"><TextForm heading="Enter the text" mode={mode} showAlert={showAlert}/></div>}/>    
        </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;
