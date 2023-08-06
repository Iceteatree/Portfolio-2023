'useClient';

import Experience from '@/components/Experience';
import Interface from '@/components/Interface';
import { Scroll, ScrollControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

function AvatarPage() {
  return (
    <Canvas style={{ width: '100vm', height: '100vh' }}>
      <pointLight position={[10, 10, 10]} />
      <camera position={[0, 2, 5]} />
      <ScrollControls pages={4} damping={0.1}>
        <Experience />
        <Scroll html>
          <Interface />
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

export default AvatarPage;
