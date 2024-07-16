import { useState } from 'react'
import addition from './Add'

const Title = ({title}) => {
  return(
    <h1>{title}</h1>
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
        <button onClick={handleSubmit}>Go!</button>
      </>
    )
  } else if (func == "Add") {
    return(
      <>
      <p>Number: <input type="number" value={newElement} onChange={handleNewElement}/></p>
      <p>At Index: <input type="number" min={0} max={arrayLength} value={newIndex} onChange={handleNewIndex}/> </p>
      <button onClick={handleSubmit}>Go!</button>
      </>
    )
  } else if (func == "Find") {
    return (
      <>
        <p>Number: <input type="number" value={newElement} onChange={handleNewElement}/></p>
        <button onClick={handleSubmit}>Go!</button>
      </>
    )
  } else {
    return (<></>)
  }
}

const SelectFuncForm = ({values, array, setFunc, func, baseLength, newElement, setNewElement, newIndex, setNewIndex, setArray, setBaseLength}) => {
  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log("submit")
    if (func == "Add"){
      console.log(array)
      addition.add(newElement, newIndex, array, length(array), setArray, baseLength, setBaseLength)
    } 
  }

  return (
    <form>
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
    <table>
      <tbody>
        <tr>
          <td>Elements:</td>
          {array.map(element => (
            <td key={element.index}>{element.number}</td>
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
      <Title title={"ArrayList"}/> 
      <SelectFuncForm values={["Add", "Remove", "Find"]} array={array} setFunc={setFunc} func={func} baseLength ={baseLength} newElement={newElement} setNewElement={setNewElement} newIndex={newIndex} setNewIndex={setNewIndex} setArray={setArray} setBaseLength={setBaseLength}/>
      <Array array={array}/> 
    </>
  )
}

export default App
