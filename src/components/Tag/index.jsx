import { Container } from "./styles";

export function Tag({title, color, ...rest}) {
    return (
        <Container {...rest}>
            {title}
        </Container>

    )
}