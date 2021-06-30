import "./Calculator.css"
import Info from "../Info"
import React, { useState } from 'react'
import { data } from "autoprefixer"



//function with API code
export default function Calculator() {
   /* ADDING STATE */
   const [equation, setEquation] = useState('')
   const [total, setTotal] = useState("")

   //API TO GRAB DATA FROM
   const numberInput={
      key: process.env.REACT_APP_CALCULATOR,
      URL:'http://api.mathjs.org/v4/',
      API: '/?expr='
   }


    function handleClick(event) {
       //HOW TO DISPLAY BUTTON INPUT
 console.log(event.target.innerText)
 setEquation(equation+event.target.innerText)
}

//clear button functions
 function handleClear(event){
   //console.log(event.target.innerText, "<====")
   setEquation('')
   setTotal('')
}

    
  
                               /* FETCH DATA */
  // API REQUESTS
const fetchData = () => {
    fetch("https://api.mathjs.org/v4/?expr="+encodeURIComponent(equation))
         .then((response) => response.json())
         .then((data) => setTotal(data));}
          
   return(
      <div className="CalcBoard">
         {/* equation display */}
    <div className='display'>
   {equation}
   {/* solved equation display */}
   <div className='total'>
   {total}
  </div>
   </div>


       <div className='row'> 
        <button onClick={handleClear}>Clear</button>
        <button >+/-</button>
        <button onClick={handleClick}>%</button>
        <button onClick={handleClick}>/</button>

        <button onClick={handleClick} >7</button>
        <button onClick={handleClick}>8</button>
        <button onClick={handleClick}>9</button>
        <button onClick={handleClick}>*</button>
       
        <button onClick={handleClick}>4</button>
        <button onClick={handleClick}>5</button>
        <button onClick={handleClick}>6</button>
        <button onClick={handleClick}>-</button>
       
        <button onClick={handleClick}>1</button>
        <button onClick={handleClick}>2</button>
        <button onClick={handleClick}>3</button>
        <button onClick={handleClick}>+</button> 
     
        <button onClick={handleClick}>0</button>
        <button  onClick={handleClick}>.</button>
        <button className='equals' onClick={fetchData}>=</button> 
     </div>

 </div>  
    )
  }

