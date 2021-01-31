import React, { Component } from 'react';
import fotoinicial from '../img/placasDelMes.jpg'
import './Styles/home.css';
import Description from '../components/description'

class Home extends Component {
	render(){
		return (
		<div>
			<div className="imagen">
				<div className="informacion">
					<h1>PLACAS INTELIGENTES PARA TU MASCOTA</h1>

					<div className="btn-group own-grupButton" role="group" aria-label="...">
					  <button type="button" className="btn btn-default own-btn">Comprar</button>
					  <button type="button" className="btn btn-default own-btn">Activar</button>
					</div>
				</div>
			</div>
			<Description/>

			<div>
				<div className="placasPopulares">
					<h3>Plaquitas Populares Del Mes</h3>
				</div>
				<img className="imagenPlacas" src={fotoinicial} alt="imagen Placas"/>
			</div>

		</div>
		)
	}
}

export default Home;
