import React from 'react';
import './App.css';

// function Helloword(props){
//   // Los componentes por lo se coloca la primera letra en mayuscula
  
//   return (
//     <div id="hello">
//       <h3>{props.subtitle}</h3>
//       {props.mytext}
//       </div>
//   )
// }

class Helloword extends React.Component{
  state = {
    // Estados de un componente
    show:true
  }
  toggleShow = () =>{
    this.setState({show:!this.state.show})
  }
  render(){
    if (this.state.show){
      return(
        <div id="hello">
        <h3>{this.props.subtitle}</h3>
        {this.props.mytext}
        <button onClick={this.toggleShow}>Cambiar de estado</button>
        </div>
      )
    }
    else{
      return <h1>No hay elementos
      <button onClick={this.toggleShow}>Cambiar de estado</button>
      </h1>
    }
  }
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
