import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])
  
  useEffect(()=>{
    axios.get('/api/jokes')
      .then(res=>setJokes(res.data))
      .catch(err=>console.log(err))
    
  })

  return (
    <>
    <h1>Jokes: {jokes.length}</h1>
    <p>{jokes.map(joke=>(<div key={joke.id}>
      <h2>{joke.setup}</h2>
      <h3>{joke.punchline}</h3>
    </div>))}</p>
    </>
  )
}

export default App
