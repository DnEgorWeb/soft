import styled from 'styled-components';

import {
	DARK_GREY,
	LIGHT_GREY,
	LINK_COLOR_HOVER
} from "../../../constants";

const Section = styled.section``;

export const AboutAsSection = styled(Section)`
	padding-top: 180px;
	
	@media screen and (max-width: 320px) {
		padding-top: 80px;
	}
	
	.aboutas-title {
		margin: 140px 0 0;
		font-size: 60px;
		font-weight: 600;	
		color: ${DARK_GREY};
		@media screen and (max-width: 768px) {
			margin-top: 70px;
			font-size: 40px;
		}
		@media screen and (max-width: 320px) {
			margin-top: 35px;
			font-size: 26px;
		}
	}
	.aboutas-info {
		max-width: 880px;
		margin: 80px 0 0;
		font-size: 26px;
		font-weight: 300;
		color: ${LIGHT_GREY};
		@media screen and (max-width: 768px) {
			max-width: 600px;
			margin-top: 65px;
			font-size: 20px;
		}
		@media screen and (max-width: 320px) {
			margin-top: 30px;
			font-size: 15px;
		}
	}
`;

export const ListIconSection = styled(Section)`
	margin-top: 100px;
	@media screen and (max-width: 768px) {
		margin-top: 75px;
	}
	@media screen and (max-width: 320px) {
		margin-top: 45px;
	}
`;

export const Item = styled.div`
	position: relative;
	margin-bottom: 75px;
	padding-left: 110px;
	max-width: 500px;
	font-size: 16px;
	color: ${DARK_GREY};

	@media screen and (max-width: 320px) {
		padding-left: 60px;
		font-size: 12px;
	}

	img {
		display: block;
		width: 60px;
		height: 60px;
		position: absolute;
		top: 50%;
		left: 10px;
		transform: translateY(-50%);
		
		@media screen and (max-width: 768px) { width: 42px; height: 42px; }
		@media screen and (max-width: 320px) { width: 35px; height: 35px; }
	}
`;

export const GoalSection = styled(Section)`
	margin-top: 200px;

	@media screen and (max-width: 768px) { margin-top: 120px; }
	@media screen and (max-width: 320px)  { margin-top: 50px; }

	.goal-text {
		position: relative;
		margin: 0 0 50px 10%;
		padding: 50px 0 0;
		font-size: 50px;
		font-weight: 300;
		line-height: 1.5;
		color: ${LIGHT_GREY};

		@media screen and (max-width: 1440px) { font-size: 40px; }
		@media screen and (max-width: 992px) { font-size: 35px; }
		@media screen and (max-width: 768px) { font-size: 30px; }
		@media screen and (max-width: 320px) { font-size: 25px; }

		&:before, &:after {
			content: '';
			display: block;
			position: absolute;
			width: 30px;
			height: 30px;
			background: rgba(81, 106, 145, 0.15);
			@media screen and (max-width: 320px)  { width: 15px; height: 15px; }
		}
		&:before {
			top: 100%;
			left: 0;
			transform: translate(-60px, 20px) skew(-30deg, 0);
			@media screen and (max-width: 320px)  {
				transform: translate(-30px, 10px) skew(-30deg, 0);
			}
		}
		&:after {
			top: 0;
			right: 0;
			transform: translate(10px, 0) skew(-30deg, 0);
			@media screen and (max-width: 320px)  {
				transform: translate(10px, 0) skew(-30deg, 0);
			}
		}
	}
`;

export const Picture = styled.div`
	
	@media screen and (max-width: 992px) {
		display: flex;
		justify-content: stretch;
	}
	
	.goal-picture-title {
		font-size: 16px;
		font-weight: 600;
		color: ${LINK_COLOR_HOVER};
		
		@media screen and (max-width: 320px) {
			font-size: 12px;
  			font-weight: 600;
		}
	}
	.goal-picture-subtitle {
		font-size: 16px;
		color: #999999;
				
		@media screen and (max-width: 320px) {
			font-size: 12px;
  			font-weight: 600;
		}
	}
	img {
		width: 270px;
		height: 270px;
		margin-left: -15px;
		margin-right: -15px;

		@media screen and (max-width: 992px) {
			flex: 0 0 150px;
			width: 150px;
			height: 150px;
			margin-right: 10px;
		}
		@media screen and (max-width: 320px) {
			flex: 0 0 100px;
			width: 100px;
			height: 100px;
		}
	}
`;

export const BrandsSection = styled(Section)`
	margin-top: 150px;

    @media screen and (max-width: 768px) { margin-top: 90px; }
    @media screen and (max-width: 320px) { margin-top: 50px; }

	.partners-title {
		margin: 0;
		padding: 0;
		font-size: 60px;
		font-weight: 600;
		color: ${DARK_GREY};
      	
      	@media screen and (max-width: 768px) {
      		font-size: 40px;
  			font-weight: 600;
      	}
      	
      	@media screen and (max-width: 320px) {
      		font-size: 26px;
  			font-weight: 600;
      	}
	}
	.partners-subtitle {
		display: block;
		max-width: 830px;
		margin: 80px 0;
		font-size: 26px;
		font-weight: 300;
		line-height: 1.54;
		color: ${LIGHT_GREY};

      	@media screen and (max-width: 768px) {
      		margin: 65px 0 65px;
      		max-width: 490px;
      		font-size: 20px;
  			font-weight: 300;
      	}

      	@media screen and (max-width: 425px) {
      		max-width: 100%;
      	}

      	@media screen and (max-width: 320px) {
      		display: none;
      	}
	}

	.brands-img-wrap {
		height: 150px;
		position: relative;
	}

	.brands-img {
		position:absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: block;
	}
`;

export const ContactsSection = styled(Section)`
	margin-top: 150px;
	padding:  130px 0 165px;
	background: ${DARK_GREY};

	.contacts-title {
		margin: 0;
		padding: 0;
		color: white;
		font-size: 60px;
  		font-weight: 600;
	}

	.contacts-subtitle {
		margin-top: 100px;
		margin-bottom: -120px;
		display: block;
		max-width: 410px;
		color: white;
		font-size: 16px;
	}
		
	@media screen and (max-width: 768px) {
		margin-top: 40px;
		padding: 50px 0;

		.contacts-title { font-size: 40px; }

		.contacts-subtitle {
			margin-top: 20px;
			margin-bottom: 0;
			max-width: 100%;
			font-size: 14px;
		}
	}
`;

export const MapContainer = styled.div`
	margin-top: 160px;
	width: 700px;
	height: 550px;
	border-radius: 4px;
	overflow: hidden;
	
	.ymaps-2-1-65-map-copyrights-promo {
		top: auto;
		bottom: 30px;
		right: 0;
		left: auto;
		z-index: 10;
	}

	@media screen and (max-width: 1440px) {
		width: 500px;
	}
	@media screen and (max-width: 992px) {
		width: auto;
		height: 360px;
	}
	@media screen and (max-width: 768px) {
		margin-top: 10px;
	}
	@media screen and (max-width: 320px) {
		margin-top: 10px;
		height: 250px;
	}
`;

export const ContactsGroup = styled.div`
	margin-top: 80px;

	@media screen and (max-width: 992px) {
		display: flex;
		justify-content: stretch;
		flex-wrap: wrap;
	}

	@media screen and (max-width: 768px) {
		margin-top: 50px;
	}
		
	@media screen and (max-width: 320px) {
		display: block;
	}

	.contacts-list-item{
		display: block;
		position: relative;
		margin-bottom: 55px;
		padding-left: 100px;
		list-style: none;

		@media screen and (max-width: 992px) {
			flex: 0 0 50%;
			box-sizing: border-box;
		}

		@media screen and (max-width: 768px) {
			flex: 0 0 50%;
			box-sizing: border-box;
		}

		@media screen and (max-width: 625px) {
			flex: 0 0 100%;
		}
	}
	.contacts-list-item-title, .contacts-list-item-link {
		display: block;
		font-size: 20px;
		@media screen and (max-width: 992px) { font-size: 16px; }
	} 
	.contacts-list-item-title {
		margin-bottom: 10px;
		color: ${LIGHT_GREY};
		text-transform: uppercase;
	}
	.contacts-list-item-link {
		color: white;
		text-decoration: underline;
	}
`;

export const ContactsIcon = styled.i`
	display: block;
	position: absolute;
	top: 50%;
	left: 0;
	transform: translateY(-50%);
	width: 45px;
	height: 45px;
	background: url(${({ icon }) => icon}) no-repeat;
	background-size: auto, 100%;
	
	@media screen and (max-width: 768px) {
		width: 18%;
	}
`;