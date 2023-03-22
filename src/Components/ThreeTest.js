import React, { useState, useRef, useEffect } from "react";
import * as THREE from "three";

const ThreeTest = () => {
  const containerRef = useRef(null);
  const [color1, setColor1] = useState(0xffffff);
  const [color2, setColor2] = useState(0xffffff);
  const [color3, setColor3] = useState(0xffffff);

  useEffect(() => {
    // Get the container div
    const container = containerRef.current;
  
    // Create the scene
    const scene = new THREE.Scene();
  
    // Create the camera
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
  
    // Create the renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);
  
    // Create the first balloon
    const geometry1 = new THREE.SphereGeometry(0.5, 32, 32);
    const material1 = new THREE.MeshBasicMaterial({ color: color1 });
    const balloon1 = new THREE.Mesh(geometry1, material1);
    balloon1.position.x = -2;
    scene.add(balloon1);
  
    // Create the second balloon
    const geometry2 = new THREE.SphereGeometry(0.5, 32, 32);
    const material2 = new THREE.MeshBasicMaterial({ color: color2 });
    const balloon2 = new THREE.Mesh(geometry2, material2);
    balloon2.position.x = 0;
    scene.add(balloon2);
  
    // Create the third balloon
    const geometry3 = new THREE.SphereGeometry(0.5, 32, 32);
    const material3 = new THREE.MeshBasicMaterial({ color: color3 });
    const balloon3 = new THREE.Mesh(geometry3, material3);
    balloon3.position.x = 2;
    scene.add(balloon3);
  
    // Animate the scene
    const animate = function () {
      requestAnimationFrame(animate);
      balloon1.rotation.x += 0.01;
      balloon1.rotation.y += 0.01;
      balloon2.rotation.x += 0.01;
      balloon2.rotation.y += 0.01;
      balloon3.rotation.x += 0.01;
      balloon3.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
  
    animate();
  
    // Clean up the scene when the component is unmounted
    return function cleanup() {
      renderer.dispose();
      geometry1.dispose();
      material1.dispose();
      geometry2.dispose();
      material2.dispose();
      geometry3.dispose();
      material3.dispose();
      scene.dispose();
    };    
  }, [color1, color2, color3]);
  
return (
  <div style={{ width: "100%", height: "100%" }}>
    <div ref={containerRef} style={{ width: "100%", height: "80%" }} />
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <button
        onClick={() => setColor1(Math.random() * 0xffffff)}
        style={{ backgroundColor: `#${color1.toString(16)}` }}
      >
        Change Color 1
      </button>
      <button
        onClick={() => setColor2(Math.random() * 0xffffff)}
        style={{ backgroundColor: `#${color2.toString(16)}` }}
      >
        Change Color 2
      </button>
      <button
        onClick={() => setColor3(Math.random() * 0xffffff)}
        style={{ backgroundColor: `#${color3.toString(16)}` }}
      >
        Change Color 3
      </button>
    </div>
  </div>
);
};

export default ThreeTest;
