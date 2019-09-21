import React from 'react'

class Tasks extends React.Component {
    state = {
        tasks: ''
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => this.setState({tasks: JSON.stringify(data)}))
    }

    render() {
        return (
            <p>{this.state.tasks}</p>
        )
    }
}



export default Tasks