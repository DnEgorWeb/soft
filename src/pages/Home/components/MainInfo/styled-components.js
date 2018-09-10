import styled from 'styled-components'

export const MainInfo = styled.div`
    padding-top: 140px;
    padding-bottom: 140px;
    
    & h3 {
        font-size: 60px;
        line-height: 73px;
        font-weight: 700;
        color: #2b2c33;
        margin: 0;
    }
    
    & img {
        margin-top: 165px;
        &:last-child {
            display: none;
        }
    }
    
    & p {
        margin-top: 55px;
        padding-right: 70px;
        font-size: 20px;
        font-weight: 400;
        color: #2b2c33;
        line-height: 30px;
    }
    
    & .howWeTestHeader {
        margin-top: 190px;
    }
    
    & .listItemWrap {
        margin-top: 140px;
    }
     
    @media (max-width: 768px) {
        padding-top: 70px;
        padding-bottom: 70px;
    
        .listItemWrap {
            margin-top: 86px;
        }
        
        & h3 {
            font-size: 40px;
            line-height: 49px;
            font-weight: 700;
            color: #2b2c33;
            margin: 0;
        }
        
        & .howWeTestHeader {
            margin-top: 90px;
        }
        
        & img {
            margin-top: 109px;
        }
        
        & p {
            margin-top: 44px;
            font-size: 14px;
            line-height: 24px;
        }
    }
    
    @media (max-width: 320px) {
        padding-top: 37px;
        padding-bottom: 37px;
        position: relative;
        
        & h3 {
            font-size: 26px;
            line-height: 32px;
            font-weight: 700;
            color: #2b2c33;
            margin: 0;
        }
        
        & img:first-child {
            display: none;
        }
        
        & img:last-child {
            display: block;
            position:absolute;
            left: 25px;
            margin-top: 30px;
        }
        
        & p {
            margin-left: 90px;
            padding-right: 0;
        }
        
        .listItemWrap {
            margin-top: 53px;
        }
        
        .howWeTestHeader {
            margin-top: 53px;
        }
    }
`

export const ListItem = styled.div`
    height: 85px;
    background-repeat: no-repeat;
    padding-left: 100px;
    position:relative;
    display: table-cell;
    vertical-align: middle;
    font-size: 20px;
    line-height: 30px;
    
    @media (max-width: 768px) {
        font-size: 16px;
        line-height: 28px;
    }
    
    @media (max-width: 320px) {
        font-size: 14px;
        line-height: 24px;
    }
    
    &::after {
        content: '';
        display: block;
        position: absolute;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);
        height: 50px;
        width: 62px;
        background-image: ${({imgSrc}) => `url(${imgSrc})`};
        background-repeat: no-repeat;
    }
`