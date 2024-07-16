import React from 'react';
import './App.css';
import ClassProps from './components/ClassProps';
import StateManagement from './components/StateManagement';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
     <ClassProps name='Latheesh Shaik' age='34' country='India' state='Andhra Pradesh'       />
     <StateManagement/>
     <Counter/>
    </div>
    
  );
}

export default App;
