'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import styles from '../styles/CinematicLayer.module.css';

export default function CinematicLayer() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
    camera.position.z = 3;

    const COUNT = 180;
    const positions = new Float32Array(COUNT * 3);
    const colors    = new Float32Array(COUNT * 3);

    for (let i = 0; i < COUNT; i++) {
      positions[i*3]   = (Math.random()-0.5)*10;
      positions[i*3+1] = (Math.random()-0.5)*6;
      positions[i*3+2] = (Math.random()-0.5)*4;
      const warm = Math.random() > 0.45;
      colors[i*3]   = warm ? 1 : 0.85+Math.random()*0.15;
      colors[i*3+1] = warm ? 0.35+Math.random()*0.25 : 0.85+Math.random()*0.15;
      colors[i*3+2] = warm ? 0.1 : 1;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.12, vertexColors: true, transparent: true,
      opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true,
    });

    const particles = new THREE.Points(geo, mat);
    scene.add(particles);

    const offsets = Array.from({ length: COUNT }, () => Math.random() * Math.PI * 2);
    const speeds  = Array.from({ length: COUNT }, () => 0.3 + Math.random() * 0.4);

    let mouse = { x: 0, y: 0 };
    const onMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMove);

    const resize = () => {
      const w = canvas.parentElement?.clientWidth || window.innerWidth;
      const h = canvas.parentElement?.clientHeight || window.innerHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener('resize', resize);

    let frame = 0;
    let rafId;
    const tick = () => {
      frame++;
      const t = frame * 0.008;
      const pos = geo.attributes.position.array;
      for (let i = 0; i < COUNT; i++) {
        pos[i*3+1] += Math.sin(t * speeds[i] + offsets[i]) * 0.0012;
        pos[i*3]   += Math.cos(t * speeds[i] * 0.7 + offsets[i]) * 0.0008;
      }
      geo.attributes.position.needsUpdate = true;
      camera.position.x += (mouse.x * 0.25 - camera.position.x) * 0.035;
      camera.position.y += (mouse.y * 0.15 - camera.position.y) * 0.035;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
      rafId = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', resize);
      geo.dispose(); mat.dispose(); renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}
