import './Board.css';
import PriorityCard from '../Card/PriorityCard';
import { MoreHorizontal , Plus, Circle, XCircle, CircleEllipsis, PauseCircle} from 'lucide-react';

export const priorityIconShow = (priority) => {
    if(priority===0){
        return <img src="../../icon-no-priority.png" alt="alttext"/>;
    }else if(priority===1){
        return <img src="../../icon-low-priority.png" alt="alttext"/>;
    }else if(priority===2){
        return <img src="../../icon-medium-priority.png" alt="alttext"/>;
    }else if(priority===3){
        return <img src="../../icon-high-priority.png" alt="alttext"/>;
    }else{
        return <img src="../../icon-urgent-priority.png" alt="alttext" width={30}/>;
    }
}
const PriorityBoard = ({data}) => {

    const priorityString = (priority) => {
        if(priority===0){
            return "No priority";
        }else if(priority===1){
            return "Low";
        }else if(priority===2){
            return "Medium";
        }else if(priority===3){
            return "High";
        }else{
            return "Urgent";
        }
    }
    
    return (
        <div className="board">
            <div className="board_header">
                
                <p className="board_header_title">
                {priorityIconShow(data.priority)}
                {priorityString(data?.priority)}
                    <span>{data?.tasks?.length || 0}</span>
                </p>
                <div
                    className="board_header_title_more"
                >
                    <Plus className='plus'/>
                    <MoreHorizontal className='more-horizontal'/>
                </div>
            </div>
            
            <div className="board_cards">
            {data?.tasks?.map((item) => (
                <PriorityCard
                    card={item}
                />
                ))}
            </div>
        </div>
      );
}

export default PriorityBoard;