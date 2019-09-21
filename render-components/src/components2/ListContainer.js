import React from 'react'
import InputText from './InputText';
import List from './List';
import ListItem from './ListItem';
import AddButton from './AddButton';
import RemoveButton from './RemoveButton';

class ListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            text: ''
        }
        this.addTask = this.addTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    addTask() {
        this.setState({tasks: [...this.state.tasks, this.state.text]}, () => {
            console.log(this.state.tasks)
        });
    }

    removeTask() {
        this.setState({
            tasks: this.state.tasks.filter((item) => item !== this.state.text)}, () => {
            console.log(this.state.tasks)
        })
    }

    render(){
        return (
            <>
                <h2>To Do List</h2>
                <InputText onChange={(e) => this.setState({text: e.target.value})} />
                <AddButton onClick={this.addTask} />
                <RemoveButton onClick={this.removeTask} />

                <List>
                    {this.state.tasks.map((element) => <ListItem key={element}>{element}</ListItem>)}
                </List>
                
               
            </>
        )
    }
}

export default ListContainer
