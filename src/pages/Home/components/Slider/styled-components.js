import styled from 'styled-components'

export const Wrapper = styled.div`
    background-color: #222227;
    
    .svg {
        width: 40px;
        
        & path {
            fill: grey;
        }
        
        & .cls-1 {
            fill: none;
            stroke: #686c7c;
        }
    }
    
    &.desktopSlider {
        @media (max-width : 1024px) {
            display: none;
        }
    }
`

export const ListDesktop = styled.ul`
    margin: 0;
    padding: 0;
    
    & li {
        display: inline-block;
        margin: 57px 40px;
        font-size: 16px;
        font-weight: 400;
        color: #686c7c;
        list-style-type: none;
        background-repeat: no-repeat;
        
        @media (max-width: 1440px) {
            margin: 57px 18px;
        }
        
        & div {
            display: inline-block;
            margin-left: 40px;
            line-height: 26px;
            
            @media (max-width: 1440px) {
                margin-left: 20px;
            }
        }
        
        &.active_slider_item {
            color: white;
            
            .cls-1 {
                stroke: white;
            }
        }
    }
    
    & li:hover {
        color: white;
        cursor: pointer;
        .cls-1 {
            stroke: white;
        }
    }
`

export const ListMobile = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 55px 0;
    text-align: center;
    list-style-type: none;
    background-color:#2b2c33;
    
    @media (max-width : 320px) {
        padding: 35px 0;
    }
    
    @media (min-width : 1440px) {
        display: none;
    }

    & li {
        display: inline-block;
        width: 15px;
        height: 15px;
        cursor: pointer;
        position:relative;
        margin-left: 2px;
        margin-right: 2px;
        
        &::after {
            content: '';
            position:absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 5px;
            height: 5px;
            border-radius: 100%;
            background-color: #686c7c;
        }
        
        &.active::after { 
            width: 15px;
            height: 15px;
            background-color: white;
        }
    }
`