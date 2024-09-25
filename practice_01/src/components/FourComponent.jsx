import React from "react";

const FourComponent = () => {
  const nombre = (x, y) => {
    x = 15;
    y = 20;

    alert(x ** y);
  };

  const handledClicked = (e, name) => {
    alert("Has Hecho Click en el boton " + name);
  };

  const handleDoubleClicked = () => {
    alert("Has Hecho Double Click en el boton ");
  };

  const handlerMouseEnter = (e) => {
    alert("Has Entrado a la Caja");
  };

  const handleMouseLeave = (e) => {
    alert("Has Salido de la Caja");
  };

  const handleMouse = (e, action) => {
    alert(`Has ${action} la caja`);
  };

  const handleInsideInput = (e, action) => {
    console.log(`Has entrado ${action}`);
  };

  const handleOutSideInput = (e, action) => {
    console.log(`Has Salido ${action}`);
  };

  return (
    <div>
      <h1>Cuarto Componente</h1>
      {/* Evento Click*/}
      <div>
        
        <button className="btn btn-danger" onClick={nombre}>
          Haz Click
        </button>
      </div>

      <div>
        <button
          className="btn btn-success"
          onClick={(e) => handledClicked(e, "Diego")}
        >
          Aqui tambien haz click
        </button>
      </div>

      <div>
        {" "}
        <button className="btn btn-info" onDoubleClick={handleDoubleClicked}>
          Haz Doble Click
        </button>
      </div>

      <div>
        {" "}
        <button className="btn btn-info" onMouseOver={handleDoubleClicked}>
          Haz Doble Click
        </button>
      </div>

      <div
        id="box1"
        onMouseEnter={(e) => handlerMouseEnter(e)}
        onMouseLeave={(e) => handleMouseLeave(e)}
      >
        <p>Pasa el mouse por encima</p>
      </div>

      <div
        id="box2"
        className="mt-4"
        onMouseEnter={(e) => handleMouse(e, "Entrado")}
        onMouseLeave={(e) => handleMouse(e, "Salido")}
      ></div>

      <div className="mt-4">
        <input
          type="text"
          onFocus={(e) => {
            handleInsideInput(e);
          }}
          onBlur={(e) => {
            handleOutSideInput(e);
          }}
        />{" "}
      </div>
    </div>
  );
};

export default FourComponent;
