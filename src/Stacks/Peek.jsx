const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const peek = async (currStack, setErrorMessage) => {
  const top = currStack[currStack.length-1].number
  setErrorMessage(`${top} is at the top of the stack`)
  document.getElementById(currStack.length-1).style.backgroundColor = '#75d4e7';
  await wait (3000)
  setErrorMessage(null)
  document.getElementById(currStack.length-1).style.backgroundColor = 'transparent';

}

export default {
  peek: peek
}