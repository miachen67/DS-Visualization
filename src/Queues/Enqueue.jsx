const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const enqueue = async (currQueue, setCurrQueue, newNumber, setErrorMessage) => {
  let newElem = {
    index: currQueue.length,
    number: newNumber
  }
  setCurrQueue(currQueue.concat(newElem))
  setErrorMessage(`${newElem.number} added to queue`)
  await wait (3000)
  setErrorMessage(null)
}

export default {
  enqueue: enqueue
}