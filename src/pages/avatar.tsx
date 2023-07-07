import Experience from '@/components/Experience';
import { Canvas } from '@react-three/fiber';

function AvatarPage() {
  return (
    <Canvas style={{ width: '100vm', height: '100vh' }}>
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} />
      <camera position={[0, 2, 5]} />
      <Experience />
    </Canvas>
  );
}

export default AvatarPage;
