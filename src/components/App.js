import React, { Component } from 'react';
import List from './list';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  render() {
    return (
      <div className="wrapper">
        <form  onSubmit={this.onSubmit}>
          <h1>TO-DO LIST <span><button className="button-item">+</button></span> </h1>
          <input className="input-item" value={this.state.term} onChange={this.onChange} placeholder='What are you going to do?' />
          
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
}