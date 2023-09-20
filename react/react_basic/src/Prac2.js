import { Component } from 'react';

class Prac2 extends Component {
  show = () => {
    alert(this.props.message);
  };
  render() {
    return (
      <>
        <button onClick={this.show}>Show Message</button>
      </>
    );
  }
}

export default Prac2;
