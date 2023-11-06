import Button from './Button';

export default function Buttons(): JSX.Element {
  return (
    <div className='mt-4 space-y-2'>
      <Button name="Projects" href="/projects"/>
      <Button name="Contact" href="/contact"/>
    </div>
  );
}
