import React from 'react';
import CounterText from './CounterText';
import CounterButton from './CounterButton';

class CounterTwo extends React.Component {
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
            <CounterText>{this.state.count}</CounterText>
            <CounterButton onPress={this.increase}>MORE</CounterButton>
            <CounterButton onPress={this.decrease}>LESS</CounterButton>
            </>
        )
    } 
}

export default CounterTwo;