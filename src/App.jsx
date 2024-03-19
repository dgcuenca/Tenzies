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
    setDice(oldDice => oldDice.map(die => {
      return die.isHeld ?
        die :
        { ...die, value: Math.ceil(Math.random() * 6) }
    }))
  }

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ?
        { ...die, isHeld: !die.isHeld } :
        die
    }))
  }

  const diceComponents = dice.map(die => (
    <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />
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
