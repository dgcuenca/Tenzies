import { React, useState } from 'react'
import './App.css'
import Die from './components/Die.jsx'

function App() {
  const [dice, setDice] = useState(() => getDiceValues())

  function getDiceValues() {
    let diceValues = [];
    for (let i = 0; i <= 9; i++) {
      diceValues.push(Math.ceil(Math.random() * 6)); //from 1 to 6
    }
    return diceValues;
  }

  const diceComponents = dice.map(die => <Die value={die} />);

  return (
    <main>
      <div className="dice-container">
        {diceComponents}
      </div>
    </main>
  )
}

export default App
