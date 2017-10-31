import React from 'react';
import controller from '../../controllers/workspace';
import {
  Container,
  Canvas
} from './styles';

class Workspace3D extends React.Component {

  componentDidMount() {
    const div = document.querySelector("#glCanvas");   
    controller.initWorkspace(div)
  }

  render() {
    return (
      <Container>
        <Canvas id="glCanvas"></Canvas>      
      </Container>
    )
  }
}

export default Workspace3D;
