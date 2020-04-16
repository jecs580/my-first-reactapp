import React,  {Component} from 'react';

class Task extends Component{
    render(){
        // Usamos el div por que los componentes solo pueden retornar un elemento a la vez. Cone div encapsulamos los 3 en 1.

        const {e}= this.props;  // Podemos guardar el objeto que envia antes de retornalo, para que se entienda mejor el codigo
        return ( <div>
            {this.props.e.title} - {e.description} - {this.props.e.done}0 - {e.id}
                <input type="checkbox"/>
                <button>X</button>
        </div>
        )
         
    }
}
export default Task