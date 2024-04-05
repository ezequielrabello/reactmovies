import { Container, Content } from "./styles"
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"
import { TextArea } from "../../components/TextArea"
import { NoteItem } from "../../components/NoteItem"
import { Input } from "../../components/Input"
import { FiArrowLeft } from "react-icons/fi"


export function CreateMovie() {
    return (
        <Container>
            <Header/>
            <Content>
                <ButtonText icon={FiArrowLeft} title="Voltar"/>

                <h1>Novo filme</h1>
                <div className="inputs">
                    <Input placeholder="Título"/>
                    <Input placeholder="Sua nota (de 0 a 5)"/>
                </div>
                <TextArea placeholder="Observações"/>

                <h2>Marcadores</h2>
                
                <div className="marcadores">
                    <NoteItem value="react"/>
                    <NoteItem isnew="true" placeholder="Novo Marcador"/>
                </div>
                
                <div className="buttons">
                    <Button del title="Excluir filme"/>
                    <Button title="Salvar alterações"/>
                </div>
                
            </Content>
        </Container>
    )
}