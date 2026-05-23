import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './Menu.module.css';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';
export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>('dark');

  // handleThemeChange é uma funcao que recebe um evento como argumento e retorna um valor ou undefined.
  // Uma função handle (ou manipulador de eventos) é uma função JavaScript/TypeScript executada em resposta a interações do usuário, como cliques em botões, digitação em campos de texto ou envios de formulários.

  // useState Guarda o estado da variavel. Quando muda o theme o estado muda também. O useEffect é uma regra que você programa para acontecer sozinha sob certas condições.

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault(); // Evita o comportamento padrão do link. O preventDefault é uma função java script que evita o comportamento padrão de um elemento no navegador que no nosso caso específico seria acessar o link.

    setTheme((prevTheme) => {
      // Altera o tema
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]); // Executa o useEffect sempre ou somente quando o tema mudar.

  return (
    <nav className={styles.menu}>
      <a href='#' className={styles.menuLink} aria-label='home' title='home'>
        <HouseIcon />
      </a>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='history'
        title='history'
      >
        <HistoryIcon />
      </a>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='settings'
        title='settings'
      >
        <SettingsIcon />
      </a>

      <a
        href='#'
        className={styles.menuLink}
        aria-label='theme'
        title='theme'
        onClick={handleThemeChange}
      >
        <SunIcon />
      </a>
    </nav>
  );
}
