import { Route, Link, Switch } from 'react-router-dom'
import Calculator from './components/Calculator/Calculator';
import React,{ useState, useEffect} from 'react'
import Info from './components/Info';

import './App.css';


function App() {
       
// HOME PAGE
  return (
 <div> 
    <h1>Welcome to Luis's Calculator App</h1>
    <p>Whether you want to know some weird facts or just want to calculate some stuff, this is the perfect place for you.</p>
    <label for="Budget">Budget Tracker</label>
    <input id="Budget" type="text" placeholder="Amount" autofocus required></input>
    <button id ="Submit">submit</button>
  <nav>
    <main>
{/* Making the open calculator button into a link */}
{/* <Switch> */}
 <Link to ="/Calculator">
   <button id='OpenCalc'>Open Calculator</button>
 </Link>  

<Link to="Info" >
  <button id="mathInfo">Learn More</button>
</Link>
<Route path="/Calculator" component={Calculator} />
<Route path="/Info" component={Info} />
{/* </Switch> */}
    </main>
  </nav>
</div>

  );
}

export default App;
