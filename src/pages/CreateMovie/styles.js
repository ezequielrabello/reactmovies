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
    };

    > h2 {
        margin: 40px auto 24px;

        font-weight: 400;
        font-size: 20px;
        color: ${({theme}) => theme.COLORS.GRAY_500};
    }

    > .marcadores {
        padding: 16px;
        border-radius: 8px;
        background-color: ${({theme}) => theme.COLORS.GRAY_1000};

        display: flex;
        flex-wrap: wrap;
        gap: 24px;
    }

    > .buttons {
        margin: 40px auto;
        
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 40px;
        width: 100%;

    }

    
`;