import styled from "styled-components";

export const Container = styled.div`
    
    margin: auto;
    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas: "header" "content";
`

export const Content = styled.div`
    padding: 0 120px;
    margin-top: 40px;

    > .title {
        display: flex;
        align-items: center;
        
        gap: 19px;
        margin-top: 24px;

        > h1 {
            font-size: 36px;
        }
    }

    .info {
        margin-top: 24px;
        display: flex;
        align-items: center;
        gap: 9px;
    }

    .user, .date {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .user img {
        width: 16px;
        height: 16px;
        border-radius: 50%;
    }

    > .tags {
        display: flex;
        flex-direction: row;
        gap: 8px;
        margin: 40px 0;
    }

    > p {
        text-align: justify;
    }
`;

