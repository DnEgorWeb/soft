import React, { Component } from 'react';
import { Grid, Row, Col }   from 'react-bootstrap';

// import {
// 	EMAIL,
// 	PHONE,
// 	ADDRESS,
// 	VK,
// 	TWITTER,
// 	FACEBOOK
// } from '../../constants';

import {
	AboutAsSection,
	ListIconSection,
	GoalSection,
	Picture,
	BrandsSection,
	ContactsSection
} from './styled-components';

import STATE from './state';

import ListWithIcon from './ListWithIcon';
import Brands       from './Brands';
import Contacts     from './Contacts';

class About extends Component {
	constructor(props) {
		super(props);
		props.changeContrastHeader && props.changeContrastHeader(true);
	}

	state = STATE;

    render() {
		const isRu = this.props.lang === 'ru';

	    return (
		    <main>
			    <AboutAsSection>
				    <Grid>
					    <Row>
						    <Col sm={ 12 }>
							    <h1 className='aboutas-title'>{isRu ? 'О нас' : 'About as'}</h1>
							    <p className='aboutas-info'>{
							    	isRu ?
									    `Команда профессионалов в сфере QA. Мы готовы подтвердить
									    качество Ваших решений и помочь Вам в построении наиболее
									    эффективных процессов.`
									    :
									    `A team of professionals in the field of QA. We are ready to confirm
									    the quality of your decisions and help you in building the most
									    efficient processes.`
							    }</p>
						    </Col>
					    </Row>
				    </Grid>
			    </AboutAsSection>
			    <ListIconSection>
				    <Grid>
						<ListWithIcon items={isRu ? this.state.items : this.state.eng_items} />
				    </Grid>
			    </ListIconSection>
			    <GoalSection>
				    <Grid>
					    <Row className='justify-content-end'>
						    <Col lg={3} md={6} sm={12}
						         className='order-lg-1 order-md-2 order-sm-2 order-2 col-8'
						    >
							    <Picture>
								    <img src='images/about/face.png' alt='Дмитрий Красовский'/>
								    <div>
									    <h3 className='goal-picture-title'>{
									    	isRu ? 'Дмитрий Красовский' : 'Dmitry Krasovsky'
									    }</h3>
									    <span className='goal-picture-subtitle'>{
									    	isRu ? ['технический',<br key={189654357465}/>, 'директор'] : ['technical', <br key={12324349856}/>, 'director']
									    }</span>
								    </div>
							    </Picture>
						    </Col>
						    <Col lg={9} md={12} className='order-lg-2 order-md-1 order-sm-1 order-1'>
							    <p className='goal-text'>{
							    	isRu ?
								    [
								    	'Наша цель — предложить Клиентам понятные и современные решения.',
								        <br key={1444564654}/>,
								        'Обеспечить простоту взаимодействия с Клиентом.'
								    ]
								    :
								    [
								    	'Our goal is to offer our customers clear and modern solutions.',
								        <br key={149816514}/>,
									    'Ensure ease of interaction with the Customer.'
								    ]
							    }</p>
						    </Col>
					    </Row>
				    </Grid>
			    </GoalSection>
			    <BrandsSection>
				    <Grid>
					    <Row>
						    <Col sm={12}>
							    <h2 className='partners-title'>{isRu ? 'Партнеры' : 'Partners'}</h2>
						    </Col>
					    </Row>
					    <Row>
						    <Col sm={12}>
							    <span className='partners-subtitle'>{
							    	isRu ?
								    'Команда SOFT TEST работает в сотрудничестве с передовыми технологическими компаниями'
								    :
								    'SOFT TEST team works in cooperation with leading technology companies'
							    }</span>
						    </Col>
					    </Row>
					    <Row className='justify-content-center'>
						    <Brands brands={isRu ? this.state.brands : this.state.eng_brands} />
					    </Row>
				    </Grid>
			    </BrandsSection>
			    <ContactsSection>
				    <Grid>
					    <Contacts
						    contactsList={isRu ? this.state.contactsList : this.state.eng_contactsList}
						    lang={this.props.lang}
					    />
				    </Grid>
			    </ContactsSection>
		    </main>
	    )
    }
}

export default About;