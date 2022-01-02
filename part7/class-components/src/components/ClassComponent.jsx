import axios from 'axios';
import React, { Component } from 'react';

class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      anecdotes: [],
      current: 0,
    };
  }

  componentDidMount() {
      axios.get('http://localhost:3001/anecdotes').then((result) => {
      console.log(result);
      this.setState({ anecdotes: result.data });
      console.log(this.state.anecdotes);
    });
  }

  handleClick = () => {
    this.setState({current: Math.round(Math.random() * (this.state.anecdotes.length - 1))})
  }

  render() {
    return (
      <div>
        {this.state.anecdotes.length === 0 ? (
          'anecdcotes emty'
        ) : (
          <p>{this.state.anecdotes[this.state.current].content}</p>
        )}
        <button onClick={this.handleClick}>Next</button>
      </div>
    );
  }
}

export default ClassComponent;
