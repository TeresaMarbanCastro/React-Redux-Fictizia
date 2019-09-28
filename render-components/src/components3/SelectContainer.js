import React from 'react'
import Select from './Select';
import Option from './Option';



class SelectContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ['a'],
        }
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            value: [...this.state.value, 'Perú', 'Colombia'] })
    }
    onChange(e) {
        this.setState({value: e.target.value})
    }

    render(){
        return (
        <>
        <Select value={this.state.value}> 
        {this.state.value.map((element) => <Option key={element}>{element}</Option>)}
        </Select>
        </>
        )
    }

}

export default SelectContainer;