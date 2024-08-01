const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const pop = async (currStack, setCurrStack, setErrorMessage) => {
  const removedNum = currStack[currStack.length-1].number
  setCurrStack(currStack.filter(elem => elem.index != currStack.length-1))
  setErrorMessage(`${removedNum} popped from stack`)
  await wait (3000)
  setErrorMessage(null)
}

export default {
  pop: pop
}