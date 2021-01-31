import React, { Component } from 'react';
import './Styles/services.css';

class Services extends Component {
  render() {
    return (
    <div id="services" className="container-fluid text-center container-fluid-padding">
      <h2>SERVICIOS</h2>
      <h4>Descubre todos nuestros servicios</h4>
      <br/>
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 padding-between">
          <span className="glyphicon glyphicon glyphicon-search logo-small"></span>
          <h4>BUSCAR</h4>
          <p>Perdí mi mascota</p>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 padding-between">
          <span className="glyphicon glyphicon glyphicon-eye-open logo-small"></span>
          <h4>VER</h4>
          <p>Mascotas perdidas</p>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 padding-between">
          <span className="glyphicon glyphicon-alert logo-small"></span>
          <h4>REPORTAR</h4>
          <p>Encontré una mascota perdida</p>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 padding-between">
          <span className="glyphicon glyphicon-list-alt logo-small"></span>
          <h4>PUBLICAR</h4>
          <p>Publicar mascota en adopción</p>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 padding-between">
          <span className="glyphicon glyphicon-tent logo-small"></span>
          <h4>TEMPORAL</h4>
          <p>Buscar hogar temporal</p>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 padding-between">
          <span className="glyphicon glyphicon-piggy-bank logo-small"></span>
          <h4>HOGAR</h4>
          <p>Postular mi hogar como temporal</p>
        </div>
      </div>
    </div>
    );
  }
}

export default Services;
