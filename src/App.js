import React from 'react';
import './App.css';

// Data
import tasks from './sample/task.json';   // Importamos los datos de sample y los guardamos en la variable tasks
// Components
import Tasks from './components/Tasks'
import TaskForm from './components/TaskForm'

class App extends React.Component {
  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length  // Tomamos la longitud del array antes de ser agregado un nuevo elemento
    }
    console.log(newTask);
    this.setState({
      tasks: [...this.state.tasks, newTask]  // Agregamos un nuevo elemento, concatenando el nuevo
      //elemento a los anteriores datos
    })
  }
  deleteTask = (id) => {
    // Eliminar una tarea
    const newtasks = this.state.tasks.filter(task => task.id!==id);  // Cremos un nuevo array que cumpla
    // con la condicion, para simular que se elimina la tarea.
    this.setState({
      tasks:newtasks  // Cambiamos el valor de tasks al nuevo array creado por el filtrado
    })
  }
  checkDone = () => {
    // Cambiar el estado de una tarea.
  }
  render() {
    // Carga una interfaz que creamos en el navegador

    return <div>
      <TaskForm addtask={this.addTask}/>
      <Tasks tareas={this.state.tasks} deleteTask={this.deleteTask} />
    </div>
  }
}

export default App;
