import React, { Component } from 'react';
import Card from './card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import foodspace from '../../images/foodspace.png';
import krunch from '../../images/krunch.png';
import tidesofwar from '../../images/tidesofwar.png';
import reactselfeval from '../../images/reactselfeval.png';

export default class Carousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [
				{
					id: 0,
					title: 'FoodSpace',
					subTitle:
						'Social platform for aspiring home chefs. Use v/v for login/password or feel free to sign up and explore!',
					imgSrc: foodspace,
					link: 'https://foodspace-vt.herokuapp.com/',
					githubLink: 'https://github.com/VitorTomazzi/foodspace',
					selected: false
				},
				{
					id: 1,
					title: 'Krunch',
					subTitle: 'Mock e-commerce store for cereal enthusiasts',
					imgSrc: krunch,
					link: 'https://krunch-cereal-glue.herokuapp.com/',
					githubLink: 'https://github.com/VitorTomazzi/ecommerce-server',
					selected: false
				},
				{
					id: 2,
					title: 'Tides of War',
					subTitle:
						'Chance & turn-based board game. Capture all of the opponents to win pieces! 2-player game',
					imgSrc: tidesofwar,
					link: 'https://vitortomazzi.github.io/Tides-of-War/',
					githubLink: 'https://github.com/VitorTomazzi/Tides-of-War',
					selected: false
				},
				{
					id: 3,
					title: 'React Evaluation Form',
					subTitle: 'An evaluation form build in React for junior developers to score their progress',
					imgSrc: reactselfeval,
					link: 'https://eval-2.herokuapp.com/',
					githubLink: 'https://github.com/VitorTomazzi/eval-2',
					selected: false
				}
			]
		};
	}

	handleCardClick = (id, card) => {
		let items = [ ...this.state.items ];

		items[id].selected = items[id].selected ? false : true;

		items.forEach((item) => {
			if (item.id !== id) {
				item.selected = false;
			}
		});

		this.setState({
			items
		});
	};

	makeItems = (items) => {
		return items.map((item) => {
			return <Card item={item} onClick={(e) => this.handleCardClick(item.id, e)} key={item.id} />;
		});
	};

	render() {
		return (
			<Container>
				<Row>
					<Col>{this.makeItems(this.state.items)}</Col>
				</Row>
			</Container>
		);
	}
}
