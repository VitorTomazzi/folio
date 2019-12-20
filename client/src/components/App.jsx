import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import NavBar from './components/navbar';
import Footer from './components/footer';
import HomePage from './pages/homepage';
import AboutPage from './pages/aboutpage';
import ContactPage from './pages/contactpage';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'vitor[codes]',
			headerlinks: [
				{ title: 'Home', path: '/' },
				{ title: 'About', path: '/about' },
				{ title: 'Contact', path: '/contact' }
			],
			home: {
				title: 'vitor[codes]',
				subTitle: 'Welcome! Check out some of my projects below'
			},
			about: {
				title: 'About me'
			},
			contact: {
				title: "Let's connect"
			}
		};
	}

	render() {
		return (
			<Router>
				<Container fluid={true} className="p-0" style={{ backgroundColor: '#B8C2CE' }}>
					<NavBar />

					<Switch>
						<Route exact path="/">
							<HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} />
						</Route>
						<Route exact path="/about">
							<AboutPage title={this.state.about.title} />
						</Route>
						<Route exact path="/contact">
							<ContactPage title={this.state.contact.title} />
						</Route>
					</Switch>

					<Footer />
				</Container>
			</Router>
		);
	}
}

//style={{ overflow: 'hidden' }}
