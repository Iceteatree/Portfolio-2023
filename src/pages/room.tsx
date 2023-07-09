'useClient';

import RoomExperience from '@/components/RoomExperience';
import { Canvas } from '@react-three/fiber';

function RoomPage() {
  return (
    <Canvas style={{ width: '100vm', height: '100vh' }}>
      <ambientLight intensity={1} />
      <camera position={[0, 2, 5]} />
      <RoomExperience />
    </Canvas>
  );
}

export default RoomPage;
