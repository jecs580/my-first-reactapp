import React from 'react';
import './App.css';
import tasks from './sample/task.json';   // Importamos los datos de sample y los guardamos en la variable tasks
import Tasks from './components/tasks'

class App extends React.Component{
  state = {
    tasks:tasks
  }
  // sadas
  render() {
    // Carga una interfaz que creamos en el navegador
    
    return <div>
      <Tasks tareas={this.state.tasks}/> 
    </div>
  }
}

export default App;
