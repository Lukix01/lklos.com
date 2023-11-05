import Header from './Header';
import Buttons from './buttons/Index';

export default function Home(): JSX.Element {
  return (
    <div className="m-auto">
      <Header />
      <Buttons />
    </div>
  );
}
