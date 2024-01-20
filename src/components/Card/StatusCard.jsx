import './Card.css';
import { statusIconShow } from '../Board/StatusBoard';
import { priorityIconShow } from '../Board/PriorityBoard';

const StatusCard = ({card}) => {
  return (
    <div className="task-card">
      <div className="task-id">{card.id}</div>
      <div className="task-title">{card.title}</div>
      <div className="task-tags">
        <ul>
          {card.tag.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
      <img className='user-icon' src={`https://ui-avatars.com/api/?name=${card?.user?.name}&background=random`} alt='' width={25}/>
      
      <div className='user-icon-2'>
      {priorityIconShow(card.priority)}
      </div>
    </div>
  );
};

export default StatusCard;
