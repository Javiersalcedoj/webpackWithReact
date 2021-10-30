//traemos las dependecias de que isntalamos react y react dom
import React from "react";
import ReactDOM from "react-dom";
//importamos nuestro componente
import App from "./components/App";

//ahora creamos un recurso para decir hacia donde nuestra app se va a importar
//el primer elemnto que recibes es nuestro componente, y luego llama a app prooque lo va a setear, para mostrar dentro de un archivo html nuestra aplicacion;
ReactDOM.render(<App />, document.getElementById('app'));