import { Controller } from "@/interfaces/firebase.interface";

const ControllerCard = ({ id, isActive,name }: Controller) => {
  console.log(isActive)
  return (
    <div className="border-2 rounded-md w-md h-36">
      <p>{ id }</p>
      <p>Status: { isActive ? "On" : "Off" }</p>
      <p>{ name }</p>
    </div>
  );
};

export default ControllerCard;
