import styled from 'styled-components'

export const ContentHome = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 5px;

    @media(max-width: 850px){
        flex-direction: column;
    }
`

export const CardMyInformation = styled.div`
    display: flex;
    width: 30%;
    height: 280px;
    background-color: #fff;
    align-items: center;
    border-radius: 20px;
    margin-left: 20px;
    flex-direction: column;
    justify-content: space-between;
    overflow-x: hidden;
    text-align: start;

    .myinformation{
        background-color: #fff;
    }

    &::-webkit-scrollbar {
        width: 3px;
        background-color: #000;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #91B2FB;
        background-image: -webkit-gradient(
            linear,
            0 0,
            0 100%,
            color-stop(0.5, rgba(255, 255, 255, 0.2)),
            color-stop(0.5, transparent),
            to(transparent),
        );
    }

    @media(max-width: 850px){
        margin: 0px;
        width: 80%;
    }
`

export const ButtonOnMe = styled.button`
    width: 150px;
    height: 30px;
    background-color: #ddd;
    outline: inherit;
    cursor: pointer;
    border: 0;
    background: #91B2FB;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin-bottom: 20px;

    &:hover{
        -webkit-transform: scale(1.3);
        -ms-transform: scale(1.3);
        transform: scale(1.3);
    }
`