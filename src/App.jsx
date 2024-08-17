import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ItemListContainer greeting={'Bienvenidos'}/>
        <NavBar />
        
      </div>
    </>
  )
}

export default App
