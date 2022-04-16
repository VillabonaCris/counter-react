import './App.css';
import Button from './components/Button';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {
  const [numClick, setNumClick] = useState(0);

  const handleClick = () => {
    setNumClick(numClick + 1);
  }
  const resetClick = () => {
    setNumClick(0);
  }

  return (
    <div className="App">
      <h1>Contador de clicks</h1>
      <section className='principal-container'>
        <Contador numClick={numClick} />
        <div className='button-container'>
          <Button  
            text='Click'
            isButtonClick={true}
            handleClick={handleClick} />
          <Button  
            text='Reset'
            isButtonClick={false}
            handleClick={resetClick} />
      </div>
      </section>
    </div>
  );
}

export default App;
