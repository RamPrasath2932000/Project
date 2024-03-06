import React, { useState } from 'react';

function ToggleButton() {
  // State to hold the toggle state
  const [isOn, setIsOn] = useState(false);

  // Event handler to toggle the state
  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <h1>Toggle Button Example</h1>
      <button onClick={handleToggle}>
        {isOn ? 'Turn Off' : 'Turn On'}
      </button>
      <p>Status: {isOn ? 'On' : 'Off'}</p>
    </div>
  );
}

export default ToggleButton;