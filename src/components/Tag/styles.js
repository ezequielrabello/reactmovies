import styled from "styled-components";

export const Container = styled.span`
    background-color: ${({ theme }) => theme.COLORS || theme.COLORS.TAG_COLOR};
    padding: 8px;
    border-radius: 8px;
    font-size: 12px;
    width: max-content;
`