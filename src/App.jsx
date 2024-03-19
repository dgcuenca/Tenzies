import { React, useState } from 'react'
import './App.css'
import Die from './components/Die.jsx'
import { nanoid } from 'nanoid'

function App() {
  const [dice, setDice] = useState(() => getDiceValues())

  function getDiceValues() {
    let diceValues = [];
    for (let i = 0; i <= 9; i++) {
      diceValues.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
      });
    }
    return diceValues;
  }

  function rollDice() {
    setDice(getDiceValues())
  }

  const diceComponents = dice.map(die => (
    <Die key={die.id} value={die.value} isHeld={die.isHeld} />
  ));

  return (
    <main>
      <div className="dice-container">
        {diceComponents}
      </div>
      <button className="roll-dice" onClick={rollDice}>Roll</button>
    </main>
  )
}

export default App
