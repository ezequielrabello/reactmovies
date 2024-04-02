import styled from "styled-components";

export const Container = styled.button`
    width: max-content;
    padding: 13px;
    border: none;
    border-radius: 8px;
    
    color: ${({theme}) => theme.COLORS.BLACK};
    background-color: ${({theme})=>theme.COLORS.PINK};
    font-size: 16px;

    display: flex;
    align-items: center;
`