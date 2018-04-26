import React, { Component } from 'react';
import './App.css';
import {TodoItem} from "./TodoItem";


class App extends Component {
  constructor() {
    super();
    this.state = {
      itemlist: []
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
  }

  addTodo(e) {
    e.preventDefault();
    const newItem = {
      text: this.refs.input.value,
      checked: false
    };
    const newState = this.state.itemlist.slice();
    newState.push(newItem);
    this.setState({itemlist: newState});

    this.refs.input.value = "";
  }

  removeTodo(index) {
    const newState = this.state.itemlist;
    newState.splice(index, 1);
    this.setState({itemlist: newState});
  }

  handleCheck(index) {
    const newState = this.state.itemlist.map((item, i) => index === i ? {...item, checked: !item.checked} : item);
    this.setState({itemlist: newState});
  }

  clearCompleted() {
    const newState = this.state.itemlist.filter((item, i) => item.checked === false);
    this.setState({itemlist: newState})
  }

  

  render() {
    return(<div className="divwrapper">
    <h1>To do list</h1>
    <p>Write a new to-do item in the input and press enter! :)</p>
      <form className="form" onSubmit={this.addTodo}>
         <input type="text" ref="input" required/>
        <button type="submit">Add</button>
        </form>
      {this.state.itemlist.map((todo, index) => (
        <TodoItem key={index} removeTodo={this.removeTodo} checked={todo.checked} index={index} text={todo.text} handleCheck={this.handleCheck}/>
      ))}
      <button onClick={this.clearCompleted}>Clear Completed Tasks</button>
      </div>)
  }
}

export default App;