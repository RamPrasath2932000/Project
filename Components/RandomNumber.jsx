import React, { useState } from 'react';

function RandomNumber() {
  const [randomNumber, setrandomNumber] = useState(null);

  const handleGenerate = () => {
    const newrandomNumber = Math.floor(Math.random()*10000);
    setrandomNumber(newrandomNumber);
  };

  return (
    <div>
      <h1>Random Number Generator Example</h1>
      <button onClick={handleGenerate}>Generate Random Number</button>
      {randomNumber !== null && <p>Random Number: {randomNumber}</p>}
    </div>
  );
}

export default RandomNumber;