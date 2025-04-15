import { useEffect, useState } from 'react';
import useControllers from '@/hooks/useControllers';
import ControllerCard from '@/components/ControllerCard';
import { Controller } from '@/interfaces/firebase.interface';

function App() {
  const [isActive, setIsActive] = useState<boolean>(false);

  // const {
  //   positions,
  //   positionsSubscription
  // } = usePositions();

  const {
    controllers,
    controllersSubscription
  } = useControllers();

  useEffect(() => {
    // positionsSubscription();
    controllersSubscription();
  }, []);

  const onPress = () => {
    setIsActive(!isActive);
  };

  return (
    <>
    {/* {
      positions?.map(( ctrl: Position, indx: number ) => (
        <h1 key={indx} style={{fontSize: 20, color: 'black'}}>
          {ctrl.id}
        </h1>
      ))
    } */}
    {
      controllers?.map(( ctrl: Controller, indx: number ) => (
        <ControllerCard key={indx} {...ctrl}/>
      ))
    }
      <button onClick={ () => onPress() }> On/Off </button>
    </>
  )
}

export default App;
