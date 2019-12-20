import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class hero extends Component {
	render() {
		return (
			<Container
				className="bg-transparent"
				fluid
				style={{
					borderBottom: '.01rem solid #AAAAAA',
					paddingTop: '4rem',
					paddingBottom: '4rem'
					//color: '#f8f8f8'
				}}>
				<Row>
					<Col className="d-flex justify-content-center align-items-center flex-column">
						<h1 className="bfont font-weight-bold" style={{ fontSize: '3.4rem' }}>
							{this.props.title}
						</h1>
						<h6 className="lfont font-weight-light">{this.props.subTitle}</h6>
					</Col>
				</Row>
			</Container>
		);
	}
}

//md={8} sm={12
