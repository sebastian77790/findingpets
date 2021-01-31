import React, { Component } from 'react';
import './Styles/services.css';

class Aboutus extends Component {
  render() {
    return (
    <div id="description" className="container-fluid text-center container-fluid-padding">
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-4 alignment">
          <h4>Nosotros</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at magna varius odio vestibulum tempor. Nam euismod velit elit, sodales porta turpis viverra eget. Curabitur porttitor malesuada nisi, vel faucibus lectus bibendum ac.</p>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-8 alignment">
        <iframe width="820" height="420"
          src="https://www.youtube.com/embed/VNnWiyNiO24">
        </iframe>
        </div>
      </div>
    </div>
    );
  }
}

export default Aboutus;
