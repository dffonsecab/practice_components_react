import PropTypes from "prop-types"



const Childs= (props) => {

  let nom=props.nombres;

  return (
    <div>
        {nom}
    </div>
  )
}

export default Childs

Childs.propTypes={

  nombres: PropTypes.string
 
}