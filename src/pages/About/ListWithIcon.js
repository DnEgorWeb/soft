import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Item } from './styled-components';

export default ({ items = [] }) => (
	<Row>
		{
			items.map((item, index) => (
				<Col key={index} md={6}>
					<Item>
						<img src={`images/about/icons/${item.icon}`} alt={item.icon} />
						{item.text}
					</Item>
				</Col>
			))
		}
	</Row>
);