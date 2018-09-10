import React, {Component}  from 'react';
import {
    Grid,
    Row,
    Col
} from 'react-bootstrap';

import { RedButton } from "../../modules/Fixtures";
import Cards         from './Cards';
import Form          from '../../modules/Form/index';

import {
	ActionSection,
	MotivationSection,
	ActionBlock,
	MotivationText,
	MotivationImg,
	TestingTypes,
	FormBlock
} from './styled-components/index';

import STATE from './state';

class Test extends Component {
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
		const {lang, cards, eng_cards, text} = this.state;
	    const current_cards = lang === 'ru' ? cards : eng_cards;
	    const isRu = lang === 'ru';

        return (
            <main>
                <ActionSection>
                    <Grid>
                        <Row>
                            <Col>
	                            <ActionBlock>
		                            <div className='active-block-text'>
                                        <h1 className='active-title'>{isRu ? 'Тестирование' : 'Testing'}</h1>
			                            <div className='active-subtitle'>{
				                            isRu ?
				                            'Комплексный сервис мониторинга, соотвествующий потребностям Вашей компании'
				                            :
				                            'A comprehensive monitoring service that meets the needs of your company'
			                            }</div>
		                            </div>
                                    <div className="active-block-button">
                                        <RedButton>{isRu ? 'ОСТАВИТЬ ЗАЯВКУ' : 'SUBMIT YOUR APPLICATION'}</RedButton>
                                    </div>
	                            </ActionBlock>
                            </Col>
                        </Row>
                    </Grid>
                </ActionSection>
                <MotivationSection>
                    <Grid>
                        <Row>
                            <Col lg={6} md={8} sm={12}>
                                <MotivationText>
                                    <h2 className="motivation-title">{
                                    	isRu ?'Скорость и достижение результата' : 'Speed and achievement of the result'
                                    }</h2>
                                    <div className="motivation-subtitle">{
	                                    isRu ?
	                                    'Значительное улучшение пользовательского опыта взаимодействия с интерфейсами' :
	                                    'Significant improvement in user experience with interfaces'
                                    }</div>
                                    <p className="motivation-text">{
                                    	isRu ?
	                                    `Заказывая проведение любого из видов тестирования ваших систем и продуктов, вы получаете
	                                    комплексный сервис предполагающий не просто всестороннее исследование объекта
	                                    тестирования, но и результаты мониторинга условий возникновения ошибок, рекомендации
	                                    по устранению ошибок и сопровождение продукта до этапа релиза` :
	                                    `When ordering any type of testing of your systems and products, you get
	                                    Complex service assuming not just a comprehensive study of the object
	                                    testing, but also the results of monitoring the conditions for the occurrence of errors, recommendations
	                                    on the elimination of errors and maintenance of the product to the stage of release`
                                    }</p>
                                </MotivationText>
                            </Col>
                            <Col lg={6} md={4}>
                                <MotivationImg>
	                                <img src='/images/test/scheme.svg' alt='decor' />
                                </MotivationImg>
                            </Col>
                        </Row>
                    </Grid>
                </MotivationSection>
	            <TestingTypes>
		            <Grid>
			            <h2 className='types-block-title'>{isRu ? 'Виды тестирования' : 'Types of testing'}</h2>
			            <Row className='align-items-start'>
				            <Cards
					            cards={current_cards}
					            cardMouseOver={this.cardMouseOver}
					            cardMouseOut={this.cardMouseOut}
				            />
			            </Row>
		            </Grid>
	            </TestingTypes>
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

export default Test;