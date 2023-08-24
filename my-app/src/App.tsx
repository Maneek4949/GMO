import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Form from './components/FirstPage';
import SecondPage from './components/SecondPage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Form} />
        <Route path="/first-page" Component={Form} />
        <Route path="/second-page" Component={SecondPage} />
      </Routes>
    </Router>
  );
};

export default App;