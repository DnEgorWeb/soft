import styled from 'styled-components'

export const Wrapper = styled.div`
    background-color: rgba(81, 106, 145, 0.15);
    & .cards {
        justify-content: center;
    }
    
    & .card-1, .card-2{fill:rgba(81,106,145,.15)}
`

export const Card = styled.div`
    width: 410px;
    height: 596px;
    margin-top: 155px;
    margin-bottom: 155px;
    background-color: white;
    cursor: pointer;
    
    @media (max-width: 768px) {
        width: 314px;
        height: 442px;
        margin-top: 50px;
        margin-bottom: 50px;
    }
    
    @media (max-width: 320px) {
        height: 150px;
        margin-top: 35px;
        margin-bottom: 35px;
        padding-left: 24px;
        text-align: left;
    }
    
    text-align: center;
    position: relative;
    box-shadow: 0 0 40px rgba(0,0,0,0.3);
    
    :hover {
        box-shadow: 0 0 20px rgba(0,0,0,0.3);
        
        & .card-1, .card-2 {
            fill: #3a5695
        }
    }
    
    & img {
        width: 260px;
        margin-top: 70px;
        
        @media (max-width: 768px) {
            width: 211px;
            margin-top: 40px;
        }
        
        @media (max-width: 320px) {
            display: none;
        }
    }
    
    & svg {
        height: 85px;
        position:absolute;
        right: 0;
        bottom: 0;
        
        @media (max-width: 768px) {
            height: 58px;
        }
        
        @media (max-width: 320px) {
            height: 37px;
        }
    }
    
    & h4 {
        margin-top: 41px;
        margin-bottom: 27px;
        font-size: 20px;
        line-height: 30px;
        color: #3a5695;
        font-weight: 600;
        
        @media (max-width: 768px) {
            margin-top: 27px;
            margin-bottom: 14px;
            font-size: 16px;
        }
        
        @media (max-width: 320px) {
            margin-top: 20px;
            margin-bottom: 10px;
        }
    }
    
    & p {
        font-size: 16px;
        line-height: 26px;
        color: #999999;
        
        @media (max-width: 768px) {
            font-size: 14px;
            line-height: 24px;
        }
        
        @media (max-width: 320px) {
            margin: 0;
        }
    }
`

export const FirstCard = styled(Card)`
    background-color:#3a5695;
    cursor: default;
    padding-left: 67px;
    padding-right: 0;
    text-align: left;
    box-shadow: none;
    position:relative;
    
    @media (max-width: 768px) {
        width: 100%;
        height: 194px;
        margin-bottom: 40px;
    }
    
    @media (max-width: 320px) {
        margin-bottom: 0;
        height: 150px;
    }
    
    :hover {
        box-shadow: none;
    }
    
    & img.firstCardImage {
        width: 112px;
        height: 142px;
        position:absolute;
        left: 70px;
        bottom: 212px;
        
        @media (max-width: 768px) {
            width: 85px;
            height: 108px;
            left: 50px;
            bottom: 34px;
            margin-top: 0;
        }
        
        @media (max-width: 320px) {
            display: block;
            width: 48px;
            left: 25px;
            bottom: 10px;
        }
    }
    
    & h3 {
        text-transform: uppercase;
        margin-top: 435px;
        font-size: 40px;
        line-height: 52px;
        color: white;
        
        @media (max-width: 768px) {
            width: 180px;
            margin-top: 92px;
            margin-left: 120px;
            font-size: 30px;
            line-height: 39px;
        }
        
        @media (max-width: 320px) {
            width: 120px;
            margin-top: 67px;
            margin-left: 25px;
            font-size: 20px;
            line-height: 28px;
        }
    }
`