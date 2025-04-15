import { useState } from 'react';
import { subscribeToPositions } from '@/api/positions.firebase';
import { Position } from '@/interfaces/firebase.interface';

const usePositions = () => {
  const [positions, setPositions] = useState<Position[]>();

  function setData() {

  }

  const positionsSubscription = () => {
    subscribeToPositions(setPositions);
  };

  return {
    positions,
    positionsSubscription
  }
};

export default usePositions;
