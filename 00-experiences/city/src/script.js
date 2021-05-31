import './style.css'
import * as THREE from 'three'
import * as dat from 'dat.gui';
import { settings } from './settings'
import { objectsLoads } from './objects'

const {
    renderer,
    scene,
    controls,
    camera
} = settings(THREE);

objectsLoads(THREE, scene)


const clock = new THREE.Clock()
// Animations
const tick = () => {
    
    // time
    const elapsedTime = clock.getElapsedTime();

    // Update controls
    controls.update()

    // three.js render
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick()