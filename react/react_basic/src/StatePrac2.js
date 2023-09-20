import { Component } from 'react';

class StatePrac2 extends Component {
  state = {
    content: '안녕하세요',
    bContent: '사라져라',
  };

  change = () => {
    if (this.state.bContent == '사라져라') {
      this.setState({ content: '', bContent: '보여라' });
    } else {
      this.setState({ content: '안녕하세요', bContent: '사라져라' });
    }
  };

  render() {
    return (
      <>
        <button onClick={this.change}>{this.state.bContent}</button>
        <h1>{this.state.content}</h1>
      </>
    );
  }
}

export default StatePrac2;
