import React, { Component } from 'react';
import logo from './logo.svg';
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
    axios.get("$BACKEND_URL")
    .then(toDoJson => console.log(toDoJson))
  }



  render() {
    return (
      <div className="ToDoList">
        <header className="ToDoList-header">
          <img src={logo} className="ToDoList-logo" alt="logo" />
          <h1 className="ToDoList-title">React Todo List</h1>
        </header>
        <p className="ToDoList-intro">
          To get started, edit <code>src/ToDoList.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default ToDoList;
