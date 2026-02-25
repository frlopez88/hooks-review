import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { GitSearch } from './pages/GitSearch'
import { Home } from './pages/Home'
import { Error } from './pages/Error'
import { NavBar } from './components/NavBar'
import { PokeList } from './pages/PokeList'
import './App.css'

function App() {


  return (
    <>
      <NavBar />
      <main className='container mt-4'>
        <HashRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/git-search' element={<GitSearch />} />
            <Route path='*' element={<Error />} />
            <Route path='/poke-list'  element={<PokeList/>} />
          </Routes>
        </HashRouter>
      </main>
    </>
  )
}

export default App
