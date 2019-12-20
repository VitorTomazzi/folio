import React, { Component } from 'react';

export default class CardInfo extends Component {
	render() {
		const { title, subTitle, link, githubLink } = this.props;
		return (
			<div className="d-flex justify-content-center flex-column" style={{ color: 'white', textAlign: 'center' }}>
				<a
					href={githubLink}
					rel="noopener noreferrer"
					target="_blank"
					style={{ textDecoration: 'none', color: 'white' }}>
					<h5 className="bfont">
						{title} <i className="fab fa-github" style={{ color: 'black' }} />{' '}
					</h5>
				</a>
				<h6 className="lfont">{subTitle}</h6>
			</div>
		);
	}
}
