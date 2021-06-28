export default function Homepage() {
    return(
        <div> 
        <h1>Welcome to Luis's Calculator App</h1>
        <p>If you like setting budgets and making sure you don't go over, then this is the app for you. New shoes for 35% off? Don't waste time doing math in your head; Simply press the " % " button before inputting your equation</p>
        <label for="Budget">Budget Tracker</label>
        <input id="Budget" type="text" placeholder="Amount" autofocus required></input>
        <button id ="Submit">submit</button>
        <button id='OpenCalc'>Open Calculator</button>
        </div>
       
    )
}