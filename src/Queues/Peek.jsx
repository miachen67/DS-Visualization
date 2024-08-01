const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const peek = async (currQueue, setErrorMessage) => {
  const top = currQueue[0].number
  setErrorMessage(`${top} is at the front of the queue`)
  document.getElementById(0).style.backgroundColor = '#75d4e7';
  await wait (3000)
  setErrorMessage(null)
  document.getElementById(0).style.backgroundColor = 'transparent';

}

export default {
  peek: peek
}