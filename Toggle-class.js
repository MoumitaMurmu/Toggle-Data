import React, { Component } from 'react'

export class App extends Component {
  constructor(){
    super();
    this.state = {
      data : '',
      isShowData : false
    }
  }

  // function for tracking input value
  // e is event , data is our state and initial value is empty string
handleChange(e){
  this.setState({data : e.target.value});
}

// function for data show and hide

toggleIsShowData(){
  this.setState({isShowData : !this.state.isShowData});
}

  render() {
    return (
      <div>
      <h1> {this.state.isShowData ? this.state.data : '*****'}</h1>
      <label>
      {this.state.isShowData ? 'TEXT : ' : 'PASSWORD : '}
      <input type={this.state.isShowData ? 'text' : 'password'} onChange={(e)=>this.handleChange(e)} placeholder='Type Your Password'/>

      </label>
        <button onClick={()=>this.toggleIsShowData()}>Toggle</button>
      </div>
    )
  }
}

export default App;
