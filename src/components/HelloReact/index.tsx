import React from 'react';
import { Button } from 'antd';

import logo from './logo.svg';
import styles from './index.module.less';

const HelloReact: React.FC = () => {
  return (
    <header className={styles.AppHeader}>
      <img src={logo} className={styles.AppLogo} alt="logo" />
      <p>
          Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className={styles.AppLink}
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button type="primary">Learn React</Button>
      </a>
    </header>
  );
}

export default HelloReact;