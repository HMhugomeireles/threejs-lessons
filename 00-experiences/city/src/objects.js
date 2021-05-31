import * as THREE from 'three'

export function objectsLoads(scene) {

  const terrine = new THREE.Mesh(
    new THREE.PlaneGeometry(50, 50),
    new THREE.MeshBasicMaterial({
      color: '#3C8C3F'
    })
  )
  scene.add(terrine);


  return
}