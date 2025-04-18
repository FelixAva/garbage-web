import { Category, Position } from '@/interfaces/firebase.interface';

interface Props {
  position: Position;
  index: number;
}

const PositionCard = ( { position }: Props ) => {
  return (
    <div className="border-2 rounded-md w-md h-36">
      <p>{ position.id }</p>
      <ul>
        {
          position.categories.map( (category: Category, index: number ) => (
            <li key={ index }>
              <p>
                { category.name }: <span>{ category.counter }</span>
              </p>
            </li>
          ))
        }
      </ul>
      <p>{ position.joint_angles }</p>
      <p>{ position.last_updated.toString() }</p>
    </div>
  );
};

export default PositionCard;
