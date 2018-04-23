import React, { Component } from 'react';
import './App.css';




class Inputitem extends Component {

  constructor(props) {
    super(props);
  }

  pushItemToList() {
  }

  render() {
    return(
    <input value={this.state}/>);
  }
}


class Addtolist extends Component {
  render() {

    let list = [];
    return(<div>
      <Inputitem array={list}/>
      <button onClick={this.pushItemToList}>TO-DO!</button>
    </div>)
  }
}


class Markascomplete extends Component {
  render() {
    return(<div></div>)
  }
}


class Clearinglist extends Component {
  render() {

    return(<div></div>)
  }
}


class App extends Component {
  render() {

    return (<div>
      <Addtolist />
      <Markascomplete />
      <Clearinglist />

    </div>);
  }
}

export default App;