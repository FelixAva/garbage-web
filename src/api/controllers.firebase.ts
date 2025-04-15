import { ref, onValue, update } from "firebase/database";
import { database } from "./firebase-manager";
import { Controller } from "@/interfaces/firebase.interface";

const subscribeToControllers =  ( setControllers: (data: any) => void ) => {
  try {
    const myReference = ref(database, 'controllers');

    onValue(myReference, (snapshot) => {
      const data = snapshot.val();
      const ctrlsList: Controller[] = [];

      if (!data) {
        console.log(`Empty references controllers`);
      }

      // Convert the controller data to list of controllers
      for (let ctrl in data) {
        const controller = {
          id: ctrl,
          ...data[ctrl]
        };

        ctrlsList.push(controller);
      }

      setControllers(ctrlsList);
    }, {
      onlyOnce: false
    });
  } catch (err) {
    console.error(`Error subscribing to controllers: `, err);
  }
};

const updateControllerState = async ( controller: string, newState: boolean ) => {
  const controllerPath = `controllers/${controller}/is_active`;
  const updates: Record<string, boolean> = {};
  updates[controllerPath] = newState;

  try {
    await update(ref(database), updates);
    alert(`Status de ${controller} actualizado a ${newState}`)
  } catch (err) {
    console.error(`Error updating the status: ${ err }`)
  }
}

export {
  subscribeToControllers,
  updateControllerState
}
