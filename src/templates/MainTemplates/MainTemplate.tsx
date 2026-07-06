import { Container } from "../../components/Container/Container";
import { Logo } from "../../components/Logo/Logo";
import { Footer } from "../../components/Footer/Footer";
import { Menu } from "../../components/Menu/Menu";

type MainTemplateProps = {
    children: React.ReactNode;
}

export function MainTemplate({ children }: MainTemplateProps) {
    return (
        <>
          
          <Container>
            <Logo />
          </Container>
    
          <Container>
            <Menu />
          </Container> 
    
          {children}
    
          <Container>
            <Footer />
          </Container>
        </>
      );
}