import React, { Component } from 'react';

export default class GitUserName extends Component {

    constructor(){
        super();
        this.state={
            name: '',
            age: '',
        }
    }

    inputHandler = (e) => {
        e.preventDefault();
        switch (e.target.name) {
            case 'name':
                this.setState({
                    name: e.target.value
                })
                break;
        
            default:
                break;
        }
    }
  render() {
    return (
      <div>
            <input 
                type="text" 
                value={this.state.name} 
                name="name" 
                placeholder="Name" 
                onChange={(e) => this.inputHandler(e)}
            /> 
            <button onClick={() => this.props.getGitUser(this.state.name)}>
                Submit
            </button>

    </div>
    );
  }
}
