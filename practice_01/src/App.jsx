import React, { useState } from 'react';

import './App.css'

import ThirdCompnent from './components/ThirdCompnent'
import Childs from './components/Childs'

function App() {
  
  const[nombre, SetName ]= useState();

  { SetName("Diego")}

  return (
    <>
    
    <div className='App'>
    <header className='App-header'>
      <ThirdCompnent 
        name="Diego"
        last_name="Fonseca"
        age="41"
      />
      <hr className='white-hr'/>
      <Childs nombres={nombre} />
     
      </header>
      </div>
    </>
  )
}

export default App
