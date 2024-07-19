import './App.css';
import UsernameInput from './components/UsernameInput';
import Counter from './components/Counter';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
     <UsernameInput/> 
     <Counter/>
     <UserList/>
    </div>
  );
}

export default App;
