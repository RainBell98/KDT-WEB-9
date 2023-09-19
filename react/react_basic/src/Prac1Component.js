import { Component } from 'react';
import './prac1.css';

class Prac1Component extends Component() {
  render = () => {
    return (
      <div className="container">
        <div className="circle one"></div>
        <div className="circle white"></div>
        <div className="circle black"></div>
        <div className="circle two"></div>
        <div className="circle three"></div>
        <div className="circle four"></div>
        <div className="circle five"></div>
        {/* <img className="grass" src="./img/pngwing.com.png" width="375px" height="100px"> */}
      </div>
    );
  };
}

export default Prac1Component;
