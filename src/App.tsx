import { useEffect, useState } from 'react';
import WebcamComponent from '@/components/WebcamComponent';

import useControllers from '@/hooks/useControllers';
import ControllerCard from '@/components/ControllerCard';
import { Controller } from '@/interfaces/firebase.interface';
import { updateControllerState } from '@/api/controllers.firebase';

import usePositions from '@/hooks/usePositions';
import PositionCard from '@/components/PositionCard';
import { Position } from '@/interfaces/firebase.interface';

import '@/styles/app.css';

function App() {
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

  const onPress = (index: number) => {
    if (controllers) updateControllerState(controllers[index].id, !controllers[index].isActive);
  };

  return (
    <div>
      <WebcamComponent />

      <div className="justify-center mt-4 mb-4 flex gap-2">
        {positions && positions.map( ( pos: Position, index: number ) => (
          <PositionCard
            position={ pos }
            index={ index }
          />
        ))}
      </div>

      <div className="justify-center mt-4 mb-4 flex gap-2">
        {
          controllers?.map(( ctrl: Controller, index: number ) => (
            <ControllerCard
              key={ index }
              index={ index }
              controller={ ctrl }
              onPress={ onPress }
            />
          ))
        }
      </div>
    </div>
  )
}

export default App;
