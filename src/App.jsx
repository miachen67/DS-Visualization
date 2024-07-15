import { useState } from 'react'

const Title = ({title}) => {
  return(
    <h1>{title}</h1>
  )
}

const FormFields = ({arrayLength, func, handleSubmit}) => {
  if (func == "Remove"){
    return (
      <>
        <p>From Index: <input type="number" min={0} max={arrayLength-1} /></p>
        <button onClick={handleSubmit}>Go!</button>
      </>
    )
  } else if (func == "Add") {
    return(
      <>
      <p>Number: <input type="number"/></p>
      <p>At Index: <input type="number" min={0} max={arrayLength-1} /> </p>
      <button onClick={handleSubmit}>Go!</button>
      </>
    )
  } else if (func == "Find") {
    return (
      <>
        <p>Number: <input type="number"/></p>
        <button onClick={handleSubmit}>Go!</button>
      </>
    )
  } else {
    return (<></>)
  }
}

const SelectFuncForm = ({values, arrayLength, setFunc, func}) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("submit")
  }

  return (
    <form>
      {values.map(value => (
      <button key={value} value={value} type="button" onClick={() => setFunc(value)}>{value}</button>
    ))}
      <FormFields arrayLength={arrayLength} func={func} handleSubmit={handleSubmit}/>
    </form>
  )
}

const Array = ({array}) => {
  return (
    <table>
      <tbody>
        <tr>
          {array.map(element => (
            <td key={element.index}>{element.number}</td>
          ))}
        </tr>
        <tr>
          {array.map(element => (
            <td key={element.index}>{element.index}</td>
          ))}
        </tr>
      </tbody>
    </table>
  )
}

const App = () => {
  const [func, setFunc] = useState("")
  const [array, setArray] = useState([
    {
      index: 0,
      number: 0
    }, 
    {
      index: 1,
      number: 0
    }, 
    {
      index: 2,
      number: 0
    }, 
    {
      index: 3,
      number: 0
    }, 
    {
      index: 4,
      number: 0
    }, 
  ])
  return (
    <>
      <Title title={"ArrayList"}/> 
      <SelectFuncForm values={["Add", "Remove", "Find"]} arrayLength={array.length} setFunc={setFunc} func={func}/>
      <Array array={array}/> 
    </>
  )
}

export default App
