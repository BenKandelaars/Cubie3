import React, { Component } from 'react';
import Interface from './Components/Interface/Interface';
import CubieSpace from './Components/Canvas/CubieSpace';

class App extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div>
        <h1>Cubie Header</h1>
        <Interface />
        <CubieSpace
          height={500}
          width={500}
        />
      </div>
    );
  }
}

export default App;
