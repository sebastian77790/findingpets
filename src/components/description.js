import React, { Component } from 'react';
import '../views/Styles/services.css';
import './Styles/description.css';
import fotoTablet from '../img/tabletPng.png'

class Description extends Component {
  render() {
    return (
    <div id="description" className="container-fluid text-center container-fluid-padding">
      <h2 className="left-a">Plaquitas con superpoderes</h2>
      <br/>
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-4 alignment">
          <h4>EDITAR</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at magna varius odio vestibulum tempor. Nam euismod velit elit, sodales porta turpis viverra eget. Curabitur porttitor malesuada nisi, vel faucibus lectus bibendum ac.</p>

          <h4>NOTIFICACIONES</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at magna varius odio vestibulum tempor. Nam euismod velit elit, sodales porta turpis viverra eget. Curabitur porttitor malesuada nisi, vel faucibus lectus bibendum ac.</p>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4 alignment">
          <h4>REPORTAR PÉRDIDA</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at magna varius odio vestibulum tempor. Nam euismod velit elit, sodales porta turpis viverra eget. Curabitur porttitor malesuada nisi, vel faucibus lectus bibendum ac.</p>
          <h4>CHAT</h4>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at magna varius odio vestibulum tempor. Nam euismod velit elit, sodales porta turpis viverra eget. Curabitur porttitor malesuada nisi, vel faucibus lectus bibendum ac. </p>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4 alignment">
          <img className="ipad" src={fotoTablet} />
        </div>
      </div>
    </div>
    );
  }
}

export default Description;
