import React from 'react';

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: ['Pepa', 'Lucía'],
        }
    }

    componentDidMount() {
        this.setState({
            users: [...this.state.users, 'Teresa'] })
    }

    componentWillUnmount() {
        console.log('¡Componente destruido!')
    }

    render() {
        return <p>{JSON.stringify(this.state.users)}</p>
    }
    
}

export default Users
