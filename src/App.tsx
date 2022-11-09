import React from 'react';
import { useState } from 'react';

const App = () => {

  const [stack, setStack] = useState(100)
  const [betSize, setBetSize] = useState(0)
  const [pot, setPot] = useState(0)


  const handleBetSize = (e: any) => {
    e.preventDefault()
    setBetSize(e.target.value)
  }
  
  const handleBet = (e: any) => {
    e.preventDefault()
    console.log(typeof pot)
    let updatePot = pot + betSize
    setPot(updatePot)
    setStack(stack - betSize)
  }

  return (
    <div className="App">
      <div>
        pot { pot }
      </div>
      <div>
        player { stack }
      </div>
      <div>
        bet size: <input value={ betSize } onChange={ handleBetSize }/>
        <button type="submit" onClick={ handleBet }>bet</button>
      </div>
    </div>
  );
}

export default App;
