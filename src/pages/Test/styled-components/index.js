import styled from 'styled-components';
import {
	DARK_GREY, LIGHT_GREY, TRANSITION_SPEED
} from '../../../constants';

export const Section = styled.section``;

export const ActionSection = styled(Section)`
    padding-top: 200px;
    min-height: 920px;
    position: relative;
    background: ${DARK_GREY};

    &:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background: url('/images/test/picture_test.png') no-repeat center;
    	z-index: 1;

		@media screen and (max-width: 768px) {
		    background-position: -965px -150px;
		}
		@media screen and (max-width: 460px) {
		    background-position: -1100px -150px;
		}
    }

    @media screen and (max-width: 768px) {
    	background: linear-gradient(to bottom, ${DARK_GREY} 0%, #47474c 100%);
    }

	@media screen and (max-width: 460px) {
		min-height: 680px;
	}
`;

export const ActionBlock = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 445px;
	height: 600px;
	color: white;
	position: relative;
	z-index: 1;

	@media screen and (max-width: 768px) {
		margin: 500px auto 100px;
		width: 70%;
		height: auto;
		text-align: center;
	}

	@media screen and (max-width: 460px) {
		margin-top: 200px;
		width: 95%;
	}

	.active-block-text {
		position: relative;
		z-index: 1;
		font-family: Montserrat, serif;

		.active-title {
			margin: 0;
			padding: 0 0 20px;
			font-size: 60px;
			font-weight: 100;
		}

		.active-subtitle {
			color: ${LIGHT_GREY};
			font-size: 16px;
			font-weight: 300;
		}
		
		@media screen and (max-width: 460px) {
			.active-title {
				font-size: 26px;
			    font-weight: 200;
			}
			.active-subtitle {
				font-size: 12px;
			}
		}
	}

	.active-block-button {
		margin-top: 50px;
	}
`;

export const MotivationSection = styled(Section)`
	padding: 50px 0 150px;
	background: white;
	
	@media screen and (max-width: 768px) {
		padding: 50px 0 50px;
	}
`;

export const MotivationText = styled.div`
	//width: 770px;
	font-family: Montserrat, serif;
	
	.motivation-title {
		margin: 0;
		padding: 0;
		font-size: 40px;
		font-weight: 600;
		line-height: 1.23;
		text-align: left;
		color: ${DARK_GREY};
	}
	.motivation-subtitle {
		margin-top: 80px;
		line-height: 1.54;
		font-size: 26px;
		font-weight: 300;
		color: ${LIGHT_GREY};
	}
	.motivation-text {
		margin-top: 60px;
		line-height: 2.13;
		font-size: 16px;
	}
	
	@media screen and (max-width: 768px) {
		.motivation-title {
			font-size: 26px;
	  		font-weight: 600;
		}
		.motivation-subtitle {
			margin-top: 60px;
			font-size: 20px;
		}
		.motivation-text {
			margin-top: 55px;
			max-width: 465px;
		}
	}
	@media screen and (max-width: 460px) {
		.motivation-title {
			font-size: 26px;
	  		font-weight: 600;
		}
		.motivation-subtitle {
			margin-top: 30px;
			font-size: 18px;
		}
		.motivation-text {
			margin-top: 30px;
			font-size: 12px;
		}
	}
`;

export const MotivationImg = styled.div`
	text-align: right;

	@media screen and (max-width: 768px) {
		display: none;
	}

	img {
		display: inline-block;
		width: 435px;
		
		@media screen and (max-width: 1460px) {
			width: 100%;
		}
	}
`;

export const TestingTypes = styled(Section)`
	padding-top: 110px;
	background: rgba(81, 106, 145, 0.15);

	.types-block-title {
		margin-bottom: 85px;
		font-family: Montserrat,serif;
		font-size: 40px;
		font-weight: 600;
	}
	
	& [class^="col"]:nth-child(1) > div:first-child { margin-left : 0 }
	& [class^="col"]:nth-child(4) > div:first-child { margin-left : 0 }
	& [class^="col"]:nth-child(3) > div:first-child { margin-right: 0; margin-left: auto; }
	& [class^="col"]:nth-child(6) > div:first-child { margin-right: 0; margin-left: auto; }

	@media screen and (max-width: 992px) {
		& [class^="col"] > div { margin-left: auto; margin-right: auto; }
		& [class^="col"]:nth-child(odd)  > div:first-child { margin-left: 0; }
		& [class^="col"]:nth-child(even) > div:first-child { margin-right: 0; margin-left: auto; }
	}

	@media screen and (max-width: 992px) {
		padding-top: 20px;
		.types-block-title {
			margin-bottom: 20px;
			font-size: 26px;
  			font-weight: 600;
		}
	}
`;

export const FormBlock = styled.div`
	padding: 130px 0 115px;
	background: ${DARK_GREY};
	
	.form-title, .form-text {
		color: #ffffff;
	}

	@media screen and (max-width: 460px) {
		padding: 20px 0;
		.form-title {
			font-size: 26px;
  			font-weight: 600;
		}
		.form-text {
			margin-bottom: 40px;
			font-size: 12px;
		}
	}
`;

export const InputBlock = styled.div`
	position: relative;
	//overflow: hidden;

	label, input, textarea {
		font-size: 16px;
		color: ${LIGHT_GREY};
	}

	input, textarea {
		margin-bottom: 30px;
		padding: 20px;
		background: #ffffff;
		border: none;
		border-radius: 4px;
	}

	input:focus ~ label,
	textarea:focus ~ label {
		top: -20px;
		font-size: 12px;
		color: white;
	}

	input {
		width: 100%;
	}

	textarea {
		width: 100%;
		height: 160px;
	}

	label {
		position: absolute;
		top: ${({ empty }) => empty ? 20 : -20 }px;
		left: 20px;
		transition: ${TRANSITION_SPEED};
		font-size: ${({ empty }) => empty ? 16 : 12 }px;
		color: ${({ empty }) => empty ? LIGHT_GREY : 'white' };
	}
	
	@media screen and (max-width: 460px) {
		label, input, textarea {
			font-size: 12px;
		}
		input, textarea {
			margin-bottom: 25px;
		}
`;