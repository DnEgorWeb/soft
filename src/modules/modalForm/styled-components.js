import styled from 'styled-components';
import {
	DARK_GREY,
	TRANSITION_SPEED
} from '../../constants';

export const ModalWrap = styled.div`
	position: relative;
	height: 0;
	border: 0;
	margin: 0;
	padding: 0;
	line-height: 0;
`;

export const Modal = styled.div`
	position: absolute;
	top: 0;
	left: 50%;
	width: 760px;
	height: ${({ isOpen }) => isOpen ? 630 : 0}px;
	color: white;
	background: ${DARK_GREY};
	transition-duration: ${TRANSITION_SPEED};
	transform: translateX(-30%);
	overflow: hidden;
	z-index: 100;
	line-height: normal;
	animation: ${({ isOpen }) => isOpen ? `toggleHeight ${TRANSITION_SPEED} both` : 'none'};

	@keyframes toggleHeight {
		0% { border-radius: 0 0 0 100%; }
		100% { border-radius: 0; }
	}

	@media screen and (max-width: 1460px) { transform: translateX(-50%) }
	@media screen and (max-width: 992px) { 
		width: 525px;
	}
	
	.modal-left-block {
		height: auto;
		font-family: Montserrat,serif ;
  		font-size: 16px;
  		line-height: 1.69;

		outline: 1px dashed red;
	}
`;

export const ModalInner = styled.div`
	padding: 100px 50px 50px;
`;