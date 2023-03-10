/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 scene.gltf
Author: DM_Thakur (https://sketchfab.com/DM_Thakur)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/lightening-3da1496dec57499c893cc9073374af19
Title: lightening
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.material_0} rotation={[-1.57, 0, 0]} />
      <mesh geometry={nodes.Object_6.geometry} material={materials['Material.001']} position={[0, 0, 4.23]} />
    </group>
  )
}

useGLTF.preload('/scene.gltf')
