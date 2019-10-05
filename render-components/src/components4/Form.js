import React from 'react'

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.ref2 = React.createRef();
        this.onClick = this.onClick.bind(this);
    }


    onClick(e){
        e.preventDefault()
        console.log(this.ref.current.value, this.ref2.current.value)
    }
    render() {
        return(
            <form>
                <input type="text" ref={this.ref}></input>
                <input type="number" ref={this.ref2}></input>
                <button onClick={this.onClick}>jadjdf</button>
            </form>
        )
    }
}

export default Form