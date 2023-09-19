import { Component } from 'react';

class Food extends Component {
  render() {
    const styles = {
      color: 'red',
    };
    return (
      <>
        <h2>
          좋아하는 음식 <span style={styles}>{this.props.food}</span>
        </h2>
      </>
    );
  }
}

Food.defaultProps = {
  food: '카레',
};

export default Food;
