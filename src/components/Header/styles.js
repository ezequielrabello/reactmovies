import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 0 120px;
    grid-area: header;
    display: flex;
    align-items: center;
    height: 116px;
    border-bottom: 1px solid ${({theme})=>theme.COLORS.GRAY_700};
   

    > h1 {
        font-size: 24px;
        color: ${({theme}) => theme.COLORS.PINK};
    }
`;

export const Profile = styled.div`
    display: flex;  
    justify-content: center;
    align-items: center;
    gap: 9px;
    
    padding-left: 64px;

    > div {
        display: flex;
        flex-direction: column;
        width: max-content;
        font-size: 14px;
    }

    div > button {
        background-color: transparent;
        border: none;
        color: ${({ theme }) => theme.COLORS.GRAY_700};
        text-align: end;
        font-size: 14px;
    }

    > img {
        width: 68px;
        height: 68px;
        border-radius: 50%;
    }

`