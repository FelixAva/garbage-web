import { useEffect, useState } from 'react';
import useControllers from '@/hooks/useControllers';
import ControllerCard from '@/components/ControllerCard';
import { Controller } from '@/interfaces/firebase.interface';
import { updateControllerState } from './api/controllers.firebase';
import '@/styles/app.css';

function App() {
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
    if (controllers) updateControllerState(controllers[0].id, !controllers[0].isActive);
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
    <div className="justify-center mt-4 mb-4 flex gap-2">
      {
        controllers?.map(( ctrl: Controller, indx: number ) => (
          <ControllerCard key={indx} {...ctrl}/>
        ))
      }
    </div>
      <button onClick={ () => onPress() }> On/Off </button>
    </>
  )
}

export default App;
