import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
// import { useState } from 'react';
import React, { useState } from "react"
// import About from './component/About';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
 const[mode, setMode]= useState('light')// whether dark mode enable or not
 const toggleMode = ()=>{
   if(mode === 'light'){
     setMode( 'dark')
     document.body.style.backgroundColor = '#042743'
     document.title = "TextReader-Home-Dark Mode"
   }
   else{
     setMode('light')
     document.body.style.backgroundColor = 'white'
     document.title = "TextReader-Home-light Mode"
   }
 }
  return (
    <>
  {/* <Navbar title="Text" aboutText ="About Text"/> */}
  <Navbar title="Text" mode={mode} toggleMode = {toggleMode}/>
  <div className="container">
  <Textform heading = "Enter the text to analyze" mode={mode}/>
  {/* <About/> */}
  </div>
  </>
  );
}

export default App;
