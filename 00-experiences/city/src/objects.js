import * as THREE from 'three'

export function objectsLoads(scene) {

  const terrine = new THREE.Mesh(
    new THREE.PlaneGeometry(50, 50),
    new THREE.MeshBasicMaterial({
      color: '#3C8C3F'
    })
  )
  terrine.position.set(200, 200, 20)
  scene.add(terrine);


  return
}