import { useEffect, useState } from 'react';
import usePositions from '@/hooks/usePositions';
import useControllers from '@/hooks/useControllers';
import { Controller, Position } from '@/interfaces/firebase.interface';

function App() {
  const [isActive, setIsActive] = useState<boolean>(false);

  const {
    positions,
    positionsSubscription
  } = usePositions();

  const {
    controllers,
    controllersSubscription
  } = useControllers();

  useEffect(() => {
    positionsSubscription();
    controllersSubscription();
  }, []);

  const onPress = () => {
    setIsActive(!isActive);
  };

  return (
    <>
    {
      positions?.map(( ctrl: Position, indx: number ) => (
        <h1 key={indx} style={{fontSize: 20, color: 'black'}}>
          {ctrl.id}
        </h1>
      ))
    }
    {
      controllers?.map(( ctrl: Controller, indx: number ) => (
        <h1 key={indx} style={{fontSize: 20, color: 'black'}}>
          {ctrl.id}
        </h1>
      ))
    }
      <button onClick={ () => onPress() }> On/Off </button>
    </>
  )
}

export default App;
