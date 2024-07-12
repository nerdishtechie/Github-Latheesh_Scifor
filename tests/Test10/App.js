import React from 'react';
import './App.css';
import PersonDetails from './components/PersonDetails';
import ClassComponent from './components/ClassComponent';


function App() {
  return (
    <div className="App">
      <PersonDetails name='Latheesh Shaik' age= '34' mobile='9878675453' email='abc@gmail.com' city='Los Angeles'   />
      <ClassComponent />
      
    </div>
  );
}

export default App;
