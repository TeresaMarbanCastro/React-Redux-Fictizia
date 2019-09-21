import React from 'react'

class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }

        this.fetchData = this.fetchData.bind(this);
    }


    fetchData() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => this.setState({data: JSON.stringify(data)}))
    }

    render() {
        return (
            <>
            <button onClick={this.fetchData}>SHOW</button>
            {this.state.data}
            </>
        )
    }



}


export default Data