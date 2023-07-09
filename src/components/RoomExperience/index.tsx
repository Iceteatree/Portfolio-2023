import {
  OrbitControls, Sky, Stars,
} from '@react-three/drei';
import { extend } from '@react-three/fiber';
import Room from '../Room';

extend({ OrbitControls });

function RoomExperience() {
  return (
    <>
      <OrbitControls />
      <Sky />
      <Stars />
      <Room />
    </>
  );
}

export default RoomExperience;
