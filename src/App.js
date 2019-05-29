import React from 'react';
import {Link} from 'react-router-dom'
import routes from './routes'
import './App.css';

function App() {
  return (
    <div className="App">
      <Link className='link' to='/'><h2 style={{marginTop: '0'}}>Home</h2></Link>
      {routes}
    </div>
  );
}

export default App;
