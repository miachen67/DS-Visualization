const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const enqueue = async (currQueue, setCurrQueue, newNumber, setErrorMessage) => {
  let newIndex = 0
  if (currQueue.length != 0) {
    newIndex = currQueue[currQueue.length-1].index+1
  }
  let newElem = {
    index: newIndex,
    number: newNumber
  }
  setCurrQueue(currQueue.concat(newElem))
  setErrorMessage(`${newElem.number} added to queue`)
  await wait (3000)
  setErrorMessage(null)
  console.log(currQueue)
}

export default {
  enqueue: enqueue
}