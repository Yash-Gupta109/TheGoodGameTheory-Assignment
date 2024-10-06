// import './App.css'
import { Route, Routes } from 'react-router-dom'
import CardPage from './components/CardPage'
import SaveQuotes from './components/SaveQuotes'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<CardPage />} />
        <Route path="/likedQuotes" element={<SaveQuotes />} />
      </Routes>
    </>
  )
}

export default App