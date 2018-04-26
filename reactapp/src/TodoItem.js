import React, {Component} from "react";
import "./App.css";

export class TodoItem extends Component {

    render() {
      return(
        <div className="todoitem">
          <input type="checkbox" checked={this.props.checked} onClick={() => this.props.handleCheck(this.props.index)}/>
          {this.props.text}
  
          <button onClick={() => this.props.removeTodo(this.props.index)}>Remove</button>
      </div>
      );
    }
  }