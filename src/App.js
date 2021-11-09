import { useState } from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import Cards from './components/Cards'

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Cards />
    </div>
  );
}

export default App;
