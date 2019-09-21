import React from 'react';

class String extends React.Component {
    state = {
        word : 'teresa'
    }

    addLetter = () => {
        this.setState({ word: this.state.word + 'a'})
    }

    removeLetter = () => {
        this.setState({ word: this.state.word.slice(0, -1)})
    }

    render() {
        return (
            <>
            <div>{this.state.word}</div>
            <button onClick={this.addLetter}>+</button>
            <button onClick={this.removeLetter}>-</button>
            </>
        )
    } 
}

export default String;