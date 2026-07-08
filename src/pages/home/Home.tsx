import  { Container } from "../../components/Container/Container";
import { CountDown } from "../../components/CountDown/CountDown";
import { Formulario } from "../../components/Formulario/Formulario";
import { MainTemplate } from "../../templates/MainTemplates/MainTemplate";


export function Home() {
  
    return (
        <>
          
          <MainTemplate>
            <Container>
                <CountDown />
            </Container>

            <Container>
                {/* é o mesmo que MainForm da aula */}
                <Formulario />
            </Container>
          </MainTemplate>
        </>
      );
}