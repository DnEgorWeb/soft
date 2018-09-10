import styled        from 'styled-components';
import { DARK_GREY, LIGHT_GREY } from "../../../constants";

export const Section = styled.section``;

export const ActionSection = styled(Section)`
	position: relative;
	padding-top: 200px;
    min-height: 820px;
	background: ${DARK_GREY};
    
    &:after, &:before {
    	content: '';
    	display: block;
    	position: absolute;
    	top: 0;
    	left: 0;
    	width: 100%;
    	height: 100%;
    }
    &:after {
    	background: url('/images/audit/picture_main.png') no-repeat center;
    }
    
    @media screen and (max-width: 768px) {
    	min-height: auto;
    	overflow: hidden;

    	&:after {    		
    		top: -100px;
    		width: 100%;
	        background-size: contain;
	    }
    	&:before {
    		content: '';
    		display: block;
    		position: absolute;
    		top: 0;
    		left: 0;
    		width: 100%;
    		height: 100%;
    		background-image: linear-gradient(to right, ${DARK_GREY} 0%, #41424A 70%);
    		z-index: 0;
    	}
    }
    @media screen and (max-width: 320px) {
    	&:after {    		
    		top: -150px;
    	}
    }
`;

const ActionBlock = styled.div`
	max-width: 450px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	color: white;
	
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const ActionLeftBlock = styled(ActionBlock)`
	position: relative;
	min-height: 700px;
	z-index: 10;
	.action-title {
		margin: 0 0 20px;
		padding: 0;
		font-family: Montserrat,serif;
		font-size: 60px;
		font-weight: 100;
	}
	.action-subtitle {
		display: block;
		margin: 0 0 60px;
		padding: 0;
		font-family: Montserrat,serif;
		font-size: 16px;
		font-weight: 300;
		color: ${LIGHT_GREY};
	}
	
	@media screen and (max-width: 768px) {
		max-width: 450px;
		min-height: auto;
		margin: 180px auto 115px;
		text-align: center;
		.action-title {
			font-size: 50px;
		}
		.action-subtitle {
			font-size: 16px;
		}
	}
	@media screen and (max-width: 320px) {
		margin: 50px auto 80px;
		.action-title {
			font-size: 26px;
		}
		.action-subtitle {
			font-size: 12px;
		}
	}
`;

export const AuditSection = styled(Section)`
	padding: 50px 0 150px;
	background: white;
`;

export const AuditText = styled.div`
	//width: 770px;
	font-family: Montserrat, serif;
	
	.audit-title {
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
	.audit-subtitle {
		margin-top: 80px;
		line-height: 1.54;
		font-size: 26px;
		font-weight: 300;
		font-style: normal;
		font-stretch: normal;
		color: ${LIGHT_GREY};
	}
	.audit-text {
		margin-top: 60px;
		line-height: 2.13;
		font-size: 16px;
		font-weight: normal;
		font-style: normal;
		font-stretch: normal;
	}
	
	@media screen and (max-width: 768px) {
		.audit-title {
			font-size: 40px;
		}
		.audit-subtitle {
			font-size: 20px;
		}
		.audit-text {
			font-size: 16px;
		}
	}
`;

export const AuditImg = styled.div`
	text-align: right;

	@media screen and (max-width: 767px) {
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

export const AuditTypes = styled(Section)`
	padding-top: 110px;
	background: rgba(81, 106, 145, 0.15);

	.types-block-title {
		margin-bottom: 85px;
		font-family: Montserrat,serif;
		font-size: 40px;
		font-weight: 600;
	}

	
	& [class^="col"]:nth-child(even) > div:first-child { margin-right : 0; margin-left: auto; }
	& [class^="col"]:nth-child(odd) > div:first-child { margin-left : 0; }

	@media screen and (max-width: 1440px) {
		& [class^="col"] { margin-bottom: 50px }
		& .card-item-list [class^="col"] { margin-bottom: auto }
	}

	@media screen and (max-width: 992px) {
		& [class^="col"] { margin-bottom: 50px }

		& [class^="col"] > div { margin-left: auto; margin-right: auto; }
		& [class^="col"]:nth-child(odd)  > div:first-child { margin-left: 0; }
		& [class^="col"]:nth-child(even) > div:first-child { margin-right: 0; margin-left: auto; }
	}
`;

export const FormBlock = styled.div`
	padding: 130px 0 115px;
	background: ${DARK_GREY};
	
	.form-title, .form-text {
		color: #ffffff;
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