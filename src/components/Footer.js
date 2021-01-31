import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './Styles/Footer.css';
import Logo from '../img/fplogo.png'
import LogoName from '../img/fptipog.png'

class Footer extends Component {
  render(){
    return(
      <div>
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-4">
                <h2 className="contacto">Contacto</h2>
                <div className="info">
                  <span>Lorem ipsum dolor sit amet. </span><br/>
                  <br/><span>Lorem ipsum dolor sit amet. </span><br/>
                  <br/><span>Lorem ipsum dolor sit amet. </span>
                </div>

                <div className="tw-element tw-socials tw-social-light with-hover">
                    <Link to=""><i className="uk-icon-button tw-margin fa fa-twitter"></i></Link>
                    <Link to=""><i className="uk-icon-button tw-margin fa fa-facebook"></i></Link>
                    <Link to=""><i className="uk-icon-button tw-margin fa fa-instagram"></i></Link>
                    <Link to=""><i className="uk-icon-button tw-margin fa fa-youtube"></i></Link>
                </div>
              </div>

              <div className="col-xs-12 col-md-4">
                <h2 className="footerFin">ENTERATE DE NOVEDADES, PROMOCIONES, REGALOS Y MÁS </h2>
                <div className="form">
                  <div className="row">
                    <div className="col-xs-6">
                      <input type="text" className="form-control" placeholder="E-MAIL"/>
                    </div>
                    <div className="col-xs-6">
                      <button className="btn btn-danger" type="button">
                        SUSCRIBETE
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-md-4">
                <Link to="/">
                  <img className="LogoFooter" src={Logo} alt="Findingpets"/>
                  <img className="LogoNameFooter" src={LogoName} alt="Findingpets"/>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer
