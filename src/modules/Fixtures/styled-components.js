import styled from 'styled-components';
import {
	TRANSITION_SPEED,
	ACCENT_RED,
	ACCENT_RED_HOVER,
	ACCENT_RED_ACTIVE,
	PURPLE_COLOR,
	DARK_GREY,
	LINK_COLOR,
	LINK_COLOR_HOVER,
	LINK_COLOR_ACTIVE
}             from '../../constants'

export const Button = styled.button`
	padding: 15px 30px;	
	background: ${ACCENT_RED};
	border: none;
	border-radius: 2px;
	color: #fff;
	font-size: 16px;
	font-weight: 700;
	cursor:pointer;
	outline: none;
	text-transform: uppercase;
	&:hover {
	  background: ${ACCENT_RED_HOVER};
	}
	&:active {
	  background: ${ACCENT_RED_ACTIVE};
	}
	
	@media (max-width: 768px) {
		padding: 16px 28px;
	}
	
	@media (max-width: 460px) {
		display: block;
		margin: 0 auto;
		padding: 14px 60px;
		font-size: 14px;
	}
`;

export const Box = styled.div`
	padding: 55px;
	color: #fff;
	background: ${({ grey, purple }) => grey ? DARK_GREY : (purple ? PURPLE_COLOR : '')};
`;

const Link = styled.a`
	display: inline-block;
	padding: 15px 30px;
	color: ${LINK_COLOR};
	font-size: 16px;
	cursor: pointer;
`;

export const BLink = styled(Link)`
	position: relative;
	font-weight: bold;
	&:before, &:after {
		content: '';
		display: inline-block;
		position: absolute;
		transition: ${TRANSITION_SPEED};
	}
	&:before {
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-top: 1px solid white;
		border-left: 1px solid white;
	}
	&:hover:before {
		width: 80%;
		height: 90%;
	}
	&:after {
		bottom: 0;
		right: 0;
		width: 100%;
		height: 100%;
		border-bottom: 1px solid white;
		border-right: 1px solid white;
	}
	&:hover:after {
		width: 80%;
		height: 90%;
	}
	
	@media screen and (max-width: 768px) {
		font-size: 14px;
	}  
`;

export const StyledLink = styled(Link)`
	&:hover {
		color: ${LINK_COLOR_HOVER};
	}
	&:active {
		color: ${LINK_COLOR_ACTIVE};
	}
`;

export const ShBox = styled.div`
	margin: 0 auto 40px;
	padding: 60px;
	width: ${({ big }) => big ? '680' : '420'}px;
	height: 500px;
	background: white ;
	box-shadow: 0 0 40px rgba(0,0,0,0.3);
	transition: 0.1s ease-in;
	box-sizing: border-box;

	@media screen and (max-width: 1460px) {
		width: ${({ big }) => big ? '90%' : '315px'};
		margin-left: auto;
		margin-right: auto;
		min-height: 100%;
		height: auto;
	}
	@media screen and (max-width: 768px) {
		width: auto;
		min-height: 100%;
	}
	@media screen and (max-width: 460px) {
		width: auto;
		min-height: auto;
		padding: 20px;
		
		.shadowcard-title {
			margin-bottom: 20px;
			font-size: 16px;
		}
		.shadowcard-text { font-size: 12px; }
	}

	.shadowcard-title {
		color: ${PURPLE_COLOR};
		margin-bottom: 40px;
	}

	.shadowcard-delimiter {
		width: 40px;
		height: 3px;
		margin: 0 0 35px;
		padding: 0;
		background: #d1d8e6;
		border: none;
		border-radius: 2px;
		font-family: Montserrat,serif;
		font-size: 16px;
		user-select: none;
	}
	
	.shadowcard-text {
		font-size: 16px;
		
		@media screen and (max-width: 1460px) {
			font-size: 14px;
		}
	}

	.shadowcard-list {
		margin: 30px 0 0;
		padding: 0;
	}
	.shadowcard-list-item {
		list-style: none;
		display: block;
		padding: 10px 0 10px 30px;
		position: relative;
		font-size: 14px;
		&:before {
			content: '';
			display: inline-block;
			width: 14px;
			height: 20px;
			position: absolute;
			top: 50%;
			left: 0;
			transform: translateY(-80%) rotate(40deg);
			border-right:	2px solid ${PURPLE_COLOR};
			border-bottom:	2px solid ${PURPLE_COLOR};
			border-left:	2px solid transparent;
			border-top:		2px solid transparent;
		}
	}

	&.card-active {
		background: ${PURPLE_COLOR};
		* {
			color: #ffffff;
		}
		.card-item-label {
			color: ${LINK_COLOR_HOVER};
			font-size: 14px;
		}
		.card-group-block {
			margin-top: 50px;
		}
		.card-item-list {
			margin: 0;
			padding: 0;
		}
		.card-item-list li {
			display: block;
			position: relative;
			padding: 8px 0;
			list-style: none;
			font-size: 16px;
			
			&:before {
				content: '—';
				display: block;
				position: absolute;
				top: 0;
				left: -25px;
				width: 20px;
				height: 100%;
				line-height: 35px;
			}
		}
		
		@media screen and (max-width: 460px) {
			.card-item-label, .card-item-value { font-size: 12px; }
			.card-item-list li {
				margin-left: 25px;
				font-size: 12px;
			}
		}
	}
`;
