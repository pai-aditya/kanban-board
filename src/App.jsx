import './App.css';
import PriorityBoard from './components/Board/PriorityBoard';
import StatusBoard from './components/Board/StatusBoard';
import UserBoard from './components/Board/UserBoard';
import { useEffect,useState } from 'react';
const App = () => {
  const [data, setData] = useState(null);
  const [displayType, setDisplayType] = useState(localStorage.getItem('displayType') || 'user');
  const [sortType,setSortType] = useState(localStorage.getItem('sortType') || 'priority')

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

  useEffect(() => {
    localStorage.setItem('displayType', displayType);
  }, [displayType]);

  useEffect(() => {
    localStorage.setItem('sortType', sortType);
  }, [sortType]);


  
  const getTasksByDisplayType = () => {
    if (!data) {
      return [];
    }

    const sortTasks = (tasks) => {
      if (sortType === 'priority') {
        return tasks.sort((a, b) => b.priority - a.priority);
      } else if (sortType === 'title') {
        return tasks.sort((a, b) => a.title.localeCompare(b.title));
      } else {
        return tasks;
      }
    };

    if (displayType === 'user') {
      return data.users.map((user) => ({
        user,
        tasks: sortTasks(data.tickets.filter((ticket) => ticket.userId === user.id)),
      }));
    } else if (displayType === 'status') {
      return ['Todo', 'In progress', 'Backlog', 'Done', 'Cancelled'].map((status) => ({
        status,
        tasks: 
        sortTasks(
          data.tickets
            .filter((ticket) => ticket.status === status)
            .map((task) => ({
              ...task,
              user: data.users.find((user) => user.id === task.userId),
            }))
        ),
      }));
    } else if (displayType === 'priority') {
      return [0, 1, 2, 3, 4].map((priority) => ({
        priority,
        tasks: 
          sortTasks(
            data.tickets
              .filter((ticket) => ticket.priority === priority)
              .map((task) => ({
                ...task,
                user: data.users.find((user) => user.id === task.userId),
              }))
          ),
      }));
    } else {
      return [];
    }
  };



  const displayData = getTasksByDisplayType();

  const handleDisplayChange = (type) => {
    setDisplayType(type);
  }
  const handleSortChange = (sortType) => {
    setSortType(sortType);
  }
  

 return (
    <div className="app">
      <div className="app_nav">

      
        <div className='dropdown-container'>
          <label className='dropdown-label'>
            Grouping
            <select className='dropdown-select'  value={displayType} onChange={(e) => handleDisplayChange(e.target.value)}>
              <option className='dropdown-option' value="user">user</option>
              <option className='dropdown-option' value="status">status</option>
              <option className='dropdown-option' value="priority">priority</option>
            </select>
          </label>
        </div>
        <div className='dropdown-container'>
          <label className='dropdown-label'>
            Ordering
            <select className='dropdown-select'  value={sortType} onChange={(e) => handleSortChange(e.target.value)}>
              <option value="priority">priority</option>
              <option value="title">title</option>
            </select>
          </label>
        </div>
      
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