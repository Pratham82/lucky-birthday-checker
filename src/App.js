import React, { useState } from 'react'

function App() {
  const [birthday, setBirthday] = useState(new Date())
  const [luckyNumber, setLuckyNumber] = useState('')
  const [message, setMessage] = useState('')

  const birthDateSum = (birthday) =>
    birthday
      .split('-')
      .map((val) => Number(val))
      .reduce((a, b) => a + b)

  const formatDate = (date) => date.toISOString().slice(0, 10)

  const todaysDate = formatDate(new Date())

  const checkIfLucky = () => {
    const finalDate = birthday instanceof Date ? formatDate(birthday) : birthday

    const sum = birthDateSum(finalDate)

    // Set message
    sum % luckyNumber === 0
      ? setMessage('Hurray your birthday is lucky')
      : setMessage('Sorry your birthday is not lucky')
  }

  return (
    <div className="App">
      <h1>Is your birthday Lucky 🎂</h1>
      <div className="container"></div>
      <p>Pick your birth date:</p>
      <input
        min="1950-01-01"
        max={todaysDate}
        type="date"
        value={birthday}
        className="datePickerStyle"
        onChange={(e) => setBirthday(e.target.value)}
      />
      <br />
      <br />
      <p>Enter your lucky number:</p>
      <input
        type="number"
        className="inputStyles"
        value={luckyNumber}
        onChange={(e) => setLuckyNumber(Number(e.target.value))}
      />
      <br />
      {luckyNumber > 0 && (
        <button className="checkIfLuckyBtn" onClick={checkIfLucky}>
          Check Number
        </button>
      )}
      <br />
      <p>{message}</p>
    </div>
  )
}

export default App
