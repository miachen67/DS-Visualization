import { useNavigate } from "react-router-dom"
import { useState } from 'react'



const Home = () => {
  const [selectedValue, setSelectedValue] = useState('ArrayList');
  const navigate = useNavigate()
  const handleSelection = (e) => {
    setSelectedValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(selectedValue)
    navigate(`/${selectedValue}`)
  }

  return (
    <div className='title'>
      <h1>Select A Data Structure</h1>
      <form onSubmit={handleSubmit}>
        <select name='Data Structures Dropdown' id='dsdropdown' onChange={handleSelection} value={selectedValue}>
          <option value='ArrayList'>ArrayLists</option>
          <option value='slinkedlist' disabled>Singly Linked Lists</option>
          <option value='dlinkedlist' disabled>Doubly Linked Lists</option>
        </select>
        <input type="submit" value="go!" id="goButton" />
      </form>
    </div>
  )
}

export default Home