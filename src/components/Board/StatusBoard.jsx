import './Board.css';
import { MoreHorizontal , Plus, Circle, XCircle, CircleEllipsis, PauseCircle} from 'lucide-react';
const StatusBoard = ({data}) => {
    return (
        <div className="board">
            <div className="board_header">
                
                <p className="board_header_title">
                <CircleEllipsis className='task-icon'/>
                    {data?.status}
                    <span>{data?.tasks?.length || 0}</span>
                </p>
                <div
                    className="board_header_title_more"
                    //   onClick={() => setShowDropdown(true)} 
                >
                    <Plus className='plus'/>
                    <MoreHorizontal className='more-horizontal'/>

                    {/* {showDropdown && (
                        <Dropdown
                        class="board_dropdown"
                        onClose={() => setShowDropdown(false)}
                        >
                        <p onClick={() => props.removeBoard()}>Delete Board</p>
                        </Dropdown>
                    )} */}
                </div>
            </div>
            
            <div className="board_cards custom-scroll">
                {data?.tasks?.map((item) => (
                <StatusCard
                    key={item.id}
                    card={item}
                    boardId={props.board.id}
                    removeCard={props.removeCard}
                    dragEntered={props.dragEntered}
                    dragEnded={props.dragEnded}
                    updateCard={props.updateCard}
                />
                ))}
                {/* <Editable
                text="+ Add Card"
                placeholder="Enter Card Title"
                displayClass="board_add-card"
                editClass="board_add-card_edit"
                onSubmit={(value) => props.addCard(props.board?.id, value)}
                /> */}
                <h1>Card1</h1>
                <h1>Card1</h1>
                <h1>Card1</h1>
                <h1>Card1</h1>
            </div>
        </div>
      );
}

export default StatusBoard;