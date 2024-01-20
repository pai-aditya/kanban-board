import './App.css';
import PriorityBoard from './components/Board/PriorityBoard';
import StatusBoard from './components/Board/StatusBoard';
import UserBoard from './components/Board/UserBoard';
import { useEffect,useState } from 'react';
const App = () => {
  const [data, setData] = useState(null);
  const [displayType, setDisplayType] = useState('user');
  
  const FetchAPIData = async () => {
    try{
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
      });
      const data = await response.json();
      return data;
  } catch(error){
      console.log(error);
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try{
        const fetchedData = await FetchAPIData();
        setData(fetchedData);
      }catch(err){
        console.log(err);
      }
    };
    fetchData();
  },[]);

  const getTasksByDisplayType = () => {
    if (!data){
      return [];
    } 

    if(displayType==='user'){
      return data.users.map((user) => ({
        user,
        tasks: data.tickets.filter((ticket) => ticket.userId === user.id),
      }));
    }else if(displayType==='status'){
      return ['Todo', 'In progress', 'Backlog', 'Done', 'Cancelled'].map((status) => ({
        status,
        tasks: data.tickets
          .filter((ticket) => ticket.status === status)
          .map((task) => ({
            ...task,
            user: data.users.find((user) => user.id===task.userId)
          }))
      }));
    }else if(displayType==='priority'){
      return [0, 1, 2, 3, 4].map((priority) => ({
        priority,
        tasks: data.tickets
          .filter((ticket) => ticket.priority === priority)
          .map((task) => ({
            ...task,
            user: data.users.find((user) => user.id === task.userId),
          })),
      }));
    }else{
      return [];
    }
  };

  const displayData = getTasksByDisplayType();

  const handleDisplayChange = (type) => {
    setDisplayType(type);
  }

 return (
    <div className="app">
      <div className="app_nav">
        <h1>Kanban Board</h1>
        <div>
          <label>
            Display by:
            <select value={displayType} onChange={(e) => handleDisplayChange(e.target.value)}>
              <option value="user">user</option>
              <option value="status">status</option>
              <option value="priority">priority</option>
            </select>
          </label>
        </div>
      
      </div>
      <div>
          {/* {JSON.stringify(displayData)} */}
      </div>
      <div className="app_boards_container">
        
        {displayType==='user' &&
          <div className="app_boards">
            {displayData.map((item) => (
                <UserBoard
                  data={item}
                />
              ))}
          </div>
        }
        
        {displayType==='status' &&
          <div className="app_boards">
            {displayData.map((item) => (
              <StatusBoard
                data={item}
              />
            ))}
          </div>
        }
        {displayType==='priority' &&
          <div className="app_boards">
            {displayData.map((item) => (
                <PriorityBoard
                  data={item}
                />
              ))}
          </div>
        }
      </div>
    </div>
  );
}

export default App;