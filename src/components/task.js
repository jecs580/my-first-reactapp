import React,  {Component} from 'react';
import './task.css'
class Task extends Component{
    styleCompleted(){
        return{
            fontSize:'20px',
            color: this.props.e.done ? 'gray':'black',  // condicional de una sola linea
            textDecoration: this.props.e.done ? 'line-through':'none'
        } // Retornamos un objeto con estilos
    }
    render(){
        // Usamos el div por que los componentes solo pueden retornar un elemento a la vez. Cone div encapsulamos los 3 en 1.

        const {e}= this.props;  // Podemos guardar el objeto que envia antes de retornalo, para que se entienda mejor el codigo
        const redColor={background:'red'}  // Forma de colocar estilos a una etiqueta directamente.
        return ( <div style={this.styleCompleted()}>
            {this.props.e.title} -
            {e.description} -
            {this.props.e.done} -
            {e.id}
                <input type="checkbox"/>
                <button style={btnDelete}>
                    X
                </button>
        </div>
        )
         
    }
}

// Agregar estilos atravez de objetos de javascript
const btnDelete={
    fontSize:'18px',
    background:'#ea2027',
    color:'#fff',
    border:'none',
    padding:'10px 15px',
    borderRadius:'50%',
    cursor:'pointer'

}
export default Task