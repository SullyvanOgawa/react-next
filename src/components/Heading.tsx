import styles from './Heading.module.css';
export function Heading(props) {
  return (
    <div>
      <h1 className={styles.heading}>{props.children}</h1>
    </div>
  );
}
