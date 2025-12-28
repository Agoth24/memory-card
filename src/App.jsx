import './App.css'
import { Header } from './components/Header'
import { useState } from 'react'
function App() {
const [score, setScore] = useState(0)

  return (
    <main className='h-screen bg-linear-to-t from-sky-500 to-gray-950'>
        <Header score={score}/>

    </main>
  )
}

export default App
