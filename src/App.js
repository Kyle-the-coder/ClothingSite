import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ClNavbar from './components/ClNavbar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ClNavbar/>}/>
      </Routes>
    </div>
  );
}

export default App;
