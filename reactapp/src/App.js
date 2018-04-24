import React, { Component } from 'react';
import './App.css';



class TodoItem extends Component {

  render() {
    return(
      <div className="todoitem">
        <input type="checkbox" checked={this.props.checked} onClick={() => this.props.handleCheck(this.props.index)}/>
        {this.props.text}

        <button onClick={()=>this.props.fnRemoveTodo(this.props.index)}>Remove</button>
    </div>
    );
  }
}

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      itemlist: []
    };

    this.RemoveTodo = this.RemoveTodo.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.ClearCompleted = this.ClearCompleted.bind(this);
  }

  AddTodo(e) {
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

  RemoveTodo(index) {
    const newState = this.state.itemlist;
    newState.splice(index, 1);
    this.setState({itemlist: newState});
  }

  handleCheck(index) {
    const newState = this.state.itemlist.map((item, i) => index === i ? {...item, checked: !item.checked} : item);
    this.setState({itemlist: newState});
  }

  ClearCompleted() {
    const newState = this.state.itemlist.filter((item, i) => item.checked === false);
    this.setState({itemlist: newState})
  }

  render() {
    return(<div className="divwrapper">
    <h1>To do list!</h1>
      <form className="form" onSubmit={(e)=> this.AddTodo(e)}>
         <input type="text" ref="input" required/>
        <button type="submit">Add</button>
        </form>
      {this.state.itemlist.map((todo, index) => (
        <TodoItem key={index} fnRemoveTodo={this.RemoveTodo} checked={todo.checked} index={index} text={todo.text} handleCheck={(index) => this.handleCheck(index)}/>
      ))}
      <button onClick={this.ClearCompleted}>Clear Completed Tasks</button>
      </div>)
  }
}


class App extends Component {
  render() {

    return (<div>
      <TodoList />
    </div>);
  }
}

export default App;