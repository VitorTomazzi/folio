import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import axios from 'axios';

import Hero from '../components/hero';

export default class ContactPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			message: '',
			displayed: false,
			emailSent: null
		};
	}

	handleChange = (event) => {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();

		this.setState({
			disabled: true
		});

		axios
			.post('http://localhost:5000/api/sendMail', this.state)
			.then((res) => {
				if (res.data.success) {
					this.setState({
						disabled: false,
						emailSent: true
					});
				} else {
					this.setState({
						disabled: false,
						emailSent: false
					});
				}
			})
			.catch((err) => {
				this.setState({
					disabled: false,
					emailSent: false
				});
			});
	};

	render() {
		return (
			<Container
				className="d-flex flex-column"
				style={{
					marginTop: '.5rem',
					marginBottom: '.5rem',
					border: 'solid .05rem #AAAAAA',
					borderRadius: '.5rem',
					backgroundColor: '#fff',
					boxShadow: '2px 5px 2px rgba(0, 0, 0, 0.2)'
				}}>
				<Hero title={this.props.title} />

				<Form onSubmit={this.handleSubmit} style={{ padding: '1rem' }} className="lfont">
					<Form.Group>
						<Form.Label htmlFor="full-name">Name</Form.Label>
						<Form.Control
							id="full-name"
							name="name"
							type="text"
							value={this.state.name}
							onChange={this.handleChange}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label htmlFor="email">Email</Form.Label>
						<Form.Control
							id="email"
							name="email"
							type="email"
							value={this.state.email}
							onChange={this.handleChange}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label htmlFor="message">Message</Form.Label>
						<Form.Control
							id="message"
							name="message"
							as="textarea"
							rows="4"
							value={this.state.message}
							onChange={this.handleChange}
						/>
					</Form.Group>
					<Button
						style={{ backgroundColor: '#2B96B7', border: '#2B96B7' }}
						type="submit"
						variant="primary"
						className="d-inline-block"
						disabled={this.state.disabled}>
						Send
					</Button>

					{this.state.emailSent === true && <p className="d-inline success-msg">Email sent!</p>}
					{this.state.emailSent === false && <p className="d-inline error-msg">Hmm, try again</p>}
				</Form>
			</Container>
		);
	}
}
