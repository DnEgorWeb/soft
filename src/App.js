import React, { Component }            from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap-grid.css'

import './index.css';
import Home from './pages/Home/index'
import Test from './pages/Test/index'
import Audit from './pages/Audit/index'
import About from './pages/About/index'
import Navigation from './modules/Navigation'
import Footer from './modules/Footer'

class App extends Component {
	state = {
		lang: 'ru',
		isModalOpen: false
	}

	changeLang = () => {
		const lang = this.state.lang === 'ru' ? 'en' : 'ru';
		this.setState({ lang });
	}

	modalToggle = () => {
		this.setState({ isModalOpen: !this.state.isModalOpen });
	}

	render() {
		const { lang, isModalOpen } = this.state;

		return (
			<Router>
				<div className='App'>
					<Navigation
						lang={lang}
						changeLang={this.changeLang}
						modalToggle={this.modalToggle}
						isModalOpen={isModalOpen}
					/>
					<Route path='/'      render={ (props) => ( <Home  lang={this.state.lang} { ...props } /> )} exact/>
					<Route path='/test'  render={ (props) => ( <Test  lang={this.state.lang} { ...props } /> )} />
					<Route path='/audit' render={ (props) => ( <Audit lang={this.state.lang} { ...props } /> )} />
					<Route path='/about' render={ (props) => ( <About lang={this.state.lang} { ...props } /> )} />
					<Footer lang={this.state.lang} />
				</div>
			</Router>
		);
	}
}

export default App;
