import PropTypes from "prop-types"

const ThirdCompnent = (props) => {
 
  return (

    <div>
         

      <hi>Comunicacion entre componentes</hi>
      <li>{props.name}</li>
      <li>{props.last_name}</li>
      <li>{props.age}</li>
    </div>
  )
}

ThirdCompnent.propTypes={

    name: PropTypes.string,
    last_name:PropTypes.string,
    age:PropTypes.number

}
export default ThirdCompnent
