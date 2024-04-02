import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-areas: "header" "content";
    overflow-y: auto;

`;

export const Content = styled.div`
    padding: 50px 120px;
    grid-area: content; 
    height: 100vh;
    overflow-y: auto;
    > .titles {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    div > h1 {
        font-size: 32px;
    }
`