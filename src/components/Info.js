import { useEffect, useState } from "react"
import "./Info.css"

export default function Info() {

  const [num, setNum] = useState(Math.floor(Math.random() * 30))
  const [randomFact, setRandomFact] = useState('')

  const callApi = () => {
    //grabbing data from url using num component from array  from second useState 
    //above
    fetch(`http://numbersapi.com/${num}`)
      .then(res => res.text())
      .then(data => setRandomFact(data))
  }
  useEffect(() => {
    callApi()
  }, [num])

  //incrementing the number of facts by one after each click
  const handleClick = () => {
    setNum(num => num + 1)
  }
  //console.log(num)
  return (
    <>
      <h1>Get your random number generated facts here</h1>
      <button className="facts" onClick={handleClick}>Click for another fun fact</button>
      {/* randomFact variable being called */}
      <p> {randomFact}</p>
    </>
  )
}