import React from 'react'
import InputText from './InputText';
import List from './List';
import ListItem from './ListItem';
import AddButton from './AddButton';
import RemoveButton from './RemoveButton';
import EditButton from './EditButton';

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

    // editTask(e) {
    //     this.setState({
    //         tasks: this.state.tasks.splice(this.state.text, index, this.state.text)
    //     })
    // }

    // onChangeTask = (id, text) => {
    // let tasks = this.state.tasks.map(e => {
    //     if(e.id === id) e.text = text
    //         return e
    //     })
    //     this.setState({})
    // } Hacer la edición, necesitaremos un array con objetos con id y text dentro. 

    // 1. Cambiar estructura para que tenga id
    // 2. Se le pasa el objeto entero (id y texto) en list item y se le pasa al input props.task.text
    // 3. Crear función onChange qeu llama a la del padre con el evento de cuando estamos escribiendo y el id de esa tarea. 
    // 4. En la función onChangeTask se hace un map. Si la tarea que estoy recorriendo, el id es igula al id que me viene,  lo devuelvo
    // 5. Añadir Mathrandom para dar el id

    render(){
        return (
            <>
                <h2>To Do List</h2>
                <InputText valueonChange={(e) => this.setState({text: e.target.value})} />
                <AddButton onClick={this.addTask} />
                <RemoveButton onClick={this.removeTask} />
                <EditButton onClick={this.editTask} />

                <List>
                    {this.state.tasks.map((element) => <ListItem key={element}>{element}</ListItem>)}
                </List>
                
               
            </>
        )
    }
}

export default ListContainer
