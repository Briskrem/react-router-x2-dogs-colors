import { BrowserRouter } from 'react-router-dom';
import {MainRoutes} from './MainRoutes'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
