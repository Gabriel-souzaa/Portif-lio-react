import styled from 'styled-components'

export const ContentHome = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    height: 550px;
    margin-top: 50px;

    .myPicture {
      border-radius: 35%;
      margin-top: 50px;
    }

    .downloadCv {
      margin-top: 20px;
      background-color: #eee;
      color: #000;
      border: 2px solid #91B2FB;
      padding: 10px 20px;
      text-align: center;
      text-decoration: none;
      display: inline-block;

      :hover, :active{
        background-color: #91B2FB;
        color: #eee;
      }
    }

    @media(max-width: 890px){
        flex-direction: column;
        text-align: center;

        .myPicture {
          width: 350px;
          height: 350px;
        }
    }

    @media(max-width: 460px){
        flex-direction: column;
        text-align: center;

        .myPicture {
          width: 250px;
          height: 250px;
        }
    }
`

export const CardMyInformation = styled.div`
    .chargeJobText{
        color: #696969;
        font-size: 18px;
    }
`