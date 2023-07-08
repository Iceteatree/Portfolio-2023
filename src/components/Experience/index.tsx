import {
  ContactShadows, Environment, OrbitControls, Sky, Sparkles, Stars,
} from '@react-three/drei';
import { extend } from '@react-three/fiber';
import { useControls } from 'leva';
import AvatarModel from '../Avatar';

extend({ OrbitControls });

function Experience() {
  const { animation }:any = useControls({
    animation: {
      value: 'Typing',
      options: ['Typing', 'Falling', 'Standing'],
    },
  });
  return (
    <>
      <OrbitControls />
      <Sky />
      <Sparkles />
      <Stars />

      <Environment preset="sunset" />
      <group position-y={-1}>
        <ContactShadows opacity={0.38} scale={10} blur={1} far={10} resolution={256} color="#000000" />
        <AvatarModel animation={animation} />
        {
          animation === 'Typing' && (
            <>
              <mesh
                scale={[0.8, 0.5, 0.8]}
                position-y={0.2}
                position-z={-0.07}
              >
                <boxGeometry />
                <meshStandardMaterial color="white" />
              </mesh>
              <mesh
                scale={5}
                rotation-x={-Math.PI * 0.5}
                position-y={-0.02}
              >
                <planeGeometry />
                <meshStandardMaterial color="white" />
              </mesh>
            </>
          )
        }
      </group>
    </>
  );
}

export default Experience;
