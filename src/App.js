import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import AppAdsTxt from './AppAdsTxt';
import './App.css';
import logo from './logo.svg';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to /app-ads.txt immediately
    navigate('/app-ads.txt');
  }, [navigate]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app-ads.txt" element={<AppAdsTxt />} />
      </Routes>
    </Router>
  );
}

export default App;
