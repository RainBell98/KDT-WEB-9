import { Component } from 'react';

class StatePrac1 extends Component {
  state = {
    color: 'black',
    content: '검정색',
  };
  red = () => {
    this.setState({ color: 'red', content: '빨간색' });
  };

  blue = () => {
    this.setState({ color: 'blue', content: '파란색' });
  };

  render() {
    return (
      <>
        <h1 style={this.state}>
          <span>{this.state.content}</span> 글씨
        </h1>
        <button onClick={this.red}>빨간색</button>
        <button onClick={this.blue}>파란색</button>
      </>
    );
  }
}

export default StatePrac1;
