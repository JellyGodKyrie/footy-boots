import styles from './Logo.module.scss';

export default function Logo() {
return (
  <div className={styles.Logo}>
    <img src="https://app.logo.com/view/logo_afc83da8-2d0e-4169-b83e-2ffe19884101" className={styles.image} alt="Logo" />
  </div>
);
}