import Button from './Button';

export default function Buttons(): JSX.Element {
  return (
    <div className='mt-4 space-y-2'>
      <Button name="Projects" href="/work"/>
      <Button name="Contact" href="/contact"/>
    </div>
  );
}
