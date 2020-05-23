import React, { Component } from 'react';
import './App.css';
import './myStyle.css'
import StyleSheet from "../src/components/Stylesheet";
import Inline from './components/Inline';
import './appStyle.css';
import styles from './appStyles.module.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="error">Error</h1>
        <h1 className={styles.success}>Success</h1>

        <Inline />
        <StyleSheet primary={false} />

      </div>
    );
  }
}

export default App;
