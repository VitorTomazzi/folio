import React, { Component } from 'react';
import CardInfo from './cardinfo';

export default class Card extends Component {
	render() {
		const { id, title, subTitle, imgSrc, link, githubLink, selected } = this.props.item;

		return (
			<div
				style={{
					padding: '1rem',
					margin: '1rem',
					//border: '.01rem solid black',
					display: 'flex',
					//justifyContent: 'space-around',
					alignItems: 'center',
					flexDirection: 'column'
				}}>
				<a href={link} rel="noopener noreferrer" target="_blank">
					<img
						src={imgSrc}
						alt={imgSrc}
						style={{
							//height: '100%',
							width: '100%',
							border: '.01rem solid black',
							borderRadius: '.1rem',
							marginBottom: '1rem',
							boxShadow: '2px 5px 2px rgba(0, 0, 0, 0.2)'
						}}
					/>
				</a>
				<CardInfo title={title} subTitle={subTitle} link={link} githubLink={githubLink}/>
			</div>
		);
	}
}
