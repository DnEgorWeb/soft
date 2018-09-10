import React from 'react';

import {
	Row, Col
} from 'react-bootstrap';

import {
	InputBlock
} from '../../pages/Test/styled-components/index';

import { RedButton } from '../Fixtures/index';

export default ({
	                small,
	                id = '',
	                username,
	                email,
	                phone,
	                message,
	                handleInput,
	                lang,
	                text
                }) => {
	const isRu = lang === 'ru';
	return (
		<Row style={{ paddingTop: (id ? 0 : 20) }}>
			<Col md={ 5 }>
				<h2 className='form-title'>{isRu ? 'Закажите сейчас' : 'Order Now'}</h2>
				<p className='form-text'>{isRu ? text.ru : text.en }</p>
			</Col>
			<Col md={ 7 }>
				<Row>
					<Col lg={ small ? 0 : 4 } md={ 12 }>
						<InputBlock empty={!username}>
							<input
								type='text'
								onChange={ handleInput }
								name='username'
								value={ username }
								ref={(fieldName) => this[`fieldName${id}`] = fieldName}
							/>
							<label onClick={() => this[`fieldName${id}`].focus()}>{ (isRu ? 'ФИО' : 'Full name') }</label>
						</InputBlock>
					</Col>
					<Col lg={ small ? 0 : 4 } md={ 12 }>
						<InputBlock empty={!email}>
							<input
								type='text'
								onChange={ handleInput }
								name='email'
								value={ email }
								ref={(fieldEmail) => this[`fieldEmail${id}`] = fieldEmail}
							/>
							<label onClick={() => this[`fieldEmail${id}`].focus()}>E-mail</label>
						</InputBlock>
					</Col>
					<Col lg={ small ? 0 : 4 } md={ 12 }>
						<InputBlock empty={!phone}>
							<input
								type='text'
								onChange={ handleInput }
								name='phone'
								value={ phone }
								ref={(fieldPhone) => this[`fieldPhone${id}`] = fieldPhone}
							/>
							<label onClick={() => this[`fieldPhone${id}`].focus()}>{ (isRu ? 'Телефон' : 'Phone') }</label>
						</InputBlock>
					</Col>
				</Row>
				<Row>
					<Col md={ 12 }>
						<InputBlock empty={!message}>
				            <textarea
					            onChange={ handleInput }
					            name='message'
					            value={ message }
					            ref={(fieldMessage) => this[`fieldMessage${id}`] = fieldMessage}
				            />
							<label onClick={() => this[`fieldMessage${id}`].focus()}>{ (isRu ? 'Сообщение':'Message') }</label>
						</InputBlock>
					</Col>
				</Row>
				<Row>
					<Col sm={ 12 }>
						<RedButton>{isRu ? 'ОСТАВИТЬ ЗАЯВКУ' : 'SUBMIT YOUR APPLICATION'}</RedButton>
					</Col>
				</Row>
			</Col>
		</Row>
	);
}

