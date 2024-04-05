import styled from "styled-components";

export const Container = styled.button`
    border: none;
    padding: 13px;
    width: 100%;
    border-radius: 8px;
    
    text-align: center; 
    background-color: ${({theme, del})=> del ? `${theme.COLORS.GRAY_1000}` : theme.COLORS.PINK};
    color: ${({theme, del})=> del ? theme.COLORS.PINK : theme.COLORS.BLACK};
    font-size: 16px;

    display: flex;
    align-items: center;
    justify-content: center;
`