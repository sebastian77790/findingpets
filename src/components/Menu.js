import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Logo from '../img/fplogo.png'
import LogoName from '../img/fptipog.png'
import './Styles/Menu.css';

class Menu extends Component {
	constructor(props) {
    super(props);
    this.state = {isToggleOn: true, data: "cart"};
  }

  handleClick = (ZonaDeDatos) => {
  	return () => {
  		this.setState({
	    	isToggleOn: !this.state.isToggleOn,
	    	data: ZonaDeDatos
	 	});
  	}

  }

  renderLogin = () =>{

  	if (this.state.data === "login") {
  		return(
	  		<div>
		  		<Link to=""><li>Lista de deseos</li></Link>
				<Link to=""><li>Historial de compras</li></Link>
				<Link to=""><li>Configuracion</li></Link>
				<Link to=""><li>Salir</li></Link>

				<h1 className="log">Iniciar sesión </h1>
				<form className="container-fluid">
				  <div className="form-group">
				    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Correo electronico"/>
				  </div>
				  <div className="form-group">
				    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña"/>
				  </div>
				  <button type="submit" className="btn btn-success btn-lg btn-block">Entrar</button>
				</form>
	  		</div>
  		)
  	}
  	if (this.state.data === "ntf") {
  		return(
	  		<div>
	  			<h1>Notificacion</h1>
	  		</div>
  		)
  	}
  	if (this.state.data === "cart") {
  		return(
	  		<div>
	  			<div className="shop">
	  				<div className="product">
	  					<div className="image">
	  					</div>
	  					<div className="datos">
	  						<h1>Producto</h1>
	  						<p>Cantidad 1</p>
	  					</div>
	  						<span className="delete glyphicon glyphicon-trash"></span>
	  				</div>

	  				<div className="product">
	  					<div className="image">
	  					</div>
	  					<div className="datos">
	  						<h1>Producto</h1>
	  						<p>Cantidad 1</p>
	  					</div>
	  						<span className="delete glyphicon glyphicon-trash"></span>
	  				</div>

	  				<div className="product">
	  					<div className="image">
	  					</div>
	  					<div className="datos">
	  						<h1>Producto</h1>
	  						<p>Cantidad 1</p>
	  					</div>
	  						<span className="delete glyphicon glyphicon-trash"></span>
	  				</div>

	  				<div className="product">
	  					<div className="image">
	  					</div>
	  					<div className="datos">
	  						<h1>Producto</h1>
	  						<p>Cantidad 1</p>
	  					</div>
	  						<span className="delete glyphicon glyphicon-trash"></span>
	  				</div>

	  				<div className="product">
	  					<div className="image">
	  					</div>
	  					<div className="datos">
	  						<h1>Producto</h1>
	  						<p>Cantidad 1</p>
	  					</div>
	  						<span className="delete glyphicon glyphicon-trash"></span>
	  				</div>

	  				<div className="product">
	  					<div className="image">
	  					</div>
	  					<div className="datos">
	  						<h1>Producto</h1>
	  						<p>Cantidad 1</p>
	  					</div>
	  						<span className="delete glyphicon glyphicon-trash"></span>
	  				</div>

	  				<div className="product">
	  					<div className="image">
	  					</div>
	  					<div className="datos">
	  						<h1>Producto</h1>
	  						<p>Cantidad 1</p>
	  					</div>
	  						<span className="delete glyphicon glyphicon-trash"></span>
	  				</div>

	  				<div className="product">
	  					<div className="image">
	  					</div>
	  					<div className="datos">
	  						<h1>Producto</h1>
	  						<p>Cantidad 1</p>
	  					</div>
	  						<span className="delete glyphicon glyphicon-trash"></span>
	  				</div>


	  				<div className="product">
	  					<div className="image">
	  					</div>
	  					<div className="datos">
	  						<h1>Producto</h1>
	  						<p>Cantidad 1</p>
	  					</div>
	  						<span className="delete glyphicon glyphicon-trash"></span>
	  				</div>

	  				<div className="product">
	  					<div className="image">
	  					</div>
	  					<div className="datos">
	  						<h1>Producto</h1>
	  						<p>Cantidad 1</p>
	  					</div>
	  						<span className="delete glyphicon glyphicon-trash"></span>
	  				</div>

	  				<div className="product">
	  					<div className="image">
	  					</div>
	  					<div className="datos">
	  						<h1>Producto</h1>
	  						<p>Cantidad 1</p>
	  					</div>
	  						<span className="delete glyphicon glyphicon-trash"></span>
	  				</div>

	  				<div className="product">
	  					<div className="image">
	  					</div>
	  					<div className="datos">
	  						<h1>Producto</h1>
	  						<p>Cantidad 1</p>
	  					</div>
	  						<span className="delete glyphicon glyphicon-trash"></span>
	  				</div>

	  				<div className="product">
	  					<div className="image">
	  					</div>
	  					<div className="datos">
	  						<h1>Producto</h1>
	  						<p>Cantidad 1</p>
	  					</div>
	  						<span className="delete glyphicon glyphicon-trash"></span>
	  				</div>

	  				<div className="product">
	  					<div className="image">
	  					</div>
	  					<div className="datos">
	  						<h1>Producto</h1>
	  						<p>Cantidad 1</p>
	  					</div>
	  						<span className="delete glyphicon glyphicon-trash"></span>
	  				</div>

	  				<div className="product">
	  					<div className="image">
	  					</div>
	  					<div className="datos">
	  						<h1>Producto</h1>
	  						<p>Cantidad 1</p>
	  					</div>
	  						<span className="delete glyphicon glyphicon-trash"></span>
	  				</div>

	  				<div className="product">
	  					<div className="image">
	  					</div>
	  					<div className="datos">
	  						<h1>Producto</h1>
	  						<p>Cantidad 1</p>
	  					</div>
	  						<span className="delete glyphicon glyphicon-trash"></span>
	  				</div>

	  				<div className="product">
	  					<div className="image">
	  					</div>
	  					<div className="datos">
	  						<h1>Producto</h1>
	  						<p>Cantidad 1</p>
	  					</div>
	  						<span className="delete glyphicon glyphicon-trash"></span>
	  				</div>

	  			</div>
	  			<div className="buy">
	  				<div className="btn btn-success btn-lg btn-block">Pagar</div>
	  			</div>
	  		</div>
  		)
  	}
  }

  render() {
    return (
<div>
        <header className="container-fluid">
	<div className="row">
		<div className="col-lg-2">
			<Link to="/"><img className="Logo" src={Logo} alt="Findingpets"/>
			<img className="LogoName" src={LogoName} alt="Findingpets"/></Link>
		</div>
		<div className="col-lg-8">
			<div className="input-group">
		      <input type="text" className="form-control" placeholder="Collares, comida, juguetes, camas....."/>
		      <span className="input-group-btn">
		        <button className="btn btn-default" type="button">Buscar</button>
		      </span>
		    </div>
		</div>
		<div className="col-lg-2">
			<div className="notifications-icons" onClick={this.handleClick("cart")}>
				<div className="count">
					1
				</div>
				<span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>
			</div>
			<div className="notifications-icons" onClick={this.handleClick("ntf")}>
				<div className="count">
					99
				</div>
				<span className="glyphicon glyphicon-globe" aria-hidden="true"></span>
			</div>
			<div className="notifications-icons" onClick={this.handleClick("login")}>
				<span className="glyphicon glyphicon-user" aria-hidden="true"></span>
			</div>
		</div>
	</div>
	<div className="row">
		<nav className="container-fluid">
			<Link to="/aboutus"><li>NOSOTROS <div className="pill"></div></li></Link>
			<Link to="/services"><li>SERVICIOS <div className="pill"></div></li></Link>
      <Link to="/adoptar"><li>ADOPTAR<div className="pill"></div></li></Link>
			<Link to="/services"><li>ACCESORIOS <div className="pill"></div></li></Link>
			<Link to="/places"><li>PUNTOS DE VENTA <div className="pill"></div></li></Link>
		</nav>
	</div>
	<div className="col-lg-3 col-xs-12" id={this.state.isToggleOn ? 'notoptions' : 'options'}>
		<span className="closed" onClick={this.handleClick("none")} >X</span>
		<h1 className="titulo">{this.state.data}</h1>
			{this.renderLogin()}
	</div>
</header>
</div>
    );
  }
}

export default Menu
