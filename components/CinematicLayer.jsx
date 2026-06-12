'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import styles from './CinematicLayer.module.css';

const PARTICLE_COUNT = 150;

export default function CinematicLayer() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: false,
      powerPreference: 'high-performance'
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.7));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(58, 1, 0.1, 80);
    camera.position.set(0, 0, 4.4);

    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    const sizes = new Float32Array(PARTICLE_COUNT);
    const base = new Float32Array(PARTICLE_COUNT * 3);
    const offsets = new Float32Array(PARTICLE_COUNT);
    const speeds = new Float32Array(PARTICLE_COUNT);

    for (let i = 0; i < PARTICLE_COUNT; i += 1) {
      const depth = Math.random() * 5.8 - 3.2;
      const x = (Math.random() - 0.5) * 12;
      const y = (Math.random() - 0.48) * 7;

      base[i * 3] = x;
      base[i * 3 + 1] = y;
      base[i * 3 + 2] = depth;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = depth;

      const warm = Math.random() > 0.32;
      colors[i * 3] = warm ? 1 : 0.9;
      colors[i * 3 + 1] = warm ? 0.44 + Math.random() * 0.2 : 0.86;
      colors[i * 3 + 2] = warm ? 0.18 + Math.random() * 0.12 : 1;

      sizes[i] = 0.08 + Math.random() * 0.13;
      offsets[i] = Math.random() * Math.PI * 2;
      speeds[i] = 0.22 + Math.random() * 0.38;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
      size: 0.145,
      transparent: true,
      opacity: 0.58,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    const mouse = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    let frameId = 0;
    let start = performance.now();

    const handleMove = (event) => {
      target.x = (event.clientX / window.innerWidth - 0.5) * 2;
      target.y = -(event.clientY / window.innerHeight - 0.5) * 2;
    };

    const resize = () => {
      const parent = canvas.parentElement;
      const width = parent?.clientWidth || window.innerWidth;
      const height = parent?.clientHeight || window.innerHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const tick = (time) => {
      const elapsed = (time - start) * 0.001;
      const position = geometry.attributes.position.array;

      for (let i = 0; i < PARTICLE_COUNT; i += 1) {
        const ix = i * 3;
        const wave = elapsed * speeds[i] + offsets[i];
        position[ix] = base[ix] + Math.cos(wave * 0.72) * 0.055;
        position[ix + 1] = base[ix + 1] + Math.sin(wave) * 0.075;
      }

      geometry.attributes.position.needsUpdate = true;
      mouse.x += (target.x - mouse.x) * 0.035;
      mouse.y += (target.y - mouse.y) * 0.035;
      camera.position.x += (mouse.x * 0.34 - camera.position.x) * 0.04;
      camera.position.y += (mouse.y * 0.22 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', handleMove, { passive: true });
    frameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handleMove);
      scene.remove(particles);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      start = 0;
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}
