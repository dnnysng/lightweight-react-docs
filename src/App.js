import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Header from './components/header/Header'
import Fundamental from './pages/fundamental/Fundamental'
import Advanced from './pages/advanced/Advanced'
import Ecosystem from './pages/ecosystem/Ecosystem'

import style from './App.module.css';

function App() {

  const [currentPage, setCurrentPage] = useState("/")

  return (
    <div className={style.wrapper}>
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Routes>
        <Route path="/" element={<Fundamental />} />
        <Route path="/advanced" element={<Advanced />} />
        <Route path="/ecosystem" element={<Ecosystem />} />
      </Routes>
    </div>
  );
}

export default App;