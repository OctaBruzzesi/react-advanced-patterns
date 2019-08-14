import { useState } from 'react';

const useToggle = (initialValue) => {
  const [toggleOn, toggleSwitch] = useState(initialValue);

  const handleToggle = () => {
    toggleSwitch(!toggleOn);
  }

  return [toggleOn, handleToggle];
}

export default useToggle;