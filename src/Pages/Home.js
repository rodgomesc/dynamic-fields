import React, { Component } from 'react';

export default class Home extends Component {
  state = {
    names: []
  };
  handleAdd = e => {
    this.setState({ names: [...this.state.names, ''] });
  };

  handleRemove = index => {
    const { names } = this.state;
    names.splice(index, 1);
    this.setState({ names: names });
  };

  handleChange = (e, index) => {
    const { names } = this.state;
    names[index] = e.target.value;
    this.setState({ names: names });
  };
  handleShowContent = () => {
    console.log(this.state.names);
  };

  render() {
    return (
      <>
        <h1>form</h1>
        <p>address</p>
        <hr />
        {this.state.names.map((name, index) => {
          return (
            <div key={index}>
              <input onChange={e => this.handleChange(e, index)} value={name} />
              <button onClick={() => this.handleRemove(index)}>Remove</button>
            </div>
          );
        })}
        <button onClick={e => this.handleAdd(e)}>Add</button>
        <hr />
        <button onClick={this.handleShowContent}>Submit</button>
      </>
    );
  }
}
