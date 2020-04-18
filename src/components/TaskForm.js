import React, {Component} from 'react';

export default class TaskForm extends Component{
// Exportamos la clase en una sola linea directamente al crearla

state={
    title:'',
    description:''
}
onSubmit = e =>{
    this.props.addtask(this.state.title,this.state.description)
    e.preventDefault();  // Cambiamos el coportamiendo del formulario para anular que se refrescar la
    // pagina cada vez que se envia un formulario
}
onChange = e =>{
    // Esta funcion es compartida por dos etiquetas, para poder obtener el valor por separado, usaremos la propiedad de html "name" para poder encontrar el valor de cada variable
    this.setState({
        [e.target.name] :e.target.value  // Usamos los nombre de cada etiqueta y los hacemos coincidir conlos del objeto de state.
    })
    
}
render(){
    return(
        <form onSubmit={this.onSubmit}>
            <input 
            type="text" 
            placeholder="Escribe una tarea" 
            onChange={this.onChange} 
            value={this.state.title}
            name="title"/>
            <br/>
            <br/>
            <textarea
            onChange={this.onChange} 
            placeholder="Escribe una descripcion de la tarea"
            value={this.state.description}
            name="description"></textarea>

            <input type="submit" placeholder="Guardar"/>
        </form>
    ) 
    }
}
