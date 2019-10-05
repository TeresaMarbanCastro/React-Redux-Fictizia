import React from 'react'
import MainText from  './MainText'
import Button from './Button'
import Paragraph from './Paragraph'


class ReactContext extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            language: 'es',
            text: 'Hello',
            name: 'Blabli',
        }


    }



    render() {
        return (
        <>
            <MainText>
                <Paragraph>{this.state.text}</Paragraph>
                <Paragraph>{this.state.name}</Paragraph>
            </MainText>
            <Button onClick={this.props.changeTheme} />
        
        </>
        )
    }

}

// ReactContext.contextType = ;

export default ReactContext