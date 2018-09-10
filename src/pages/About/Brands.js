import React from 'react';
import { Col } from 'react-bootstrap';

export default ({ brands = [] }) => {
	return brands.map((item, index) => (
		<Col
			className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2'
			key={index}
			style={{ textAlign: 'center' }}
		>
			<div className="brands-img-wrap">
				<img
					className='brands-img'
					src={item.src}
					alt={item.title}
					style={{ margin: '20px 0' }}
				/>
			</div>
		</Col>
	));
};