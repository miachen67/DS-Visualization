const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const dequeue = async (currQueue, setCurrQueue, setErrorMessage) => {
  if (currQueue.length == 0){
    setErrorMessage(`Queue is empty. Enqueue something first.`)
    await wait (3000)
    setErrorMessage(null)
    return
  }

  const removedNum = currQueue[0].number
  setCurrQueue(currQueue.filter(elem => elem.index != currQueue[0].index))
  console.log(currQueue)
  setErrorMessage(`${removedNum} removed from queue`)
  await wait (3000)
  setErrorMessage(null)
}

export default {
  dequeue: dequeue
}