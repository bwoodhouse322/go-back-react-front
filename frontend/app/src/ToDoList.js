import React, { Component } from 'react';
import './ToDoList.css';
import axios from 'axios'

class ToDoList extends Component {
  constructor(props){
    super(props)
    this.state = {
      todos: []
    }
  }

  componentDidMount(){
    let url = "https://todo-rest-api-service.default.cluster.local/todos"
    fetch(url).then(response => response.json()).then(response => {

      console.log(response)
      
       let todos = response.map( (todo,index) => {

        let duedate = new Date(todo.datedue);

        return(

          <div key={index}>
            <h1>{todo.name}</h1> 
            <h2>{`${duedate.getDay()} / ${duedate.getMonth()+1} / ${duedate.getFullYear()}`}</h2>
            <h3>{todo.completed}</h3>
            <input
            name="isCompleted"
            type="checkbox"
            checked={todo.completed}
             />

          </div>

        )

      })
      
      this.setState({todos : todos})
  
  })


  }



  render() {
    return (
      // <div className="ToDoList">
      //   <header className="ToDoList-header">
      //     <img src={logo} className="ToDoList-logo" alt="logo" />
      //     <h1 className="ToDoList-title">React Todo List</h1>
      //   </header>
      //   <p className="ToDoList-intro">
      //     To get started, edit <code>src/ToDoList.js</code> and save to reload.
      //   </p>
      // </div>

      <div className="Container">
      <header className="ToDoList-header">
        <h1 className="ToDoList-title"> ToDo List</h1>
      </header>
      
      <div className="ToDoList-toDoContainers">


        <ul className="ToDoList-toDoList">
         {this.state.todos}

        </ul>
      </div>
      
      </div>
    );
  }
}

export default ToDoList;
