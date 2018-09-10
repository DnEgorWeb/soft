import React, { Component }  from 'react';

import {
	Grid,
	Row,
	Col
} from 'react-bootstrap';
import STATE from './state';
import {
	RedButton
} from '../../modules/Fixtures';

import Form from '../../modules/Form/index'

import {
	ActionSection,
	ActionLeftBlock,
	AuditSection,
	AuditText,
	AuditImg,
	AuditTypes,
	FormBlock
} from './styled-components';

import Cards from './Cards';

const text = {
    ru: `Команда Софт Тест, обладая широкими компетенциями
    в сферах IT-технологий и защиты информации может
    разработать и организовать особую программу аудита
    соотвествующую потребностям Вашей компании.
    Оставьте заявку и мы свяжемся с Вами.`,
    en: `The Soft Test team, having wide competencies
     in IT and information security
     to develop and organize a special audit program
     corresponding to the needs of your company.
     Leave a request and we will contact you.`
}

class Audit extends Component {
	state = STATE;

	componentWillReceiveProps(nextProps) {
		this.setState({ lang: nextProps.lang });
	}

	cardMouseOver = (i) => {
		const { cards, eng_cards, lang } = this.state;
		const current_cards = lang === 'ru' ? cards : eng_cards;

		if(current_cards[i].isHover) return;
		current_cards[i].isHover = true;
		this.setState({ [lang === 'ru' ? 'cards' : 'eng_cards'] : current_cards });
	}

	cardMouseOut = (i) => {
		const { cards, eng_cards, lang } = this.state;
		const current_cards = lang === 'ru' ? cards : eng_cards;

		if(!current_cards[i].isHover) return;

		current_cards[i].isHover = false;
		window.timeout = setTimeout(() => this.setState({ [lang === 'ru' ? 'cards' : 'eng_cards'] : current_cards }), 3000);
	}

	handleInput = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	}

    render() {
	    const {lang, cards, eng_cards} = this.state;
	    const current_cards = lang === 'ru' ? cards : eng_cards;
	    const isRu = lang === 'ru';

        return (
		    <main>
			    <ActionSection>
				    <Grid>
					    <Row>
						    <Col sm={12}>
							    <ActionLeftBlock>
								    <h1 className='action-title'>{isRu ? 'Аудит' : 'Audit'}</h1>
								    <span className='action-subtitle'>{
								    	isRu ?
									        'Всесторонний анализ эффективности процессов, действующих в вашей компании'
									        :
									        'Comprehensive analysis of the effectiveness of processes in your company'
								    }</span>
								    <div className='action-button-block'>
									    <RedButton>{isRu ? 'ОСТАВИТЬ ЗАЯВКУ' : 'SUBMIT YOUR APPLICATION'}</RedButton>
								    </div>
							    </ActionLeftBlock>
						    </Col>
					    </Row>
				    </Grid>
			    </ActionSection>
			    <AuditSection>
				    <Grid>
					    <Row>
						    <Col md={6} sm={12}>
							    <AuditText>
								    <h2 className="Audit-title">{
								    	isRu ?
									    'Проведение программы аудита'
									    :
									    'Conducting an audit program'
								    }</h2>
								    <div className="Audit-subtitle">{
								    	isRu ?
									    `Компанда SOFT TEST предлагает сервис всестороннего анализа
									    эффективности процессов действующих в вашей компании.`
									    :
									    `Compand SOFT TEST offers a comprehensive analysis service
									    the effectiveness of processes in your company.`
								    }</div>
								    <p className="Audit-text">{
								    	isRu ?
									    `Аудит проводится профессионалами финансовой и IT-сферы. Результатом аудита
									    станет оптимизация технологических процессов, повышение защищенности и
									    коммерческой эффективности бизнес-процессов Вашей компании.`
									    :
									    `The audit is conducted by financial and IT professionals. The result of the audit
									    will be optimization of technological processes, increase of security and
									    commercial effectiveness of your company's business processes.`
								    }</p>
							    </AuditText>
						    </Col>
						    <Col md={6}>
							    <AuditImg>
								    <img src='/images/test/scheme.svg' alt='decor' />
							    </AuditImg>
						    </Col>
					    </Row>
				    </Grid>
			    </AuditSection>
			    <AuditTypes>
				    <Grid>
					    <h2 className='types-block-title'>{isRu ? 'Виды аудита' : 'Types of audit'}</h2>
					    <Row className='align-items-stretch'>
						    <Cards
							    lang={lang}
							    cards={current_cards}
							    cardMouseOver={this.cardMouseOver}
							    cardMouseOut={this.cardMouseOut}
						    />
					    </Row>
				    </Grid>
			    </AuditTypes>
			    <FormBlock>
				    <Grid>
					    <Form
						    username={this.state.username}
						    email={this.state.email}
						    phone={this.state.phone}
						    message={this.state.message}
						    handleInput={this.handleInput}
						    lang={lang}
							text={text}
					    />
				    </Grid>
			    </FormBlock>
		    </main>
	    )
    }
}

export default Audit;