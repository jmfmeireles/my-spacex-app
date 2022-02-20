import { useContext } from 'react';

import TranslationContext from '../../context/Translation';
import styles from '../../styles/Header.module.css';

const Header = () => {
  const { t } = useContext(TranslationContext);
  return (
    <header className={styles.header}>
      <h3 className={styles.title}>{t.title}</h3>
      <p className={styles.decription}>{t.description}</p>
    </header>
  );
};

export default Header;
