import { Container, Content, Avatar } from "./styles"
import {ButtonText} from "../../components/ButtonText"
import {Button} from "../../components/Button"
import {Input } from "../../components/Input"
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"

export function Profile() {
    return(
        <Container>
            <header>
                <a href="/">
                    <ButtonText icon={FiArrowLeft} title="Voltar"/>
                </a>
            </header>

            <Avatar>
                <img src="https://github.com/ezequielrabello.png" alt="Imagem do usuario" />

                <label htmlFor="avatar">
                    <FiCamera/>
                    <input id="avatar" type="file"/>
                </label>
            </Avatar>

            <Content>
                <form>
                    <div className="inputs">
                        <Input placeholder="Nome" type="text" icon={FiUser}/>
                        <Input placeholder="E-mail" type="email" icon={FiMail}/>
                        <Input placeholder="Senha atual" type="password" icon={FiLock}/>
                        <Input placeholder="Nova senha" type="password" icon={FiLock}/>
                    </div>
                    <Button title="Salvar"/>
                </form>
            </Content>
        </Container>
    )
}