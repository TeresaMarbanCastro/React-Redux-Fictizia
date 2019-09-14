import React from 'react';

class Counter extends React.Component {
    state = {
        count: 0
    }

    increase = ()  => {
        this.setState({ count: this.state.count + 1})
    }
        
    decrease = () => {
        this.setState({ count: this.state.count - 1})
    }
    render() {
        return (
            <>
            <div>{this.state.count}</div>
            <button onClick={this.increase}>+</button>
            <button onClick={this.decrease}>-</button>
            </>
        )
    } 
}

export default Counter;