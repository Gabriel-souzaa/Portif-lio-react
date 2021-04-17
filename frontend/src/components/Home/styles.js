import styled from 'styled-components'

export const ContentHome = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 60px;

    @media(max-width: 850px){
        flex-direction: column;
        text-align: center;

        .studentImg{
            width: 400px;
            height: 390px;
            margin-top: 30px;
        }
    }
`

export const CardMyInformation = styled.div`
    img{
        border-radius: 50%;
        width: 340px;
    }

    .chargeJobText{
        color: #696969;
        font-size: 18px;
    }
`