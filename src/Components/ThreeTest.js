import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
function ThreeTest() {
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    // create a scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff); // set the background color to white
    sceneRef.current = scene;

    // create a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;

    // create a renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current.appendChild(renderer.domElement);

    // load the 3D model from file
    const loader = new GLTFLoader();
    loader.load(
      './../Media/untitled2',
      (gltf) => {
        // called when the model is loaded
        const model = gltf.scene;
        model.position.set(0, 0, 0);
        scene.add(model);
      },
      (progress) => {
        // called while the model is loading
        console.log(`Loading ${Math.round(progress.loaded / progress.total * 100)}%...`);
      },
      (error) => {
        // called if there is an error loading the model
        console.error(error);
      }
    );

    // add a light to the scene
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(0, 0, 10);
    scene.add(light);

    // render the scene
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();

    // add event listener for window resize
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // clean up event listeners on unmount
    return () => {
      window.removeEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });
    };
  }, []);

  return <div ref={rendererRef} style={{ width: '100%', height: '100%' }} />;
}

export default ThreeTest;
