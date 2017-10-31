import React, { Component } from 'react';
import Interface from '../components/Interface/Interface';
import CubieSpace from '../components/Canvas/CubieSpace';
import {
  View,
  Header,
  Main,
} from './styles';

class Dashboard extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <View>
        <Header>
         <h1>Cubie</h1>
        </Header>
        <Main>
          <Interface />
          <CubieSpace />
        </Main>
      </View>
    );
  }
};

export default Dashboard
