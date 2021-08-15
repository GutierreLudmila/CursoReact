//Lineas indispensables 
//1) Tener la variable React en scope 
import React from "react"
//2)Tener la variable React DOM en scope
import ReactDOM  from "react-dom" 
//3)Tener un elemento de React 
//const a = <p> Hola Mundo </p>; 
//3) Tener un elemento React (Componente)
import App from "./App"
import "./estilos.css"

//4)Tener una funcion Render corriendo 
   // Parametro a componente(app) la aplicacion que le pasemos tiene que estar constituida por minimamente un elemento de React, parametro b un nodo en el DOM
ReactDOM.render(/*a*/<App/>,/*b*/document.querySelector('#root')) // tambien podria ser document.getElementById ('root')
