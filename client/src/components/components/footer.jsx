import React, { Component } from 'react';

export default class Footer extends Component {
	render() {
		return (
			<footer
				className="d-flex flex-column justify-content-center align-items-center"
				style={{ paddingTop: '1.7rem', paddingBottom: '1rem', backgroundColor: '#343A40' }}>
				<div>
					<a
						href="https://github.com/VitorTomazzi"
						rel="noopener noreferrer"
						target="_blank"
						style={{ textDecoration: 'none', color: 'white' }}>
						<i className="fab fa-github" style={{ fontSize: '32px' }} />{' '}
					</a>
					<a
						href="https://www.linkedin.com/in/vitor-tomazzi/"
						rel="noopener noreferrer"
						target="_blank"
						style={{ textDecoration: 'none', color: 'white' }}>
						<i className="fab fa-linkedin" style={{ fontSize: '32px' }} />
					</a>
				</div>
				<h6
					className="lfont"
					style={{ display: 'flex', justifyContent: 'center', color: 'white', marginTop: '1rem' }}>
					Brought to you from the curious mind of Vitor Tomazzi
				</h6>
			</footer>
		);
	}
}

//className="mt-5"
