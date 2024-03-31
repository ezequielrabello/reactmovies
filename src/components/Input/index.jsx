import { Container } from "./styles"

export function Input({...rest}) {
    return (
        <Container>
            <input {...rest} 
                placeholder="Pesquisar pelo título"
            />
        </Container>
    )

}