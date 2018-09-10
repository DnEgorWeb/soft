import React from 'react';

import { Grid, Row, Col } from 'react-bootstrap';
import { Footer } from './styled-components';

export default ({ lang }) => {
	// const isRu = lang === 'ru';

	return (
		<Footer>
			<Grid>
				<Row>
					<Col sm={6}><span className='footer-copyright'>&copy; 2018 ООО &laquo;СОФТ ТЕСТ&raquo;</span></Col>
					{/* <Col sm={6}><a className='footer-link' href=''>{
						isRu ? 'Правила пользования сайтом' : 'Terms of Use'
					}</a></Col> */}
				</Row>
			</Grid>
		</Footer>
	);
}
