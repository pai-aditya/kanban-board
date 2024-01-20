import './Card.css'; 
import { statusIconShow } from '../Board/StatusBoard';
import { priorityIconShow } from '../Board/PriorityBoard';
const UserCard = ({card}) => {
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
      <div className='user-icon'>
        {statusIconShow(card.status)}
        
      </div>
      <div className='user-icon-2'>
      {priorityIconShow(card.priority)}
      </div>
    </div>
  );
};

export default UserCard;
