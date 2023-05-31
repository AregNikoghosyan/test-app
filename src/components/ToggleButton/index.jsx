import React, { useContext } from 'react';
import { NightModeContext } from '../NightMode';

const ToggleButton = () => {
  const { isNightMode, toggleNightMode } = useContext(NightModeContext);

  return (
    <button onClick={toggleNightMode}>
      {isNightMode ? 'Disable Night Mode' : 'Enable Night Mode'}
    </button>
  );
};

export default ToggleButton;