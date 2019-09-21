import React from 'react'

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value})
    }

    render() {
        return ( 
            <>
            <input type="text" onChange={this.handleChange}></input>
            <p>{this.state.value}</p>
            </>
        )
    }

}

export default Input