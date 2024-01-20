import './Board.css';
import { MoreHorizontal , Plus, Circle, XCircle, CircleEllipsis, PauseCircle} from 'lucide-react';
const PriorityBoard = ({displayType,data}) => {
    return (
        <div className="board">
            <div className="board_header">
                
                <p className="board_header_title">
                <CircleEllipsis className='task-icon'/>
                 TO DO
                <span>
                    2
                </span>
                </p>
                <div
                    className="board_header_title_more"
                >
                    <Plus className='plus'/>
                    <MoreHorizontal className='more-horizontal'/>
                </div>
            </div>
            
            <div className="board_cards custom-scroll">
                <h1>Card1</h1>
                <h1>Card1</h1>
                <h1>Card1</h1>
                <h1>Card1</h1>
            </div>
        </div>
      );
}

export default PriorityBoard;