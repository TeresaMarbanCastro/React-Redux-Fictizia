import React from 'react'

class Page extends React.Component {
    state = {
        isLogged: true
    }

    handleLog = () => {
        this.setState({isLogged: !this.state.isLogged})
    }

    render() {
        return (
            <>
            {this.state.isLogged
            ? <><p>Estoy logged</p><button onClick={this.handleLog}>Log out</button></>
            : <><p>Estoy out</p><button onClick={this.handleLog}>Log in</button></>}
            </>
        )
    }


}

export default Page;