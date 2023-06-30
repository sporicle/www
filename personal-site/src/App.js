// App.js

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Writings from './Writings';

const App = () => {
  const terminalStyle = {
    backgroundColor: 'black',
    color: 'lime',
    fontFamily: 'monospace',
    height: '100vh',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    listStyle: 'none',
    marginBottom: '2rem',
    alignSelf: 'start',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'lime',
    paddingRight: '3em',
  };

  return (
    <Router>
      <div style={terminalStyle}>
        <nav>
          <ul style={navStyle}>
            <li><Link to="/" style={linkStyle}>Home</Link></li>
            <li><Link to="/writings" style={linkStyle}>Writings</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/writings" element={<Writings />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
