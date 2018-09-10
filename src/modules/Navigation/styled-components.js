import styled from 'styled-components'

export const Nav = styled.nav`
    width: 100%;
    position: fixed;
    padding: 50px 0;
    //background-color: #2b2c33;
    z-index: 100;
    //@media screen and (max-width: 1920px) {} 
    @media screen and (max-width: 768px) {
        padding: 42px 0;
    }
    @media screen and (max-width: 640px) {
        padding: 14px 0;
    }
`

export const Logo = styled.div`
    cursor: default;
    width: 120px;
    height: 100px;
    & img {
        cursor: pointer;
        vertical-align: middle;
          
        @media screen and (max-width: 1920px) {
	        height: 97px;
        } 
        @media screen and (max-width: 768px) {
            height: 87px;
        }    
        @media screen and (max-width: 640px) {
            height: 47px;
        }
    }
`

export const List = styled.ul`
    margin: 0;
    padding-left: 0;
    height: 97px;
    list-style: none;
    white-space: nowrap;
`

export const Li = styled.li`
    display: inline-block;
    & a {
        display: inline-block;
        position:relative;
        padding: 0 40px;
        height: 97px;
        line-height: 97px;
        color: white;
        text-decoration: none;
        font-size: 16px;
        font-weight: 500;
        
        @media screen and (max-width: 768px) {
            font-size: 14px;
            padding-left: 25px;
	        padding-right: 0;
        }  
    };
    & a:hover {
        color: #999999;
    };
    & a:after {
      content: '';
      position:relative;
      background-image: url("/images/active.svg");
      background-repeat: no-repeat;
      @media screen and (max-width: 1920px) {
          width: 31px;
          height: 18px;
          top: -35px;
          left: -10px;
        }  
      @media screen and (max-width: 768px) {
          width: 18px;
          height: 11px;
          top: -40px;
          left: -5px;
        }    
    }
    & a.active:after {
      display:block;
    }
`

export const Buttons = styled.div`
    height: 97px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LanguageButton = styled.button`
    flex: 0 0 50%;
    text-align: right;
    color: white;
    background-color:transparent;
    border: none;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: block;
    outline: none;
    @media screen and (max-width: 768px) {
		font-size: 14px;
	}  
`