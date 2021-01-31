import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Menu from './components/Menu';
import Home from './views/Home';
import Services from './views/Services';
import Footer from './components/Footer'
import Aboutus from './views/aboutus';
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
      		<div className="primary-layout">
	        		<Menu/>
		        <main>
              <Route exact path="/" component={Home} />
              <Route path="/services" component={Services} />
              <Route path="/aboutus" component={Aboutus} />
		        </main>

            <Footer/>
      		</div>
        </Router>
    );
  }
}

export default App;
