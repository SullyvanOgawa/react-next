import { Container } from './components/Container/Container';
import { CountDown } from './components/CountDown/CountDown';
import { Formulario } from './components/Formulario/Formulario';
import { Logo } from './components/Logo/Logo';
import { Menu } from './components/Menu/Menu';

import './styles/global.css';
import './styles/themes.css';

export function App() {
  return (
    <>
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
    </>
  );
}
