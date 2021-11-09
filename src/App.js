import { useState } from 'react'
import menu from './data'
import Header from './components/Header'
import Nav from './components/Nav'
import Cards from './components/Cards'

function App() {

  // State
  const [showMenu, setShowMenu] = useState(menu)

  // Set State
  const onFilter = filter => {
    let newMenu = [...menu]

    if (filter === 'all') {
      newMenu = [...menu]
    } else if (filter === 'breakfast') {
      newMenu = newMenu.filter(obj => obj.category === filter)
    } else if (filter === 'lunch') {
      newMenu = newMenu.filter(obj => obj.category === filter)
    } else if (filter === 'shakes') {
      newMenu = newMenu.filter(obj => obj.category === filter)
    }

    setShowMenu(newMenu)
  }

  return (
    <div className="App">
      <Header />
      <Nav onFilter={onFilter} />
      <Cards showMenu={showMenu} />
    </div>
  );
}

export default App;
