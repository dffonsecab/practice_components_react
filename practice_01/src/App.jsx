import React, { useState } from 'react';

import './App.css'

import Childs from './components/Childs'
import FourComponent from './components/FourComponent';

function App() {
  
  const[nombre, SetName ]= useState();

 

  return (
    <>
    
    <div className='App'>
    <header className='App-header'>
    <hr className='white-hr'/>
    <Childs
      nombre={nombre}
      SetName={SetName}
      />
    <hr className='white-hr'/>
     <FourComponent/>
    <hr className='white-hr'/>
      </header>
      </div>
    </>
  )
}

export default App
