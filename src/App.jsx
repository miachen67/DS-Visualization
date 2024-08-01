import ArrayList from './ArrayLists/ArrayList'
import StackPage from './Stacks/Stacks'
import QueuePage from './Queues/Queue'
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
        <Link to='/Stacks' className="navLinks">Stacks</Link>
        <Link to='/Queues' className="navLinks">Queues</Link>
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ArrayList' element={<ArrayList/>} />
        <Route path='/Stacks' element={<StackPage/>} />
        <Route path='/Queues' element={<QueuePage/>} />

      </Routes>

    </Router>
  )
}

export default App
