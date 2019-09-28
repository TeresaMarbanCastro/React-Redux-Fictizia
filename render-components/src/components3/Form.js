import React from 'react';
import Input from './Input';
import Textarea from './Textarea';

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            gender: 1,
            age: 0,
            description: '',
            hobbies: []
        }
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    countries = [
        {
            value: 'es',
            text: 'Spain'
        },
        {
            value: 'usa',
            text: 'United States'
        }
    ]

    hobbies = [
        {
            value:  'football',
            text: 'football'
        },
        {
            value: 'reading',
            text: 'reading'
        }
    ]
    handleSubmit(e) {
        console.log(this.state);
        e.preventDefault();
    }

    handleInputChange(e) {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        const name = e.target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
        <>
            <form onSubmit={this.handleSubmit} style={{display:'flex', flexDirection:'column', width:'200px'}}>
                <Input label="name" name="firstName" value={this.state.firstName} type="text" onChange={this.handleInputChange} />
                <Input label="surname" name="lastName" value={this.state.lastName} type="text" onChange={this.handleInputChange} />

                <Textarea label="" value={this.state.name} name="description" onChange={this.handleInputChange}/>

                <Input label="gender" name="gender" value={this.state.gender} type="radio" onChange={this.handleInputChange} />
                <Input label="age" name="age" value={this.state.age} type="number" onChange={this.handleInputChange}/>

                <select>
                    <option></option>
                    <option></option>
                </select>
                <select>
                    <option></option>
                    <option></option>
                </select>

                <Input items='hobbies' label="hobbies" name="hobbies" value={this.state.hobbies} type="checkbox" onChange={this.handleInputChange} />

                <input type="submit" value="Submit" onClick={this.handleSubmit} onChange={this.handleInputChange} />
            </form>
        </>
        )
    }



}

export default Form