import React, {Component} from 'react'

export default class List extends Component {
  constructor(props){
    super(props)

    this.state = {
      comp: false,
      comp1: false

    }
  }




  render() {
    var style = {
      textDecoration: 'line-through'
    }
    var style2 = {
      display: 'none'
    }


    return(
      <div style={this.state.comp1 ? style2 : null}>
        <h1
          style={this.state.comp ? style : null}>
          {this.props.content}
        </h1>
        <button
          disabled={this.state.comp}
          onClick={() => {this.setState({comp: true})}}>
          Complete
        </button>
        <button onClick={() => {this.setState({comp1: true})}}>
          Delete
        </button>
      </div>
    )
  }
}
