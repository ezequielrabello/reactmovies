import styled from "styled-components";

export const Container = styled.div`
    
    display: grid;
    grid-template-areas: "header" "content";
`;

export const Content = styled.div`
    grid-area: content;
    height: 100vh;

    padding: 40px 120px;

    > h1 {
        margin: 24px auto 40px;
        font-size: 36px;
    }

    > .inputs {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 40px;
        margin-bottom: 40px;
    }

    
`;