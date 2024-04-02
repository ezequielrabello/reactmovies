import styled from "styled-components";

export const Container = styled.textarea`
    background-color: ${({ theme }) => theme.COLORS.GRAY_900};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 14px;

    border: none;
    border-radius: 10px;

    padding: 24px;
    width: 100%;
    height: 247px;
`;