import {Container} from './components/Container/Container';
import {Logo} from './components/Logo/Logo';

import './styles/global.css';
import './styles/themes.css';


export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <section>MENU</section>
      </Container>
    </>
  );
}
