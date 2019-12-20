import React, { Component } from 'react';
import Profile from '../../images/ProfileSm.png';
import Container from 'react-bootstrap/Container';

export default class About extends Component {
	render() {
		return (
			<Container
				className="d-flex flex-column justify-content-center align-items-center"
				style={{
					marginTop: '.5rem',
					marginBottom: '.5rem',
					padding: '2.5rem',
					border: 'solid .05rem #AAAAAA',
					borderRadius: '.5rem',
					backgroundColor: '#fff',
					boxShadow: '2px 5px 2px rgba(0, 0, 0, 0.2)'
				}}>
				<img
					src={Profile}
					alt="profile"
					style={{ borderRadius: '50%', width: '216px', height: '200px', marginBottom: '1rem' }}
				/>
				<h1 className="bfont">Hi! My name is Vitor Tomazzi</h1>
				<br />
				<h3 className="lfont">A little about me:</h3>
				<br />
				<p className="lfont">
					Before making the switch into the tech space, my background was in the biological sciences,
					healthcare, and business. Now I like to spend my time reading a ton of books, keeping up with the
					latest technologies, and building clean web applications. On weekends, you can catch me at a concert
					or yelling at the TV every time Marcus Rashford misses a sitter under the goal. I am always up for
					an adventure or available to make a lasting connection, so do not hesitate to reach out. Let's
					connect! {' '}
				</p>
				<br />
				<h5 className="lfont">Tech Stack</h5>
				<div>
					<i class="fab fa-html5" style={{ fontSize: '32px' }} /> {' '}
					<i class="fab fa-css3-alt" style={{ fontSize: '32px' }} /> {' '}
					<i class="fab fa-sass" style={{ fontSize: '32px' }} /> {' '}
					<i class="fab fa-js" style={{ fontSize: '32px' }} /> {' '}
					<i class="fab fa-react" style={{ fontSize: '32px' }} /> {' '}
					<i class="fab fa-node" style={{ fontSize: '32px' }} /> {' '}
					<i class="fab fa-python" style={{ fontSize: '32px' }} /> {' '}
					<i class="fab fa-php" style={{ fontSize: '32px' }} /> {' '}
				</div>
			</Container>
		);
	}
}
//dimensions for picture: 864x803
