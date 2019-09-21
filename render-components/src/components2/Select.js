import React from 'react'

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'first'
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value})
    }

    render() {
        return ( 
            <>
            <select onChange={this.handleChange}>
                <option value="first">First</option>
                <option value="second">Second</option>
            </select>
            <p>{this.state.value}</p>
            </>
        )
    }

}

export default Input