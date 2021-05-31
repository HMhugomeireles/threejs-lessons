import * as THREE from 'three'
import { sizes } from './parameters'
import { loadingAssets } from './loading-assets'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export function settings() {
  // Canvas
  const canvas = document.querySelector('canvas.webgl')

  // Scene
  const scene = new THREE.Scene()
  scene.background = new THREE.Color( 0xcccccc );

  // load settings
  //const {} = loadingAssets(THREE);

  // Camera
  const camera = new THREE.PerspectiveCamera(60, sizes.width / sizes.height, 1, 1000)
  camera.position.set(400, 200, 0)
  scene.add(camera)

  // Controls
  const controls = new OrbitControls(camera, canvas)
  controls.enableDamping = true

  /**
   * Renderer
   */
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas
  })
  renderer.setSize(sizes.width, sizes.height)

  window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  })

  return {
    settings: {
      sizes
    },
    scene,
    renderer,
    camera,
    controls
  }
}