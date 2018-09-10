import styled from 'styled-components';
import { PURPLE_COLOR, LIGHT_GREY } from '../../../constants';

export const Footer = styled.footer`
	.footer-copyright, .footer-link {
		display: block;
		min-height: 200px;
		line-height: 200px;
		font-size: 16px;
		color: ${LIGHT_GREY};
		
		@media screen and (max-width: 620px) {
			min-height: auto;
			line-height: 1em;
			padding: 0 0 20px;
			font-size: 12px;
		}
	}
	.footer-link {
		text-decoration: none;
		text-align: right;
		color: ${PURPLE_COLOR};
		
		@media screen and (max-width: 620px) {
			text-align: left;
		}
	}
	
	@media screen and (max-width: 620px) {
		padding: 20px 0;
	}
`;