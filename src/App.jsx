import ArrayList from './ArrayLists/ArrayList'
import Home from './Home/Home'
import {
  BrowserRouter as Router,
  Routes, Route, Link
}  from 'react-router-dom'


const App = () => {
  return (
    <Router>
      <div className="navBar">
        <Link to='/' className="navLinks">Home</Link>
        <Link to='/ArrayList' className="navLinks">ArrayList</Link>
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ArrayList' element={<ArrayList/>} />
      </Routes>

    </Router>
  )
}

export default App
