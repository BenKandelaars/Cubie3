import * as THREE from 'three';
import { cubeMeta } from './cubes';

function createNewCube({ cubeMeta }) {
  let geometry = new THREE.BoxGeometry( 1, 1, 1 );
  let material = new THREE.MeshBasicMaterial( { color: cubeMeta.color } );
  
  return {
    webGL: new THREE.Mesh( geometry, material ),
    meta: cubeMeta
  }
};

function controller() {
  let cubeStore = [];
  let selectedCube = 0;
  let width;
  let height;
  let scene, camera, renderer;
  let client = {};
  let callbacks = {};
  
  // let colorWhenSelected = new THREE.MeshLambertMaterial( { color: '#9d99c9' } );

  const spawn = () => {
    const newCube = createNewCube({ cubeMeta: new cubeMeta()})
    
    let min = -width * 0.01;
    let max = width * 0.01;
    newCube.webGL.position.x = Math.random() * (  max - min ) + min;
    
    min = -height * 0.01;
    max = height * 0.01;
    newCube.webGL.position.y = Math.random() * (  max - min ) + min;
    
    newCube.webGL.position.z = Math.random() * (  max - min ) + min;
    
    scene.add( newCube.webGL ); 
    cubeStore.push(newCube);

    if(callbacks.hasOwnProperty('spawn')) {
        callbacks['spawn']();
      }      
  }

  const animate = () => {
    const loop = () => {
      requestAnimationFrame( animate );
      
      if (!isStoreEmpty()) {
        cubeStore.map(cube => {
          return updateCube({ ...cube })
        })
        
        cubeStore[selectedCube].webGL.material.color.setHex('0x9d99c9');
      }

      renderer.render(scene, camera);
    };

    loop() 
  }   

  const initWorkspace = (container) => {    
    const boundingRect = container.getBoundingClientRect()
    width = boundingRect.width;
    height = boundingRect.height;
  
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, width/height, 0.1, 1000 );
    camera.position.z = 8;   
  
    renderer = new THREE.WebGLRenderer();
    
    renderer.setSize( width, height);
    container.appendChild( renderer.domElement );
      
    spawn()
      
    animate();  
  };    
 
  function updateCube({ meta, webGL }) {
    webGL.rotation.x += 0;
    webGL.rotation.y += meta.rotationSpeed;
  
    return {
      webGL,
      meta
    }
  }
 
  const isStoreEmpty = () => !cubeStore.length;

  function changeSpeed(direction) {
     if (isStoreEmpty()) { return };

    const currentSpeed = cubeStore[selectedCube].meta.rotationSpeed
    const increment = 0.03 * direction;
    
    if (currentSpeed + increment > 0) { 
      cubeStore[selectedCube].meta.rotationSpeed += increment;
    } else {
      cubeStore[selectedCube].meta.rotationSpeed = 0;
    }
  }

  function changeSize(direction) {
    if (isStoreEmpty()) { return };
    
    const currentSize = cubeStore[selectedCube].webGL.scale.x
    const increment = 0.1 * direction;
    
    if (currentSize + increment > 0) { 
      const size = currentSize + increment
      cubeStore[selectedCube].webGL.scale.set(size, size, size);
    } 
  };

  function deleteCube() {   
    if (isStoreEmpty()) { return };
    scene.remove(cubeStore[selectedCube].webGL);
    cubeStore.splice(selectedCube, 1)            
  }

  function wheel(direction) {
    camera.position.z += direction;
  }

  function moveCamera(event, axis, currentPosition) {
    switch (event) {
      case 'down':
        client[axis] = currentPosition;
        break;

      case 'move':
        if (axis === 'x') {
          camera.position.x += (client.x - currentPosition) * 0.02;          
        } else {
          camera.position.y -= (client.y - currentPosition) * 0.02;                    
        }
        client[axis] = currentPosition;
        break;
      
      default:
      }
  }
  

  return {
    initWorkspace: initWorkspace,
    changeSpeed: changeSpeed,
    changeSize: changeSize,
    deleteCube: deleteCube,
    spawn: spawn,
    cubes: () => cubeStore.length,
    onWheel: wheel,
    moveCamera: moveCamera,
    on: (event, callback) => callbacks[event] = callback, 
  }
}



export default controller();
