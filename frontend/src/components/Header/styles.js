import styled from 'styled-components';

export const HearderHome = styled.div`
    display: flex;
    width: 100%;
    border-bottom: 1px solid #eee;
    align-items: center;
    justify-content: space-between;
    background-color: #1C1C1C;
    position: fixed;
    top: 0;
    left: 0;
    color: #fff;
    box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.15);

    .hamburguer {
      display: none;
    }

    @media(max-width: 890px){
        .hamburguer {
          display: block;
        }
    }
`

export const PictureName = styled.div`
    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;

    .avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: inline;
        outline: inherit;
        color: aliceblue;
        font-weight: 600;
        border: 2px solid #91B2FB;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 28px;
    }
`

export const NavMenu = styled.div`
    margin-right: 100px;
    display: flex;
    
    .link{
        text-decoration: none;
        padding-left:50px;
        font-size: 25px;
        font-style: normal;
        cursor: pointer;
        font-family: Arial, Helvetica, sans-serif;

        &:hover{
            color: #91B2FB;
        }
    }

    @media(max-width: 890px){
        display: flex;
        flex-direction: column;

        .link{
            padding-bottom: 10px;
        }
        margin-right: 20px;
        
        .link{
            font-size: 20px;
            padding-left:20px;
        }
        display: ${props => props.isOpen ? 'flex' : 'none'};
    }
`