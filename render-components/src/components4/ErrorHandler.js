import React from 'react'
import ErrorBoundary from './ErrorBoundary'

class ErrorHandler extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            counter: 0,
        }
        this.addNumber = this.addNumber.bind(this)
    }   

    // componentDidCatch(error) {
    //     // logErrorToMyService(error, errorInfo);
    //     // throw new Error();
    // }

    addNumber(){
        // if (this.state.counter === 3) {
        //     throw new Error ('errorroororororor');
        // } else {
        this.setState({counter: this.state.counter + 1})
        // }
    }

    render() {
            if(this.state.counter === 3) {
                throw new Error('lajksdf')
            }
            return(
                <>
                <ErrorBoundary>
            <span>{this.state.counter}</span>
            <button onClick={this.addNumber}>+</button>
        </ErrorBoundary>

        </>
        )
    }


}


export default ErrorHandler

