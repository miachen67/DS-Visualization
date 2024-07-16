const expandCapacity = (array, baseLength, setBaseLength, setErrorMessage) => {
    const newArray = new Array(baseLength * 2)
    for (let i = 0; i < baseLength; i++){
        newArray[i] = array[i]
    }
    for (let i = baseLength; i < baseLength*2; i++){
        newArray[i] = {index: i, number: null}
    }
    setBaseLength(baseLength * 2)
    setErrorMessage("Base Array Expanded")
    return newArray
}

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const add = async (element, index, array, length, setArray, baseLength, setBaseLength, setErrorMessage) => {
    let newArray
    if (baseLength == length){
        newArray = expandCapacity(array, baseLength, setBaseLength, setErrorMessage)
        setArray(newArray)
        await wait(2000)
        setErrorMessage(null)
    } else if (index <= length) {
        newArray = Array.from(array)
    } else {
        return -1
    }
    for (let i = length; i > index; i--){
        document.getElementById(i-1).style.backgroundColor = '#FF7940';
        await wait(1000)
        newArray[i].number = newArray[i-1].number;
        setArray([...newArray])
        document.getElementById(i-1).style.backgroundColor = 'transparent';
        document.getElementById(i).style.backgroundColor = '#75d4e7';
        await wait(1000)
    }
    newArray[index] = {
        index: index,
        number: element
    }
    setArray(newArray)
    document.getElementById(index).style.backgroundColor = '#75d4e7';
    setErrorMessage(`${element} added to array`)
    await wait (3000)
    for (let i = 0; i < length+1; i++){
        document.getElementById(i).style.backgroundColor = 'transparent';
    }
    setErrorMessage(null)
}

export default {
    add: add
}