import { ReactElement } from 'react';

import styles from '../../styles/Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <svg viewBox="-24 -24 48 48" className={styles.svg}>
        <circle
          cx="0"
          cy="0"
          r="20"
          fill="none"
          strokeWidth="4"
          className={styles.circle}
        ></circle>
      </svg>
    </div>
  );
};

export default Loader;
