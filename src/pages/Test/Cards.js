import React from 'react';


import {
	Row, Col
} from 'react-bootstrap';
import {
	ShadowCard
} from "../../modules/Fixtures";

export default ({ cards, cardMouseOver, cardMouseOut }) => {
	return (
		cards.map((card, i) =>
			(
				<Col sm={ 6 } md={ 6 } lg={ 4 } key={ i }>{
					!card.isHover ?
					(
						<ShadowCard
							hoverOn={ () => cardMouseOver(i) }
							hoverOf={ () => cardMouseOut(i) }
						>
							<h3 className='shadowcard-title'>{ card.title }</h3>
							<hr className='shadowcard-delimiter'/>
							<p  className='shadowcard-text'>{ card.text }</p>
						</ShadowCard>
					) :
					(
						<ShadowCard
							hoverOn={ () => cardMouseOver(i) }
							hoverOf={ () => cardMouseOut(i) }
							className='card-active'
						>
							<h3 className='shadowcard-title'>{ card.title }</h3>
							<Row>
								<Col className='col-6'><span className='card-item-label'>бюджет</span></Col>
								<Col className='col-6'><span className='card-item-label'>срок</span></Col>
								<Col className='col-6'><span className='card-item-value'>от { card.budget }₽</span></Col>
								<Col className='col-6'><span className='card-item-value'>от { card.time } месяца</span></Col>
							</Row>
							<div className='card-group-block'>
								<div className='card-item-label'>рабочая группа</div>
								<ul className='card-item-list'>
									{ card.group.map((item, j) => (<li key={ j }>{ `${item}` }</li>)) }
								</ul>
							</div>
						</ShadowCard>
					)
				}</Col>
			)
		))
}
