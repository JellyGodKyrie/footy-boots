import styles from './Logo.module.scss';

export default function Logo() {
return (
  <div className={styles.Logo}>
    <img src="/img/footybootslogo.png" className={styles.image} alt="Logo" />
  </div>
);
}