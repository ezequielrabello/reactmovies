import { Container, Content } from "./styles"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Tag } from "../../components/Tag"
import { PreviewTag } from "../../components/PreviewTag"
import {FiPlus} from "react-icons/fi"


export function Home() {
    return (
        <Container>
            <Header/>
            <Content>
                <div className="titles">
                    <h1>Meus filmes</h1>
                    <Button icon={FiPlus} title="Adicionar filme"/>
                </div>
                <PreviewTag title="Interestelar"/>
                <PreviewTag title="Interestelar"/>
                <PreviewTag title="Interestelar"/>
            </Content>
        </Container>
    )
}