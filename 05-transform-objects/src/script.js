import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)

/**
 * Mesh position
 */ 
// mesh.position.x = 0.7
// mesh.position.y = -0.6
// mesh.position.z = 1
// short hand to change all 3 in same time
mesh.position.set(0.7, -0.6, 1);

/**
 * Mesh scale
 */
// you can use each property for set only one vertices
mesh.scale.set(2, 0.5, 0.5);

/**
 * Mesh rotation
 */
mesh.rotation.reorder('YXZ')
mesh.rotation.x = Math.PI * 0.25
mesh.rotation.y = Math.PI * 0.25

scene.add(mesh)

/**
 * Move with group
 */
const group = new THREE.Group()
// this can also change the position and rotation
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0011 })
)
group.add(cube1)

/**
 * Axes helper
 */
const axesHelper =  new THREE.AxesHelper(2)
scene.add(axesHelper)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
// camera.position.set()
scene.add(camera)

/**
 * Make camera look at something
 */
//camera.lookAt(new THREE.Vector3(3, 0, 0));
camera.lookAt(mesh.position);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)