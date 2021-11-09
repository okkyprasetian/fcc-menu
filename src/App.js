import { useState } from 'react'
import menu from './data'
import Header from './components/Header'
import Nav from './components/Nav'
import Cards from './components/Cards'

function App() {

  // State
  const [showMenu, setShowMenu] = useState(menu)

  return (
    <div className="App">
      <Header />
      <Nav />
      <Cards showMenu={showMenu} />
    </div>
  );
}

export default App;
