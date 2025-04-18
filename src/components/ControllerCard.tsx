import { Controller } from "@/interfaces/firebase.interface";

interface Props {
  controller: Controller;
  index: number;
  onPress: (index: number) => void;
}

const ControllerCard = ({ controller, onPress, index }: Props) => {
  return (
    <div className="border-2 rounded-md w-md h-36">
      <p>{ controller.id }</p>
      <p>Status: { controller.isActive ? "On" : "Off" }</p>
      <p>{ controller.name }</p>
      <button
        onClick={ () => onPress(index)}
        className="w-40 h-16 border-2 border-black rounded-4xl cursor-pointer"
      >On/Off</button>
    </div>
  );
};

export default ControllerCard;
