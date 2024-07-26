
import './App.css';
import Counter, {CounterProvider} from './components/Counter';



function App() {
  return (
    <div className="App">
      <CounterProvider>
      <Counter />
    </CounterProvider>
    </div>
  );
}

export default App;
