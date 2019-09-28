import React from 'react';
import ColourPicker from './ColourPicker';
import ColourText from './ColourText';


class ColourContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            text: 'HELLO',
            colour: '#FFF',
        }

        this.handleColour = this.handleColour.bind(this);
    }

    handleColour(e) {
        this.setState({
            colour: e.target.color
        })
    }

    render() {
        return (
        <>
        <ColourPicker 
        label="color"
        onChange={this.handleColour}
        />
        <ColourText style={{color: this.state.colour}}/>
        </>
        )}



}

export default ColourContainer