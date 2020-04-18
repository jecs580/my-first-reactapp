import React, {Component} from 'react';
import Task from './task'
import PropTypes from 'prop-types'

class Tasks extends Component {
    render(){

        // Recorremos el array por medio de el operador map. de rxjs
        return this.props.tareas.map(task => 
        <Task 
            task={task} 
            deleteTask={this.props.deleteTask}
            key={task.id}/> ) 
        // Colocamos el key por que cada elemento hijo que creamos deber tener un key unico.
        // React nota este error e informa que si existe duplicados puede que omita un componente.
    }
}

Tasks.propType={
    tareas:PropTypes.array.isRequired
}
export default Tasks