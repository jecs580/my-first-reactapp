import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'  // Esta libreria se debe descargar aparte.
// Data
import tasks from './sample/task.json';   // Importamos los datos de sample y los guardamos en la variable tasks
// Components
import Tasks from './components/Tasks'
import TaskForm from './components/TaskForm'
import Posts from './components/Posts'

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
    //  Esta funcion tiene un parametro q es el id.
    const newtasks = this.state.tasks.filter(task => task.id !== id);  // Cremos un nuevo array que cumpla
    // con la condicion, para simular que se elimina la tarea.
    this.setState({
      tasks: newtasks  // Cambiamos el valor de tasks al nuevo array creado por el filtrado
    })
  }
  checkDone = (id) => {
    // Cambiar el estado de una tarea.
    const updateTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task;
    });
    this.setState({
      tasks: updateTasks
    })
  }
  render() {
    // Carga una interfaz que creamos en el navegador

    return <div>
      <Router>
        {/* Link sirve para poder hacer un llamado a una ruta especifica. */}
        <Link to='/'>Home</Link>
        <br/>
        <Link to='/posts'>Posts</Link>
        <Route exact path='/' render={() => {
          // Colocamos el 'exact' para especificar que la ruta q buscamos sea al raiz  y no contenga otra palabra.De otro modo cuaquier subruta
          //cumpliria con la ruta raiz
          return (<div>
            <TaskForm addtask={this.addTask} />
            <Tasks tareas={this.state.tasks} deleteTask={this.deleteTask} checkDone={this.checkDone} />
          </div>)
        }}>
        </Route>
        <Route path='/posts' render={() => {
          return <Posts />
        }}>
        </Route>
        {/* Forma para renderizar un componente(si es q solo tienes un componente que renderizar) */}
        {/* <Route path='/posts' component={Posts}/> */}
      </Router>

    </div>
  }
}

export default App;
