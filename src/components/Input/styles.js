import styled from "styled-components";

export const Container = styled.div`
    height: 56px;
    width: 100%;
    
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.GRAY_900};
    border-radius: 10px;
    gap: 8px;
    padding: 12px;
    
    > input {
        background-color: ${({ theme }) => theme.COLORS.GRAY_900};
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 14px;

        border: none;
       

        
        
        flex: 1;
    }

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_700};
        font-size: 14px;
    }
`;