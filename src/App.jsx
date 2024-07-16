import { useState } from 'react'
import addition from './Add'
import removal from './Remove'
import finding from './Find'

const Error = ({text}) => {
  if (text == null){
    return null
  }
  return (
    <h2 className="error">{text}</h2>
  )
}

const Title = ({title}) => {
  return(
  <div className="title">
    <h1>{title}</h1>
  </div>
  )
}

const FormFields = ({arrayLength, func, handleSubmit, setNewElement, setNewIndex, newIndex, newElement}) => {
  const handleNewElement = (event) => {
    console.log("newElement", event.target.value)
    setNewElement(event.target.value)
  }
  const handleNewIndex = (event) => {
    console.log("newIndex", event.target.value)
    setNewIndex(event.target.value)
  }
  if (func == "Remove"){
    return (
      <>
        <p>From Index: <input type="number" min={0} max={arrayLength-1} value={newIndex} onChange={handleNewIndex}/></p>
        <button onClick={handleSubmit} className="go">Go!</button>
      </>
    )
  } else if (func == "Add") {
    return(
      <>
      <p>Number: <input type="number" value={newElement} onChange={handleNewElement}/></p>
      <p>At Index: <input type="number" min={0} max={arrayLength} value={newIndex} onChange={handleNewIndex}/> </p>
      <button onClick={handleSubmit} className="go">Go!</button>
      </>
    )
  } else if (func == "Find") {
    return (
      <>
        <p>Number: <input type="number" value={newElement} onChange={handleNewElement}/></p>
        <button onClick={handleSubmit} className="go">Go!</button>
      </>
    )
  } else {
    return (<></>)
  }
}

const SelectFuncForm = ({values, array, setFunc, func, baseLength, newElement, setNewElement, newIndex, setNewIndex, setArray, setBaseLength, setErrorMessage}) => {
  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log("submit")
    if (func == "Add"){
      if (addition.add(newElement, newIndex, array, length(array), setArray, baseLength, setBaseLength, setErrorMessage) == -1){
        setErrorMessage("Error: Index out of bounds")
        setTimeout(() => {
          setErrorMessage(null)
        }, 3000)
      }
    } else if (func == "Remove"){
      if (removal.remove(newIndex, array, setArray, length(array)) == -1){
        setErrorMessage("Error: Index out of bounds")
        setTimeout(() => {
          setErrorMessage(null)
        }, 3000)
      }
    } else if (func == "Find"){
      let result = finding.find(length(array), array, newElement)
      if (result == -1){
        setErrorMessage("Not Found")
        setTimeout(() => {
          setErrorMessage(null)
        }, 3000)
      } else {
        document.getElementById(result).style.backgroundColor = '#75d4e7'
        setTimeout(() => {
          document.getElementById(result).style.backgroundColor = 'transparent'
        }, 3000)
      }
    }
  }

  return (
    <form className="form">
      {values.map(value => (
      <button key={value} value={value} type="button" onClick={() => setFunc(value)}>{value}</button>
    ))}
      <FormFields arrayLength={length(array)} func={func} handleSubmit={handleSubmit} newElement={newElement} setNewElement={setNewElement} newIndex={newIndex} setNewIndex={setNewIndex} />
    </form>
  )
}

const length = (array) => {
  let length = 0;
  for (let i = 0; i < array.length; i++){
    if (array[i].number != null){
      length++
    }
  }
  return length
}

const Array = ({array}) => {
  return (
    <table className='array'>
      <tbody>
        <tr>
          <td>Elements:</td>
          {array.map(element => (
            <td key={element.index} id={element.index}>{element.number}</td>
          ))}
        </tr>
        <tr>
          <td>Index: </td>
          {array.map(element => (
            <td key={element.index}>{element.index}</td>
          ))}
        </tr>
      </tbody>
    </table>
  )
}

const App = () => {
  const [errorMesage, setErrorMessage] = useState(null)
  const [newElement, setNewElement] = useState(0)
  const [newIndex, setNewIndex] = useState(0)
  const [baseLength, setBaseLength] = useState(5)
  const [func, setFunc] = useState("")
  const [array, setArray] = useState([
    {
      index: 0,
      number: 10
    }, 
    {
      index: 1,
      number: null
    }, 
    {
      index: 2,
      number: null
    }, 
    {
      index: 3,
      number: null
    }, 
    {
      index: 4,
      number: null
    }, 
  ])
  return (
    <>
      <Title title={"ArrayList (Java Implementation)"}/> 
      <SelectFuncForm values={["Add", "Remove", "Find"]} array={array} setFunc={setFunc} func={func} baseLength ={baseLength} newElement={newElement} setNewElement={setNewElement} newIndex={newIndex} setNewIndex={setNewIndex} setArray={setArray} setBaseLength={setBaseLength} setErrorMessage={setErrorMessage}/>
      <Array array={array}/> 
      <Error text={errorMesage}/> 
    </>
  )
}

export default App
