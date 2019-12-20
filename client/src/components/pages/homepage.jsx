import React, { Component } from 'react';
import Hero from '../components/hero';
import Carousel from '../components/carousel';

export default class HomePage extends Component {
	render() {
		const { title, subTitle } = this.props;

		return (
			<div>
				<div>
					<Hero title={title} subTitle={subTitle} />
				</div>
				<Carousel />
			</div>
		);
	}
}

//B8C2CE
//linear-gradient(0deg, rgba(114,100,116,1) 0%, rgba(236,236,252,1) 100%)
//linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(236,236,252,1) 100%)'
//linear-gradient(0deg, rgba(76,56,79,1) 0%, rgba(236,236,252,1) 100%)
