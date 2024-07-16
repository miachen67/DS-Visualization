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

const add = (element, index, array, length, setArray, baseLength, setBaseLength, setErrorMessage) => {
    let newArray
    if (baseLength == length){
        newArray = expandCapacity(array, baseLength, setBaseLength, setErrorMessage)
    } else if (index <= length) {
        newArray = Array.from(array)
    } else {
        return -1
    }
    for (let i = length; i > index; i--){
        newArray[i].number = newArray[i-1].number;
    }
    newArray[index] = {
        index: index,
        number: element
    }
    setArray(newArray)

}

export default {
    add: add
}