import { Center, Text3D } from '@react-three/drei';

export default function Header(): JSX.Element {
  const font = '/jumbalo-font.json';

  return (
    <>
      <Center rotation={[ -0.3, 0.3, 0 ]}>
        <Text3D font={font} bevelEnabled bevelSize={0.02} bevelThickness={0.2} size={0.5} position={[ 0, 1.1, 0 ]}>
          Hi, I am
          <meshStandardMaterial color='#155e75' transparent />
        </Text3D>
        <Text3D font={font} bevelEnabled bevelSize={0.03} bevelThickness={0.2} letterSpacing={-0.08}>
          Lukasz
          <meshStandardMaterial color='#0891b2' transparent />
        </Text3D>
      </Center>
    </>
  );
}
