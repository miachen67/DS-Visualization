const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const push = async (currStack, setCurrStack, newNumber, setErrorMessage) => {
  let newElem = {
    index: currStack.length,
    number: newNumber
  }
  setCurrStack(currStack.concat(newElem))
  setErrorMessage(`${newElem.number} added to stack`)
  await wait (3000)
  setErrorMessage(null)
}

export default {
  push: push
}