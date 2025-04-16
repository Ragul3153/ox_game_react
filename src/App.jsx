import { useState } from 'react'
import React from 'react'
import './App.css'

function Square({value}){
  return(
    <button>
      {value}
    </button>
  )
}

function App() {
  const [square,setsquare] = useState(Array(9).fill(null))

  const handleClick = () => {

  }

  return (
    <div>
      <div>
      <Square value={square[0]} onclick={() => handleClick(0)} />
      <Square value={square[1]} onclick={() => handleClick(1)} />
      <Square value={square[2]} onclick={() => handleClick(2)} />
      </div>

      <div>
      <Square value={square[3]} onclick={() => handleClick(3)} />
      <Square value={square[4]} onclick={() => handleClick(4)} />
      <Square value={square[5]} onclick={() => handleClick(5)} />
      </div>

      <div>
      <Square value={square[6]} onclick={() => handleClick(6)} />
      <Square value={square[7]} onclick={() => handleClick(7)} />
      <Square value={square[8]} onclick={() => handleClick(8)} />
      </div>
    </div>
  )
}

export default App
