import styled from 'styled-components'

export const HearderHome = styled.div`
    display: flex;
    width: 100%;
    border-bottom: 1px solid #eee;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    z-index: 1000;
    top: 0;
    left: 0;
    box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.15);
`

export const PictureName = styled.div`
    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .name{
        color: #000;
        font-size: 23px;
        font-style: normal;
        font-family: Arial, Helvetica, sans-serif;
    }

    @media(max-width: 850px){
        .name{
            font-size: 19px;
        }
        margin: 5px;
    }
`

export const NavMenu = styled.div`
    margin-right: 100px;
    display: flex;
    
    .link{
        text-decoration: none;
        padding-left:50px;
        color: #000;
        font-size: 25px;
        font-style: normal;
        cursor: pointer;
        font-family: Arial, Helvetica, sans-serif;

        &:hover{
            color: #91B2FB;
        }
    }

    @media(max-width: 850px){
        .link{
            font-size: 20px;
            padding-left:20px;
        }
        margin-right: 50px;
    }

    @media(max-width: 570px){
        display: flex;
        flex-direction: column;

        .link{
            padding-bottom: 10px;
        }
        margin-right: 20px;
    }

`