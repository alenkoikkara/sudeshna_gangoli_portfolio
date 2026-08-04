import { useRef, useMemo, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import * as THREE from 'three'

export default function AsapModel({ hover = false, isVisible = true, ...props }) {
  const group = useRef()
  const hasInitialized = useRef(false)
  const { scene } = useGLTF('/asap.glb')

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.45) * 0.12
    }
  })

  useEffect(() => {
    if (!group.current) return

    const targetScale = hover ? 1.08 : isVisible ? 1 : 0.94
    const targetY = hover ? 0.02 : isVisible ? 0 : 0.16
    const targetX = isVisible ? 0 : -0.45
    const startX = isVisible ? 0.45 : 0
    const startY = isVisible ? 0.12 : 0.16

    if (!hasInitialized.current) {
      gsap.set(group.current.scale, { x: 0.94, y: 0.94, z: 0.94 })
      gsap.set(group.current.position, { x: startX, y: startY })
      hasInitialized.current = true
    }

    gsap.fromTo(group.current.scale,
      {
        x: hover ? 1.04 : isVisible ? 0.92 : 0.94,
        y: hover ? 1.04 : isVisible ? 0.92 : 0.94,
        z: hover ? 1.04 : isVisible ? 0.92 : 0.94,
      },
      {
        x: targetScale,
        y: targetScale,
        z: targetScale,
        duration: 0.55,
        ease: 'power2.inOut',
        overwrite: 'auto'
      }
    )

    gsap.fromTo(group.current.position,
      {
        x: startX,
        y: startY,
      },
      {
        x: targetX,
        y: targetY,
        duration: 0.55,
        ease: 'power2.inOut',
        overwrite: 'auto'
      }
    )
  }, [hover, isVisible])

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
