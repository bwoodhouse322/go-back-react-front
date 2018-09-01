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
    axios('http://127.0.0.1:8080/todos').then(response => {
      
      console.log(response.data);
      let todos = response.data.map( (todo,index) => {
        var duedate = new Date(todo.datedue);
        console.log(todo.Completed)
        return(

          <div key={index}>
            <h1>{todo.name}</h1> 
            <h2>{`${duedate.getDay()} / ${duedate.getMonth()+1} / ${duedate.getFullYear()}`}</h2>
            <h3>{todo.Completed}</h3>
            <input
            name="isCompleted"
            type="checkbox"
            checked={todo.Completed}
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
      <div className="container">
      {this.state.todos}
      </div>
    );
  }
}

export default ToDoList;
