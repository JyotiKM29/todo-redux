import { useDispatch ,useSelector } from 'react-redux';
import './App.css';
import { fetchUsers } from './redux/Slices/users';

function App() {
  const dispatch = useDispatch();
  const state = useSelector( state => state);

if(state.users.isLoading){
  return <h1>Loading.....</h1>
}

  return (
    <div className="App">
      <header className="App-header">
       <button 
       onClick ={
        (e) => dispatch(fetchUsers())
       }
       >
       Fetch User Name
       </button>
       {
        state.users.data && state.users.data.map(
            (e) =>{
              <li>{e.name}</li>
            }
          )
        }
      </header>
    </div>
  );
}

export default App;
