import React from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';

function Room(props:any) {
  const { nodes } = useGLTF('models/room.gltf') as any;
  const texture = useTexture('textures/baked.jpg');
  texture.flipY = false;
  texture.encoding = THREE.sRGBEncoding;

  const textureMaterial = new THREE.MeshBasicMaterial({ map: texture });

  return (
    <group {...props} dispose={null}>
      <mesh name="FiddleleafFigPottedPlant" geometry={nodes.FiddleleafFigPottedPlant.geometry} material={textureMaterial} position={[1.591, -0.02, -1.616]} />
      <group name="WallPlant" position={[-2.491, 2.13, -0.852]} rotation={[-2.962, -0.871, 2.298]}>
        <mesh name="Node-Mesh" geometry={nodes['Node-Mesh'].geometry} material={textureMaterial} />
        <mesh name="Node-Mesh_1" geometry={nodes['Node-Mesh_1'].geometry} material={textureMaterial} />
      </group>
      <group name="FloorPlant" position={[-1.578, 0.539, 1.48]}>
        <mesh name="mesh1781696643" geometry={nodes.mesh1781696643.geometry} material={textureMaterial} />
        <mesh name="mesh1781696643_1" geometry={nodes.mesh1781696643_1.geometry} material={textureMaterial} />
        <mesh name="mesh1781696643_2" geometry={nodes.mesh1781696643_2.geometry} material={textureMaterial} />
      </group>
      <group name="Desk" position={[0.046, -0.01, -1.554]} rotation={[0, -1.571, 0]}>
        <mesh name="Cube001_Cube002_BlackCoatSteel" geometry={nodes.Cube001_Cube002_BlackCoatSteel.geometry} material={textureMaterial} />
        <mesh name="Cube001_Cube002_BlackCoatSteel_1" geometry={nodes.Cube001_Cube002_BlackCoatSteel_1.geometry} material={textureMaterial} />
        <mesh name="Cube001_Cube002_BlackCoatSteel_2" geometry={nodes.Cube001_Cube002_BlackCoatSteel_2.geometry} material={textureMaterial} />
        <mesh name="Cube001_Cube002_BlackCoatSteel_3" geometry={nodes.Cube001_Cube002_BlackCoatSteel_3.geometry} material={textureMaterial} />
        <mesh name="Cube001_Cube002_BlackCoatSteel_4" geometry={nodes.Cube001_Cube002_BlackCoatSteel_4.geometry} material={textureMaterial} />
      </group>
      <group name="Chair" position={[11.204, 0.281, -6.764]} rotation={[-3.131, 0.042, 3.121]}>
        <mesh name="Node-Mesh001" geometry={nodes['Node-Mesh001'].geometry} material={textureMaterial} />
        <mesh name="Node-Mesh001_1" geometry={nodes['Node-Mesh001_1'].geometry} material={textureMaterial} />
        <mesh name="Node-Mesh001_2" geometry={nodes['Node-Mesh001_2'].geometry} material={textureMaterial} />
        <mesh name="Node-Mesh001_3" geometry={nodes['Node-Mesh001_3'].geometry} material={textureMaterial} />
      </group>
      <mesh name="ComputerMouse" geometry={nodes.ComputerMouse.geometry} material={textureMaterial} position={[0.382, 0.881, -1.283]} rotation={[0, -0.521, 0]} />
      <mesh name="Keyboard" geometry={nodes.Keyboard.geometry} material={textureMaterial} position={[-0.055, 0.872, -1.326]} />
      <group name="Laptop" position={[0.782, 0.878, -0.405]} rotation={[-0.029, 0.695, -3.124]}>
        <mesh name="Box20255_1" geometry={nodes.Box20255_1.geometry} material={textureMaterial} />
        <mesh name="Box20255_1_1" geometry={nodes.Box20255_1_1.geometry} material={textureMaterial} />
        <mesh name="Box20255_1_2" geometry={nodes.Box20255_1_2.geometry} material={textureMaterial} />
      </group>
      <mesh name="Shelf" geometry={nodes.Shelf.geometry} material={textureMaterial} position={[-0.91, 1.823, -2.015]} />
      <group name="Pikachu" position={[-0.688, 2.13, -1.805]} rotation={[Math.PI, -0.263, Math.PI]}>
        <mesh name="mesh1465871970" geometry={nodes.mesh1465871970.geometry} material={textureMaterial} />
        <mesh name="mesh1465871970_1" geometry={nodes.mesh1465871970_1.geometry} material={textureMaterial} />
        <mesh name="mesh1465871970_2" geometry={nodes.mesh1465871970_2.geometry} material={textureMaterial} />
        <mesh name="mesh1465871970_3" geometry={nodes.mesh1465871970_3.geometry} material={textureMaterial} />
        <mesh name="mesh1465871970_4" geometry={nodes.mesh1465871970_4.geometry} material={textureMaterial} />
      </group>
      <mesh name="Doormat" geometry={nodes.Doormat.geometry} material={textureMaterial} position={[0.458, -0.041, 0.955]} rotation={[Math.PI, -1.557, Math.PI]} />
      <group name="Monkey" position={[-1.014, 1.983, -1.868]} rotation={[0, -1.548, 0]}>
        <mesh name="Monkey_01_Cube042_1" geometry={nodes.Monkey_01_Cube042_1.geometry} material={textureMaterial} />
        <mesh name="Monkey_01_Cube042_1_1" geometry={nodes.Monkey_01_Cube042_1_1.geometry} material={textureMaterial} />
        <mesh name="Monkey_01_Cube042_1_2" geometry={nodes.Monkey_01_Cube042_1_2.geometry} material={textureMaterial} />
      </group>
      <group name="Books" position={[-0.639, 0.901, -1.473]} rotation={[0, 0.731, 0]}>
        <mesh name="book3_Cube_1" geometry={nodes.book3_Cube_1.geometry} material={textureMaterial} />
        <mesh name="book3_Cube_1_1" geometry={nodes.book3_Cube_1_1.geometry} material={textureMaterial} />
        <mesh name="book3_Cube_1_2" geometry={nodes.book3_Cube_1_2.geometry} material={textureMaterial} />
        <mesh name="book3_Cube_1_3" geometry={nodes.book3_Cube_1_3.geometry} material={textureMaterial} />
        <mesh name="book3_Cube_1_4" geometry={nodes.book3_Cube_1_4.geometry} material={textureMaterial} />
        <mesh name="book3_Cube_1_5" geometry={nodes.book3_Cube_1_5.geometry} material={textureMaterial} />
      </group>
      <mesh name="Monitor" geometry={nodes.Monitor.geometry} material={textureMaterial} position={[-0.098, 0.882, -1.675]} rotation={[-Math.PI, 1.474, -Math.PI]} scale={0.011} />
      <mesh name="Plane_1" geometry={nodes.Plane_1.geometry} material={textureMaterial} />
      <mesh name="Plane_2" geometry={nodes.Plane_2.geometry} material={textureMaterial} />
      <mesh name="Plane_3" geometry={nodes.Plane_3.geometry} material={textureMaterial} />
      <mesh name="Plane_4" geometry={nodes.Plane_4.geometry} material={textureMaterial} />
    </group>
  );
}

useGLTF.preload('models/room.gltf');

export default Room;
