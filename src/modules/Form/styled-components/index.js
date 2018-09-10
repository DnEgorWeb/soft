import styled from 'styled-components';
import {
	DARK_GREY, LIGHT_GREY,
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
		    background-position: -965px 0;
		}
    }
    @media screen and (max-width: 768px) {
    	background: linear-gradient(to bottom, ${DARK_GREY} 0%, #47474c 100%);
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
	& .active-block-text {
		position: relative;
		z-index: 1;
		font-family: Montserrat;
		& .active-title {
			margin: 0;
			padding: 0 0 20px;
			font-size: 60px;
			font-weight: 100;
		}
		& .active-subtitle {
			color: ${LIGHT_GREY};
			font-size: 16px;
			font-weight: 300;
		}
	}
	& .active-block-button {
		margin-top: 50px;
	}
	@media screen and (max-width: 768px) {
		margin: 450px auto 0;
		width: 70%;
		text-align: center;
	}
`;

export const MotivationSection = styled(Section)`
	padding: 50px 0 150px;
	background: white;
`;

export const MotivationText = styled.div`
	//width: 770px;
	font-family: Montserrat, serif;
	
	& .motivation-title {
		margin: 0;
		padding: 0;
		font-size: 40px;
		font-weight: 600;
		font-style: normal;
		font-stretch: normal;
		line-height: 1.23;
		text-align: left;
		color: ${DARK_GREY};
	}
	& .motivation-subtitle {
		margin-top: 80px;
		line-height: 1.54;
		font-size: 26px;
		font-weight: 300;
		font-style: normal;
		font-stretch: normal;
		color: ${LIGHT_GREY};
	}
	& .motivation-text {
		margin-top: 60px;
		line-height: 2.13;
		font-size: 16px;
		font-weight: normal;
		font-style: normal;
		font-stretch: normal;
	}
`;

export const MotivationImg = styled.div`
	text-align: right;
	@media screen and (max-width: 768px) {
		display: none;
	}
	& img {
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

	& .types-block-title {
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
`;

export const FormBlock = styled.div`
	padding: 130px 0 115px;
	background: ${DARK_GREY};
	
	.form-title, .form-text {
		color: #fff;
	}
	
	.form-title {
		font-size: 60px;
		line-height: 73px;
		font-weight: 600;
		margin: 0;
		width: 350px;
		letter-spacing: 2px;
	}
`;

export const InputBlock = styled.div`
	position: relative;

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
	input {
		width: 100%;
	}
	textarea {
		width: 100%;
		height: 160px;
	}
	label {
		position: absolute;
		top: 20px;
		left: 20px;
	}
`;