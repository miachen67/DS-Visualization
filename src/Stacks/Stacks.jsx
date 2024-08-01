import Title from '../components/Title'
import Error from '../components/Error'
import push from './Push'
import pop from './Pop'
import peek from './Peek'

import { useState, useEffect } from 'react'

const Stack = ({elem}) => {
  return (
    <table className='stack'>
      <tbody>
        {elem.slice().reverse().map(element => (
          <tr key={element.index}>
            <td id={element.index}>{element.number}</td>
          </tr>
        ))}
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

  if (func === "Push"){
    return (
      <>
        <p>Number: <input type="number" min={0} value={newNumber} onChange={handleNewNumber}/></p>
        <button onClick={handleSubmit} className="go">Go!</button>
      </>
    )
  } else if (func === "Pop" || func === "Peek"){
    return (
      <>
        <button onClick={handleSubmit} className="go">Go!</button>
      </>
    )
  } 
}
const SelectFuncForm = ({values, setFunc, func, setNewNumber, newNumber, currStack, setCurrStack, setErrorMessage}) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("submit")
    if (func === "Push"){
      push.push(currStack, setCurrStack, newNumber, setErrorMessage)
    } else if (func === "Pop"){
      pop.pop(currStack, setCurrStack, setErrorMessage)
    } else if (func === "Peek"){
      peek.peek(currStack, setErrorMessage)
    }
  }

  return (
    <form className = "form">
      {values.map(value => (
        <button key={value} value={value} type="button" onClick={() => setFunc(value)}> {value} </button>
      ))}
      <FormFields func={func} setNewNumber={setNewNumber} newNumber={newNumber} handleSubmit={handleSubmit} currStack={currStack} setCurrStack={setCurrStack}/>
    </form>
  )
}

const StackPage = () => {
  const [errorMessage, setErrorMessage] = useState(null)
  const [newNumber, setNewNumber] = useState(0)
  const [func, setFunc] = useState("")
  const [currStack, setCurrStack] = useState([
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
    } else if (func === "Push"){
      document.getElementById(currStack.length-1).style.backgroundColor = '#75d4e7';
      setTimeout(() => {
        document.getElementById(currStack.length-1).style.backgroundColor = 'transparent';
      }, 3000)
    } else if (func === "Pop") {
      document.getElementById(currStack.length-1).style.backgroundColor = '#FF7940';
      setTimeout(() => {
        document.getElementById(currStack.length-1).style.backgroundColor = 'transparent';
      }, 3000)
    }
  }, [currStack])

  return (
    <>
      <Title title={"Stacks"} />
      <SelectFuncForm values={["Push", "Pop", "Peek"]} setFunc={setFunc} func = {func} setNewNumber={setNewNumber} newNumber={newNumber} currStack={currStack} setCurrStack={setCurrStack} setErrorMessage={setErrorMessage}/>
      <Stack elem={currStack}/>
      <Error text={errorMessage} />
    </>
  )
}

export default StackPage