import React from 'react';
import { Row, Col } from 'react-bootstrap';
// import { YMaps, Map, Placemark } from 'react-yandex-maps';

import Map from './Map';
import {
	ContactsGroup,
	ContactsIcon
} from './styled-components';

const list = (contactsList) => {
	return contactsList.map((item, index) => (
		<li className='contacts-list-item' key={index}>
			<ContactsIcon icon={`images/about/icons/${item.icon}`} />
			<span className='contacts-list-item-title'>{item.title}</span>
			<a className='contacts-list-item-link' href={item.link}>{item.label}</a>
		</li>
	));
};

export default ({ contactsList, lang }) => (
	<Row>
		<Col sm={12}>
			<h2 className='contacts-title'>{lang === 'ru' ? 'Контакты' : 'Contacts'}</h2>
			<span className='contacts-subtitle'>{
				lang === 'ru' ?
				'Свяжитесь с нами для получения более подробной информации'
					:
				'Contact us for more information'
			}</span>
		</Col>
		<Col lg={ 7 } md={12}  className='order-3 order-sm-3 order-md-2'>
			<Map />
		</Col>
		<Col lg={ 5 } md={12} className='order-2 order-sm-2 order-md-3'>
			<ContactsGroup>{ list(contactsList) }</ContactsGroup>
		</Col>
	</Row>
);