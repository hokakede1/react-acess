import React, { Component } from 'react';
import './App.css';
import List from './components/list'

class App extends Component {
  constructor(){
    super()

    this.state = {
      input: '',
      task: []
    }
  }

  onHandleChange(e){
    this.setState({
      input: e.target.value
    })
  }

  onHandleClick(){
    if(!this.state.input){
      alert('Please type something')
    }
    this.state.task.push(this.state.input);
    var newarr = this.state.task;
    this.setState({
      task: newarr,
      input: ''
    })
  }

  // onDeleteHandle(index){
  //   var newarr = this.state.task.splice(index, 1);
  //
  // }



  render() {
    var layout = this.state.task.map((item, i) => {
      return <List content={item} key={i}
              // func={this.onDeleteHandle.bind(this)}
              // ind={i}
              />
    })


    return (
      <div>
        <input
          value={this.state.input}
          onChange={this.onHandleChange.bind(this)}>
          </input>
        <button onClick={this.onHandleClick.bind(this)}> Add </button>
        <button onClick={() => {this.setState({task: []})}}> Delete </button>
        {layout}
      </div>
    );
  }
}

export default App;
