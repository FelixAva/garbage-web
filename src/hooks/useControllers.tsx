import { useEffect, useState } from "react";
import { subscribeToControllers } from "@/api/controllers.firebase";
import { Controller } from "@/interfaces/firebase.interface";

const useControllers = () => {
  const [controllers, setControllers] = useState<Controller[]>();

  const controllersSubscription = async() => {
    subscribeToControllers(setControllers);
  }

  return {
    controllers,
    controllersSubscription,
  }
}

export default useControllers;
