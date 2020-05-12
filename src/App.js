//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0); 
  const [awayScore, setAwayScore] = useState(0); 

  const homeGoal = event =>{
    setHomeScore(homeScore + 10)
  }

  const homeSnitch = event =>{
    setHomeScore(homeScore + 150)
  }

  const awayGoal = event =>{
    setAwayScore(awayScore+10)
  }

  const awaySnitch = event =>{
    setAwayScore(awayScore+150)
  }
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Gryff.</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">12:00</div>
          <div className="away">
            <h2 className="away__name">Slyth.</h2>
  <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick ={homeSnitch} className="homeButtons__touchdown">Home Snitch Caught</button>
          <button onClick = {homeGoal}className="homeButtons__fieldGoal">Home Quaffle Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={awaySnitch}className="awayButtons__touchdown">Away Snitch Caught</button>
          <button onClick={awayGoal}className="awayButtons__fieldGoal">Away Quaffle Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
