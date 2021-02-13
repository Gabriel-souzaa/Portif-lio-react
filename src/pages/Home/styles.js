import styled from 'styled-components'

export const ContentHome = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;

    
`

export const CardMyInformation = styled.div`
    display: flex;
    width: 50%;
    height: 280px;
    background-color: #fff;
    align-items: center;
    border-radius: 30px;
    margin-left: 20px;
    flex-direction: column;
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

    &:hover{
        -webkit-transform: scale(1.3);
        -ms-transform: scale(1.3);
        transform: scale(1.3);
    }
`