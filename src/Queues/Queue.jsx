import Title from '../components/Title'
import Error from '../components/Error'
import enqueue from './Enqueue'
import dequeue from './Dequeue'
import peek from './Peek'

import { useState, useEffect } from 'react'

const Queue = ({elem}) => {
  return (
    <table className='queue'>
      <tbody>
        <tr>
          {elem.filter(element => element.number !== null).map(element => (
            <td key={element.index} id={element.index}>{element.number}</td>
          ))}
        </tr>
      </tbody>
    </table>
  )
}

const FormFields = ({func, setNewNumber, newNumber, handleSubmit}) => {
  const handleNewNumber = (event) => {
    event.preventDefault()
    console.log("newNumber", event.target.value)
    setNewNumber(event.target.value)
  }

  if (func === "Enqueue"){
    return (
      <>
        <p>Number: <input type="number" min={0} value={newNumber} onChange={handleNewNumber}/></p>
        <button onClick={handleSubmit} className="go">Go!</button>
      </>
    )
  } else if (func === "Dequeue" || func === "Peek"){
    return (
      <>
        <button onClick={handleSubmit} className="go">Go!</button>
      </>
    )
  } 
}
const SelectFuncForm = ({values, setFunc, func, setNewNumber, newNumber, currQueue, setCurrQueue, setErrorMessage}) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("submit")
    if (func === "Enqueue"){
      enqueue.enqueue(currQueue, setCurrQueue, newNumber, setErrorMessage)
    } else if (func === "Dequeue"){
      dequeue.dequeue(currQueue, setCurrQueue, setErrorMessage)
    } else if (func === "Peek"){
      peek.peek(currQueue, setErrorMessage)
    }
  }

  return (
    <form className = "form">
      {values.map(value => (
        <button key={value} value={value} type="button" onClick={() => setFunc(value)}> {value} </button>
      ))}
      <FormFields func={func} setNewNumber={setNewNumber} newNumber={newNumber} handleSubmit={handleSubmit} currQueue={currQueue} setCurrQueue={setCurrQueue}/>
    </form>
  )
}

const QueuePage = () => {
  const [errorMessage, setErrorMessage] = useState(null)
  const [newNumber, setNewNumber] = useState(0)
  const [func, setFunc] = useState("")
  const [currQueue, setCurrQueue] = useState([
    {
      index: 0,
      number: 1
    },
    {
      index: 1,
      number: 2
    }
  ])

  useEffect (() => {
    if (func === ""){
      return
    } else if (func === "Enqueue"){
      document.getElementById(currQueue.length-1).style.backgroundColor = '#75d4e7';
      setTimeout(() => {
        document.getElementById(currQueue.length-1).style.backgroundColor = 'transparent';
      }, 3000)
    } else if (func === "Dequeue") {
      document.getElementById(0).style.backgroundColor = '#FF7940';
      setTimeout(() => {
        document.getElementById(0).style.backgroundColor = 'transparent';
      }, 3000)
    }
  }, [currQueue, func])

  return (
    <>
      <Title title={"Queues"} />
      <SelectFuncForm values={["Enqueue", "Dequeue", "Peek"]} setFunc={setFunc} func = {func} setNewNumber={setNewNumber} newNumber={newNumber} currQueue={currQueue} setCurrQueue={setCurrQueue} setErrorMessage={setErrorMessage}/>
      <Queue elem={currQueue}/>
      <Error text={errorMessage} />
    </>
  )
}

export default QueuePage