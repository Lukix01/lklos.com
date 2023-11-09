import Button from './Button';

export default function Buttons(): JSX.Element {
  return (
    <div className='mt-4 flex space-x-4'>
      <Button name="Github" href="https://github.com/Lukix01"/>
      <Button name="Twitter" href="https://twitter.com/lklos01"/>
      <Button name="Email" href="mailto:e@lklos.com"/>
    </div>
  );
}
