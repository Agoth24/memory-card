import './App.css'
import { Header } from './components/Header'
import {Game} from './components/Game'
import { useState } from 'react'
function App() {
const [score, setScore] = useState(0)

  return (
    <main className='flex flex-col min-h-screen bg-linear-to-t from-sky-950 to-gray-950'>
        <Header score={score}/>
        <Game setScore={setScore}/>
    </main>
  )
}

export default App
