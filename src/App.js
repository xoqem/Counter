import Counter from './components/Counter';
import React, { PureComponent } from 'react';
import './App.css';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        App
        <Counter />
      </div>
    );
  }
}

export default App;
