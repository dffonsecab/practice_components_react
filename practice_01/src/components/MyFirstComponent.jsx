//import React from 'react'

const MyFirstComponent = () => {

  const name="Diego Fernando";
  const github_profile="https://github.com/dffonsecab"
  const student={name:"Diego", 
    lastName:"Fonseca",
    mobile:"3114898345", 
    linkedinProfile:"https://www.linkedin.com/in/diego-fernando-fonseca-b8827aa1/"};

  return (
    <>
    <div className="container">
    <div className='m-2'>
        My FirstComponent
    </div>
    <h1>Estoy Aprendiendo Componentes en React</h1>
    <ul>
        <li>Componentes</li>
        <li>Eventos</li>
        <li>Estados Hooks</li>
        <li>Props</li>  
    </ul>
    </div>

    <div className="container">
    <h1>Datos del Docente</h1>
    <p>nombre <strong>{ name }</strong> </p>
    <p>GitHub <strong>{ github_profile }</strong> </p>
    
    </div>

    <div className="container">
    <h1>Datos del Estudiante</h1>
    <p>Nombre   <strong>{ student.name }</strong> </p>
    <p>Apellido <strong>{ student.lastName }</strong> </p>
    <p>Celular  <strong>{ student.mobile }</strong> </p>
    <p>Linkedin <a href={ student.linkedinProfile }>{ student.linkedinProfile } </a> </p>
    </div>
 
    
    <div>
    <h3>Objeto Completo</h3>
     <pre>{JSON.stringify(student)}</pre>
    </div>

    </>
  )
}

export default MyFirstComponent
