import React from 'react';
import controller from '../../controllers/workspace';
import {
  Container,
  Canvas
} from './styles';

class Workspace3D extends React.Component {
  constructor() {
    super()
    
    this.mouseDown = false;    
  }

  componentDidMount() {
    const div = document.querySelector("#glCanvas");   
    controller.initWorkspace(div)
  }

  mouseMovements(type, e) {
    switch (type) {
      case 'down':
        this.mouseDown = true;
        controller.moveCamera('down', 'x', e.clientX);
        controller.moveCamera('down', 'y', e.clientY);
        break;
      
      case 'move':
        if (this.mouseDown) {
          controller.moveCamera('move', 'x', e.clientX);
          controller.moveCamera('move', 'y', e.clientY);
        } 
        break;

      case 'up':
        this.mouseDown && (this.mouseDown = false);
        break;
    }
  }

  render() {
    return (
      <Container
        onMouseDown={e => this.mouseMovements('down', e)}
        onMouseMove={e => this.mouseMovements('move', e)}
        onMouseUp={e => this.mouseMovements('up', e)}
      >
        <Canvas id="glCanvas"></Canvas>      
      </Container>
    )
  }
}

export default Workspace3D;
