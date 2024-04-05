import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;
    border-radius: 10px;
    
    border: ${({theme, isnew}) => isnew ? `1px dashed ${theme.COLORS.GRAY_700}` : "none"};
    color: ${({theme, isnew}) => isnew ? `${theme.COLORS.GRAY_700}` : `${theme.COLORS.WHITE}`};
    background-color: ${({theme, isnew}) => isnew ? `transparent` : `${theme.COLORS.GRAY_900}`};
    
    > input {
        border: none;
        color: ${({theme}) => theme.COLORS.WHITE};
        background-color: transparent;
        font-size: 16px;
        
        &::placeholder {
            color: ${({theme}) => theme.COLORS.GRAY_700};
            font-size: 16px;
        }
    }

    > button {
        background-color: transparent;
        border: none;
        color: ${({theme}) => theme.COLORS.PINK};
    }
`;