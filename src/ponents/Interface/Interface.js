import React from 'react';
import controller from '../../controllers/workspace';
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
      cubes: controller.cubes(),
    }
  }

  componentDidMount() {
    controller.on('spawn', this.cubeUpdate.bind(this));
  }
  
  cubeUpdate() {
    this.setState({
      cubes: controller.cubes()
    })
  }

  render() {
    return (
      <Container>
        <h1>Interface</h1>

        <CubeControls>
          <h4>Cube Controls</h4>

          <p>Selected: &nbsp; {this.state.active}</p>
          <Size>
            <p>Spin</p>
            <button onClick={() => controller.changeSpeed(+1)}>Faster</button>
            <button onClick={() => controller.changeSpeed(-1)}>Slower</button>          
          </Size>
          <Size>
            <p>Size</p>
            <button onClick={() => controller.changeSize(+1)}>Bigger</button>
            <button onClick={() => controller.changeSize(-1)}>Smaller</button>          
          </Size>
          <button onClick={() => controller.deleteCube()}>Delete</button>
          <button>Color</button>
        </CubeControls>
        <CubeDetails>
          <h4>Cube Details</h4>

          <p>Cubes: &nbsp; {this.state.cubes}</p>
          <button  onClick={() => controller.spawn()}>Spawn</button>
          <button>Camera Angle</button>
        </CubeDetails>
      </Container>
    );
  }
};



export default Interface;