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
    sceneRef.current = scene;

    // create a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;

    // create a renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current.appendChild(renderer.domElement);

    // load the 3D object
    const loader = new GLTFLoader();
    loader.load(
      './../Media/Test.glb', // path to your .glb file
      (gltf) => {
        const object = gltf.scene;
        scene.add(object);
      },
      undefined,
      (error) => {
        console.error(error);
      }
    );

    // render the scene
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();
  }, []);

  return <div ref={rendererRef} style={{ width: '100%', height: '100%' }} />;
}

export default ThreeTest;
