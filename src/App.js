import logo from './logo.svg';
import './App.css';

import {Outlet,Link } from "react-router-dom";

function App() {
  return (
    <div> 
      <header>
        <nav>
          <ul>
          <li>
              <Link to="https://github.com/VERO0516/Weather">github</Link>
            </li>
            <li>
              <Link to="/">weather</Link>
            </li>
            <li>
              <Link to="/time">time</Link>
            </li>
          </ul>
        </nav>
      </header>

     <main className="App-main">
        <Outlet />
      </main>
  </div>

  );
}

export default App;
