import React from 'react';
import {
  Container,
  CubeControls,
  Size,
  CubeDetails
} from './styles';

class Interface extends React.Component {
  constructor(){
    super()

    this.state = {
      active: 1,
      cubes: 1
    }
  }
  
  render() {
    return (
      <Container>
        <h1>Interface</h1>

        <CubeControls>
          <h4>Cube Controls</h4>

          <p>Selected: &nbsp; {this.state.active}</p>
          <Size>
            <p>Size</p>
            <button>Bigger</button>
            <button>Smaller</button>          
          </Size>
          <button>Delete</button>
          <button>Color</button>
        </CubeControls>
        <CubeDetails>
          <h4>Cube Details</h4>

          <p>Cubes: &nbsp; {this.state.cubes}</p>
          <button>Spawn</button>
          <button>Camera Angel</button>
        </CubeDetails>
      </Container>
    );
  }
};

export default Interface;