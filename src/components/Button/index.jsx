import { Container } from "./styles"

export function Button({del, title, icon: Icon}) {
    return (
        <Container del={del}>
            {Icon && <Icon size={20}/>}
            {title}
            
        </Container>
    )
}