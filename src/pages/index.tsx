import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import Header from '../components/home/Header';

export default function Home(): JSX.Element {
  return (
    <div className='h-screen'>
      <Canvas orthographic camera={{ position: [ 0, 0, 100 ], zoom: 100 }}>
        <Header />
        <Environment preset='studio'/>
      </Canvas>
    </div>
  );
}
