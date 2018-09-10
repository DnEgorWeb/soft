import styled from 'styled-components'
import {TRANSITION_SPEED} from '../../constants'

export const MenuToggle = styled.div`
    display: block;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
    position:relative;
    width: 26px;
    height: 20px;
    margin-top: 100%;
    transform: translateY(-50%);
    span {
        width: 80%;
        height: 2px;
        position: absolute;
        background-color: white;
        display: block;
        top: 50%;
        right: 0;
        transform: translateY(-1px);
        transition-duration: ${TRANSITION_SPEED};
        &.open {
            opacity: 0;
        }
    }
`

export const Burger = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    transform-origin: 50% 0%;
    
    &:before {
        top: 0;
    }
    &:after {
        top: 20px;
    }
    &:before, &:after {
        content: '';
        display: block;
        position:absolute;
        width: 26px;
        height: 2px;
        right: 0;
        background-color:white;
        transition-duration: 0.3s;
    }
    &.open {
        border-top: 0;
        border-bottom: 0;
        &:after,&:before {
            content:'';
            display: block;
            position:absolute;
            width: 30px;
            height: 2px;
            background-color: white;
            top: 50%;
            right: 0;
        }
        &:before {
            transform: rotate(-45deg);
        }
        &:after {
            transform: rotate(45deg);
        }
    }
`

export const List = styled.ul`
    position: absolute;
    z-index: -1;
    top: 55px;
    left: 0;
    padding: 0;
    width: 100%;
    overflow: hidden;
    height: 0;
    background-color: #2b2c33;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    /* to stop flickering of text in safari */

    transition-duration: 0.5s;
    transition-timing-function: ease-out;

    li {
        padding: 15px 0;
        font-size: 16px;
        color: white;
        font-weight: 500;
        text-align: center;
        display: inline-block;
        position:relative;
    }
    
    li:nth-child(5), li:nth-child(6) {
        display: block;
        button {
            display: inline-block;
        }
    }
    
    a {
        text-decoration: none;
        position:relative;
        display: block;
        text-align: center;
    }
    
    & li:after {
        content: '';
        position:absolute;
        display: none;
        background-image: url("/images/active.svg");
        background-repeat: no-repeat;
        width: 22px;
        height: 13px;
        top: 35px;
        left: -8px;  
    }
    
    & li.active:after {
        display:block;
    }   
    
    &.open {
        height: 490px;
    }
    
    .languageButton {
        margin-left: auto;
        margin-right: auto;
    }
`

export const Contacts = styled.div`
    font-size: 12px;
    font-weight: 400;
    div {
        padding: 5px 0;
    }
`

export const ContactUs = styled.div`
    color: #686c7c;
`

export const SocialLinks = styled.div`
    margin-top: 45px;
    a {
        padding: 0 24px;
        display: inline-block;
    }
    
    img {
        width: 36px;
        height: 36px;
    }
`