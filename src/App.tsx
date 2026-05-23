import { Container } from './components/Container/Container';
import { CountDown } from './components/CountDown/CountDown';
import { Formulario } from './components/Formulario/Formulario';
import { Footer } from './components/Footer/Footer';
import { Logo } from './components/Logo/Logo';
import { Menu } from './components/Menu/Menu';
// import { Heading } from './components/Heading/Heading';

import './styles/global.css';
import './styles/themes.css';

export function App() {
  // let number = 0;
  // function handleClick() {
  //   number += 1;
  // }

  
  return (
    <>
      {/* <Heading>Número: {number}</Heading> */}
      {/* <button onClick={handleClick}></button> */}
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <Formulario />
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}
