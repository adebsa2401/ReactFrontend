import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Greeting from './components/greeting';

function App() {
  return (
    <>
      <nav>
        <Link to="/greeting">greeting</Link>
      </nav>
      <Routes>
        <Route element={<Greeting />} path="/greeting" />
      </Routes>
    </>
  );
}

export default App;
