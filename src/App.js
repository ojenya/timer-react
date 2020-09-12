import React,{useState,useEffect} from 'react';
import './App.css';
const newYears = "1 Jan 2021";


function App() {

  // const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  const [days,setDays] = useState(0)
  const [hours,setHours] = useState(0)
  const [mins,setMins] = useState(0)
  const [seconds,setSeconds] = useState(0)

  const newYearsDate = new Date(newYears);
  const currentDate = new Date();
  const totalSeconds = (newYearsDate - currentDate) / 1000;
 
useEffect(()=>{
  setTimeout(() => {
    setDays(Math.floor(totalSeconds / 3600 / 24))
    setHours(Math.floor(totalSeconds / 3600) % 24)
    setMins(Math.floor(totalSeconds / 60) % 60)
    setSeconds(Math.floor(totalSeconds) % 60)
  }, 1000);
});



  return (
    <div className="App">

      <div className="container">

     
  <h1>Новый <span className="year">{currentDate.getFullYear()+1}</span> год через:</h1>

      <div class="countdown-container">
          <div class="countdown-el days-c">
             <p class="big-text" id="days">{totalSeconds >0?days:0}</p>
              <span>дней</span>
          </div>

          <div class="countdown-el hours-c">
            <p class="big-text" id="hours">{totalSeconds >0?hours:0}</p>
              <span>часов</span>
          </div>

          <div class="countdown-el mins-c">
            <p class="big-text" id="mins">{totalSeconds >0?mins:0}</p>
              <span>минут</span>
          </div>

          <div class="countdown-el seconds-c">
            <p class="big-text" id="seconds">{totalSeconds >0?seconds:0}</p>
              <span>секунд</span>
          </div>
      </div>
      </div>
    </div>
  );
}

export default App;
