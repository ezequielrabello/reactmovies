import { Input } from "../Input"
import { Container, Profile } from "./styles"

export function Header() {
    return (
        <Container>
            <h1>RocketMovies</h1>
            <Input/>
            <Profile>
                
                <div>
                    <strong>Ezequiel Rabello</strong>
                    <button>Sair</button>
                </div>
                
                <img src="https://www.github.com/ezequielrabello.png" alt="User Picture" />

            </Profile>
        </Container>
    )
}