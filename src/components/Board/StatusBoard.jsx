import './Board.css';
import StatusCard from '../Card/StatusCard';
import { MoreHorizontal , Plus, Circle, XCircle, CircleEllipsis, PauseCircle, CheckCircle} from 'lucide-react';


export const statusIconShow = (status) => {
    if(status==="Todo"){
        return <Circle className='task-icon'/> ;
    }else if(status==="In progress"){
        return <CircleEllipsis className='task-icon'/> ;
    }else if(status==="Backlog"){
        return <PauseCircle className='task-icon'/> ;
    }else if(status==="Done"){
        return <CheckCircle className='task-icon'/> ;
    }else{
        return <XCircle className='task-icon'/> ;
    }
}
const StatusBoard = ({data}) => {

    
    return (
        <div className="board">
            <div className="board_header">
                
                <p className="board_header_title">
                
                {statusIconShow(data.status)}
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
                    card={item}
                />
                ))}
                {/* <Editable
                text="+ Add Card"
                placeholder="Enter Card Title"
                displayClass="board_add-card"
                editClass="board_add-card_edit"
                onSubmit={(value) => props.addCard(props.board?.id, value)}
                /> */}
            </div>
        </div>
      );
}

export default StatusBoard;