import styled from 'styled-components'

export const ContentHome = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 550px;
    margin-top: 50px;

    img {
      border-radius: 35%;
    }

    @media(max-width: 850px){
        flex-direction: column;
        text-align: center;
    }
`

export const CardMyInformation = styled.div`
    .chargeJobText{
        color: #696969;
        font-size: 18px;
    }
`