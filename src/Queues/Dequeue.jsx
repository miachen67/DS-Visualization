const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const dequeue = async (currQueue, setCurrQueue, setErrorMessage) => {
  const removedNum = currQueue[0].number
  let newQueue = JSON.parse(JSON.stringify(currQueue))
  for (let i = 0; i < currQueue.length-1; i++){
    newQueue[i].number = currQueue[i+1].number
  }
  newQueue[currQueue.length-1] = {
    index: currQueue.length-1,
    number: null
  }
  
  setCurrQueue([...newQueue])
  setErrorMessage(`${removedNum} removed from queue`)
  await wait (3000)
  setErrorMessage(null)
}

export default {
  dequeue: dequeue
}