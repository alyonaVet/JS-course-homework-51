import './App.css';
import  {useState} from 'react';
import Ball from './components/Ball/Ball';
import Button from './components/Button/Button';
import getRandomNumber from './numbers';

const App = () => {
  const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

  const getNewNumbers = () => {
    setNumbers(getRandomNumber(5, 36, 5));
  };

  return (
    <>
      <Button onClick={getNewNumbers} type="button" className="btn">New numbers</Button>
        {numbers.map((number, index) => {
            return <Ball key={index} value={number}/>;
        })}
    </>
  );
};

export default App;
