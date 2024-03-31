import styled from "styled-components";

export const Container = styled.div`
    height: 56px;
    width: 100%;
    
    display: flex;
    align-items: center;
    
    
    > input {
        background-color: ${({ theme }) => theme.COLORS.GRAY_900};
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 14px;

        border: none;
        border-radius: 10px;

        margin-left: 64px;
        padding: 24px;
        
        flex: 1;
    }

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_700};
        font-size: 14px;
    }
`;