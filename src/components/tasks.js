import React, {Component} from 'react';
import Task from './task'
class Tasks extends Component {
    render(){

        // Recorremos el array por medio de el operador map. de rxjs
        return this.props.tareas.map(e => <Task key={e.id} e={e}/> ) 
        // Colocamos el key por que cada elemento hijo que creamos deber tener un key unico.
    }
}
export default Tasks