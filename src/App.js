import React from 'react';
import './App.css';

function Helloword(props){
  // Los componentes por lo se coloca la primera letra en mayuscula
  
  return (
    <div id="hello">
      <h3>{props.subtitle}</h3>
      {props.mytext}
      </div>
  )
}
// En forma de funcion de flecha
// const App = ()=> <div>Este es mi componente por medio de una funcion de flecha: <Helloword/></div>

// En forma de una clase, renderizamos un componente
// class App extends React.Component{
//   render(){
//     return <div>Este es mi componente por medio de una clase: <Helloword/></div>
//   }
// }

// De forma normal
function App() {
  return (
    <div>Es es mi componente por medio de una funcion normal: <Helloword mytext="Hola mundo" subtitle="Subtitulo 1"/><Helloword mytext="Componente 2" subtitle="Subtitulo 2"/><Helloword mytext="Componente 3" /></div>
  );
}

export default App;
