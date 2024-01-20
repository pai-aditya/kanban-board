import './Board.css';
import UserCard from '../Card/UserCard';
import { MoreHorizontal , Plus, Circle, XCircle, CircleEllipsis, PauseCircle} from 'lucide-react';

const UserBoard = ({data}) => {
    return (
        <div className="board">
            <div className="board_header">
                
                <p className="board_header_title">
                {/* <CircleEllipsis className='task-icon'/> */}
                <img className='task-icon' src={`https://ui-avatars.com/api/?name=${data.user.name}&background=random`} alt='' width={25}/>
                {data?.user.name}
                    <span>{data?.tasks?.length || 0}</span>
                </p>
                <div
                    className="board_header_title_more"
                >
                    <Plus className='plus'/>
                    <MoreHorizontal className='more-horizontal'/>
                </div>
            </div>
            
            <div className="board_cards custom-scroll">
            {data?.tasks?.map((item) => (
                <UserCard
                    card={item}
                />
                ))}
            </div>
        </div>
      );
}

export default UserBoard;