import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export default function AsapModel({ ...props }) {
  const group = useRef()
  const { scene } = useGLTF('/asap.glb')

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.45) * 0.12
    }
  })

  const model = useMemo(() => {
    const clonedScene = scene.clone()
    clonedScene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = true
        if (child.material) {
          child.material = child.material.clone()
          child.material.needsUpdate = true
        }
      }
    })

    const box = new THREE.Box3().setFromObject(clonedScene)
    const center = box.getCenter(new THREE.Vector3())
    const size = box.getSize(new THREE.Vector3())
    const maxDim = Math.max(size.x, size.y, size.z) || 1

    clonedScene.position.sub(center)
    clonedScene.scale.setScalar(5 / maxDim)
    clonedScene.position.set(0, 0, 0)

    return clonedScene
  }, [scene])

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={model} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]} receiveShadow>
        <meshStandardMaterial color="#f5f5f5" />
      </mesh>
    </group>
  )
}

useGLTF.preload('/asap.glb')
