import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = { message: 'Hello from state' };
  }

  changeMessage = () => {
    this.setState({ message: 'Message changed!' });
  };

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={this.changeMessage}>Change</button>
      </div>
    );
  }
}

export default App;
