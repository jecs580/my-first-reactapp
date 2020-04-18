import React from 'react';
import './App.css';

// Data
import tasks from './sample/task.json';   // Importamos los datos de sample y los guardamos en la variable tasks
// Components
import Tasks from './components/Tasks'
import TaskForm from './components/TaskForm'

class App extends React.Component{
  state = {
    tasks:tasks
  }
  // sadas
  render() {
    // Carga una interfaz que creamos en el navegador
    
    return <div>
      <TaskForm/>
      <Tasks tareas={this.state.tasks}/> 
    </div>
  }
}

export default App;
