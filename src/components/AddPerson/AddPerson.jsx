import React, { Component } from 'react';

export default class componentName extends Component {

    constructor(){
        super();
        this.state={
            name: '',
            age: ''
        }
    }

    inputHandler = (e) => {
        e.preventDefault();
        switch (e.target.name) {
            case 'age':
                this.setState({
                    age: e.target.value
                })
                break;
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
            <input 
                type="text" 
                value={this.state.age} 
                name="age" 
                placeholder="Age" 
                onChange={(e) => this.inputHandler(e)}
            /> 
            <button onClick={() => this.props.addPerson(this.state.name, this.state.age, Math.random())}>
                Add Person
            </button>

    </div>
    );
  }
}
