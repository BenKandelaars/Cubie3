import React, { Component } from 'react';
import controller from "../controllers/workspace";
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
      <View 
        onWheel={e => controller.onWheel(Math.sign(e.deltaY))}    
      >
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
