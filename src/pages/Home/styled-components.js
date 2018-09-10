import styled from 'styled-components'
import {DARK_GREY} from "../../constants";

export const Section = styled.section`
    background: url(images/home/picture_main.svg) no-repeat #2b2c33;
    background-size: cover;
    @media (max-width : 768px)  {
            background: url(images/home/picture_main_768.svg) no-repeat #2b2c33;
            background-position: center;
        }
    @media (max-width : 320px)  {
            background: url(images/home/picture_main_320.svg) no-repeat #2b2c33;
        }    
`

export const Header = styled.div`
    margin-top: 347px;
    margin-bottom: 231px;
    
    @media (max-width : 768px)  {
        margin-top: 634px;
        margin-bottom: 0px;
        text-align: center;
    }  
        
    @media (max-width : 320px)  {
        margin-top: 303px;
        margin-bottom: 0px;
        text-align: center;
    }      
    
    h1 {
        font-size: 60px;
        font-weight: 100;
        color: #fff;
        line-height: 73px;
        margin: 0;
        
        @media (max-width : 768px) {
            font-size: 50px;
            line-height: 61px;
            letter-spacing: 10px;
        }
        
        @media (max-width : 320px) {
            font-size: 26px;
            line-height: 32px;
            letter-spacing: 2px;
            font-weight: 300;
        }
    }
    
    h3 {
        font-size: 16px;
        font-weight: 300;
        color: #686c7c;
        margin-top: 21px;
        margin-bottom: 56px;
        
        @media (max-width : 1024px) {
            font-size: 16px;
            line-height: 19px;
        }
        
        @media (max-width : 320px) {
            margin-top: 10px;
            margin-bottom: 31px;
            font-size: 12px;
            line-height: 17px;
            width: 70%;
            margin-left: auto;
            margin-right: auto;
        }
    }
`

export const FormBlock = styled.div`
	padding: 130px 0 115px;
	background: ${DARK_GREY};
	
	.form-title, .form-text {
		color: #ffffff;
	}
`;