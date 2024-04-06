import styled from "styled-components"

export const Container = styled.div`
    
    height: 100vh;

    > header {
        background-color: rgba(255, 133, 155, 0.05);
        padding: 64px 150px;
    }


`;

export const Avatar = styled.div`
    position: relative;

    width: 186px;
    height: 186px;

    margin: -85px auto 0px;
    

    > img {
        width: 186px;
        height: 186px;
        border-radius: 50%;
    }

    > label {
        position: absolute;
        right: 7px;
        bottom: 7px;
        background-color: ${({theme}) => theme.COLORS.PINK};
        width: 48px;
        height: 48px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;

        input {
            display: none;
        }

        svg {
            width: 20px;
            height: 20px;
            color: ${({theme}) => theme.COLORS.GRAY_900};
        }

    }
`

export const Content = styled.div`
    grid-area: content;
    height: 100vh;

    > form {
        width: 340px;
        margin: 0px auto;

        > &::placeholder {
            padding-left: 44px;
        }

        > .inputs {
            display: flex;
            flex-direction: column;
            gap: 8px;

            > div:nth-child(3) {
            margin-top: 24px;
        }

            margin: 64px auto 24px;
        }
    };
    
`;