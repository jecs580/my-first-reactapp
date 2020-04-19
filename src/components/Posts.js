import React, { Component } from 'react'

export default class Posts extends Component {
    state={
        post:[]
    }
    async componentDidMount(){
        // Funcion q se ejecuta una vez q el componente renderizo(mostrado en pantalla, No es necesario
        // llamarlo). Existen otros metodos que se ejecutan en diferentes momentos.
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')  // Metodo que trae datos de otro servidor.
        const data = await res.json(); // Convertimos los datos traidos a json para poderlos ver.
        this.setState({
            post:data
        })
    }
    render() {
        return (
            <div>
                <h1>Post</h1>
                {
                    this.state.post.map(post => {
                        return <div key={post.id}>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </div>
                    })
                }
            </div>
        )
    }
}
