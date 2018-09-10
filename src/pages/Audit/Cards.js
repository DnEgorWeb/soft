import React from 'react';


import {
	Row, Col
} from 'react-bootstrap';
import {
	ShadowCard
} from "../../modules/Fixtures";

export default ({ cards, cardMouseOver, cardMouseOut, lang }) => {
	const isRu = lang === 'ru';
	return (
		cards.map((card, i) =>
			(
				<Col sm={ 6 } key={ i }>{
					!card.isHover ?
					(
						<ShadowCard
							big
							hoverOn={ () => cardMouseOver(i) }
							hoverOf={ () => cardMouseOut(i) }
						>
							<h3 className='shadowcard-title'>{ card.title }</h3>
							<hr className='shadowcard-delimiter'/>
							<p  className='shadowcard-text'>{ card.text }</p>
							{
								card.list ? (
									<ul className='shadowcard-list'>{
										card.list.map((item, j) => (
											<li key={j} className='shadowcard-list-item'>{item}</li>
										))
									}</ul>
								) : null
							}
						</ShadowCard>
					) :
					(
						<ShadowCard
							big
							hoverOn={ () => cardMouseOver(i) }
							hoverOf={ () => cardMouseOut(i) }
							className='card-active'
						>
							<h3 className='shadowcard-title'>{ card.title }</h3>
							<Row>
								<Col sm={ 6 }><span className='card-item-label'>{isRu ? 'бюджет' : 'budget'}</span></Col>
								<Col sm={ 6 }><span className='card-item-label'>{isRu ? 'срок' : 'term'}</span></Col>
							</Row>
							<Row>
								<Col sm={ 6 }><span className='card-item-value'>{isRu ? `от ${card.budget}₽` : `from ${card.budget}₽`}</span></Col>
								<Col sm={ 6 }><span className='card-item-value'>{isRu ? `от ${card.time} месяца` : `from ${card.budget}₽`}</span></Col>
							</Row>
							<div className='card-group-block'>
								<div className='card-item-label'>{isRu ? 'рабочая группа' : 'working group'}</div>
								<ul className='card-item-list'>
									<Row>
										{ card.group.map((item, j) => (
												<Col
													key={ j }
													lg={6}
													md={12}
												>
													<li>{ item }</li>
												</Col>
											))
										}
									</Row>
								</ul>
							</div>
						</ShadowCard>
					)
				}</Col>
			)
		))
}
