import React from 'react'


class HOC extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data: [],
            url: 'https://jsonplaceholder.typicode.com/'
        }
    }


    async componentDidMount() {
        let response = await fetch(this.state.url)
        let data = await response.json()
        this.setState({ data: this.state.data })
      }


      render() {
        return(
          <div data={this.state.data}></div>
        )
      }
  
    }

  export default HOC