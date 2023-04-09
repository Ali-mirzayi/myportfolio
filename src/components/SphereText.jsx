import * as THREE from 'three';
import { useRef, useState, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, TrackballControls } from '@react-three/drei';
import { useViewportSize  } from '@mantine/hooks';

function Cloud({ radius = 20 }) {
    const skils2 = [
        'react js',
        'next js',
        'react native',
        'rxjs',
        'redux',
        'framer motion',
        'react spring',
        'recoil',
        'zustand',
        'ThreeJS',
        'mui',
        'mantine',
        'tailwind',
        'Typescript',
        'PWA',
        'design pattern'
    ]
    const pos = getSpherePositions(radius, skils2.length)

    function getSpherePositions(radius, count) {
        const positions = []

        for (let i = 0; i < count; i++) {
            const phi = Math.acos(-1 + (2 * i) / count)
            const theta = Math.sqrt(count * Math.PI) * phi
            const x = radius * Math.cos(theta) * Math.sin(phi)
            const y = radius * Math.sin(theta) * Math.sin(phi)
            const z = radius * Math.cos(phi)
            positions.push([x, y, z])
        }

        return positions
    }
    const data = skils2.map((item, index) => [item, pos[index]])
    return data.map(([word, pos], index) => <Word key={index} position={pos}>{word}</Word>)
}

function Word({ children, ...props }) {
    const color = new THREE.Color()
    const fontProps = { fontSize: 1.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
    const ref = useRef()
    const [hovered, setHovered] = useState(false)
    const over = (e) => (e.stopPropagation(), setHovered(true))
    const out = () => setHovered(false)
    // Change the mouse cursor on hover
    useEffect(() => {
        if (hovered) document.body.style.cursor = 'pointer'
        return () => (document.body.style.cursor = 'auto')
    }, [hovered]);
    // Tie component to the render-loop
    useFrame(({ camera }) => {
        // Make text face the camera
        ref.current.quaternion.copy(camera.quaternion)
        // Animate font color
        ref.current.material.color.lerp(color.set(hovered ? '#ff48b3' : 'white'), 0.1)
    })
    return (
        <Text ref={ref} onPointerOver={over} onPointerOut={out} onClick={() => console.log(children)} {...props} {...fontProps}>{children}</Text>
    )
}


export default function SphereText() {
    const { width } = useViewportSize();
    return (
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 45 }}>
            <fog attach="fog" args={['#202025', 0, 80]} />
            <Cloud radius={width>850 ? 12 : 8} />
            <TrackballControls noZoom />
        </Canvas>
    )
};
