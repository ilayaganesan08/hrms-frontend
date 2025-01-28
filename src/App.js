
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './components/shared/menu';

function App() {
  return (
    <>
      <Router>
        <Menu />
      </Router>
    </>
  );
}

export default App;
