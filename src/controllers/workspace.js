import * as THREE from 'three';
import { cubeMeta } from './cubes';

function createNewCube({ cubeMeta }) {
  let geometry = new THREE.BoxGeometry( 1, 1, 1 );
  let material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  
  return {
    webGL: new THREE.Mesh( geometry, material ),
    meta: cubeMeta
  }
};

function controller () {

  let cubeStore = [];
  let selectedCube = 0;
  
  const initWorkspace = (container) => {    
    console.log('init')
  
    const boundingRect = container.getBoundingClientRect()
    const width = boundingRect.width;
    const height = boundingRect.height;
  
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera( 75, width/height, 0.1, 1000 );
    camera.position.z = 5;
  
    let renderer = new THREE.WebGLRenderer();
    
    renderer.setSize( width, height);
    container.appendChild( renderer.domElement );
      
    const newCube = createNewCube({ cubeMeta })
  
    scene.add( newCube.webGL );
        
    cubeStore.push(newCube);
      
    console.log(cubeStore);

    const animate = function () {
      requestAnimationFrame( animate );
    
      cubeStore[0].webGL.rotation.x += 0;
      cubeStore[0].webGL.rotation.y += cubeStore[0].meta.speed;
    
      renderer.render(scene, camera);
    };

    animate();  
  };    
 
  function changeSpeed(amount) {

    const currentSpeed = cubeStore[selectedCube].meta.speed
    const increment = amount/10;

    if (currentSpeed + increment > 0) { 
      cubeStore[selectedCube].meta.speed += increment;
    }
  }

  return {
    initWorkspace: initWorkspace,
    changeSpeed: changeSpeed
  }
}

export default controller();
