import { MENU_ITEMS } from '../../Constants/Navigation';
import styles from './Menu.module.css';

export function Menu() {
  return (
    <nav className={styles.menu}>
      {MENU_ITEMS.map(({ id, icons: Icon, path }) => (
        <a key={id} className={styles.menuLink} href={path}>
          <Icon/>
        </a>
      ))}
    </nav>
  );
}
