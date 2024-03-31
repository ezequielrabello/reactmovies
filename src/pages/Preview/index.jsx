import { ButtonText } from "../../components/ButtonText"
import { Header } from "../../components/Header"
import { Container, Content } from "./styles"
import {FiArrowLeft, FiStar} from "react-icons/fi"
import {AiFillStar} from "react-icons/ai"
import { TfiTime } from "react-icons/tfi";


export function Preview() {
    return (
        <Container>
            <Header/>
            <Content>
                <ButtonText 
                    title="Voltar"
                    icon={FiArrowLeft}
                />

                <div className="title">

                    <h1>Interestellar</h1>
                    <div className="stars">
                            <AiFillStar /> 
                            <AiFillStar /> 
                            <AiFillStar /> 
                            <AiFillStar /> 
                            <FiStar/> 
                    </div>

                </div>

                <div className="info">

                    <div className="user">
                        <img src="https://www.github.com/ezequielrabello.png" alt="Foto avatar" />
                        <span>Por Ezequiel Rabello</span>
                    </div>
                    <div className="date">
                        <TfiTime/>
                        <span>23/05/22 às 08:00</span>
                    </div>
                    
                </div>


            </Content>
        </Container>
    )
}