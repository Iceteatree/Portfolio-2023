import { OrbitControls } from '@react-three/drei';
import { extend } from '@react-three/fiber';
import AvatarModel from '../Avatar';

extend({ OrbitControls });

function Experience() {
  return (
    <>
      <OrbitControls />
      <group position-y={-1}>
        <AvatarModel />
      </group>
    </>
  );
}

export default Experience;
