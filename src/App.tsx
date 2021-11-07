import React from 'react';
import styles from './App.module.less';

import HelloReact from './components/HelloReact';

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <HelloReact />
    </div>
  );
}

export default App;
