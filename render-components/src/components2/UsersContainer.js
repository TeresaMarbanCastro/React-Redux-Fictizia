import React from 'react';
import Users from './Users'

class UsersContainer extends React.Component {

    state = {
        show: true
    }

    render() {
        return (
            <>
            {this.state.show ? <Users /> : ''}
            <button onClick={() => this.setState({ show: !this.state.show})}>click</button>
            </>
        )
    }

}

export default UsersContainer