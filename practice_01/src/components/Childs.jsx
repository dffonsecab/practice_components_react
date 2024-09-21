
import PropTypes from "prop-types"



const Childs= (props) => {

  const handleChangeName=()=>{
  
    const newName=prompt("Ingresa un nuevo nombre")
    if(newName!="")
      props.SetName(newName);
  
  }

  return (
    <div>

        <p>Nombre Actual: {props.nombre}</p>
        <button className="btn btn-primary" 
        onClick={handleChangeName}>
        Cambiar Nombre</button>
    </div>
  )
}

export default Childs

Childs.propTypes={
  SetName: PropTypes.func,
  nombre: PropTypes.string
 
}