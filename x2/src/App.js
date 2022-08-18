import {BrowserRouter} from 'react-router-dom'
import {MainRoute} from './MainRoute'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainRoute />
      </BrowserRouter> 
    </div>
  );
}

export default App;
