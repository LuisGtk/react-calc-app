import { Route, Link, Switch } from 'react-router-dom'
import Calculator from './components/Calculator/Calculator';
import React from 'react'
import Info from './components/Info';
import './App.css';

function App() {
  return (
    <div>
      <nav>
        <Link to='/'>
          <h1>Welcome to Luis's Calculator App</h1>
        </Link>
        <main className='buttons'>
          {/* Making the open calculator button into a link */}
          <Link to="/Calculator">
            <button id='OpenCalc'>Press to open the calculator !</button>
          </Link>

          <Link to="number-facts" >
            <button id="mathInfo">Click for some facts</button>
          </Link>
        </main>
      </nav>
      {/* component will only render the first route that matches/includes the path */}
      <Switch>
        <Route path="/Calculator" component={Calculator} />
        <Route path="/number-facts" component={Info} />
      </Switch>
    </div>
  );
}
export default App;
