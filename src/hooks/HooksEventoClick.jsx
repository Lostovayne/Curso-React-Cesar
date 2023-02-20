import { Link } from 'react-router-dom';

const HooksEventoClick = () => {
  const handleClick = () => {
    console.log('click');
  };

  return (
    <>
      <Link to='/hooks'> Hooks </Link>
      <h3>Click</h3>
      <button onClick={handleClick}>Click me</button>
    </>
  );
};
export default HooksEventoClick;
