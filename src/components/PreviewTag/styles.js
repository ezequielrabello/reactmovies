import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 32px;
    border-radius: 16px;
    margin: 40px 0;
    
    display: flex;
    flex-direction: column;


    text-align: justify;
    background-color: ${({ theme })=> theme.COLORS.TAG_COLOR};
    > div {
        margin-top: 8px;
    }
    > p {
        margin: 15px 0;
        overflow-y: auto;
        height: 55px;
    }


`;