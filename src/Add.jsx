import {useState} from 'react'

const expandCapacity = (array, baseLength, setBaseLength) => {
    const newArray = new Array(baseLength * 2)
    for (let i = 0; i < baseLength; i++){
        newArray[i] = array[i]
    }
    for (let i = baseLength; i < baseLength*2; i++){
        newArray[i] = {index: i, number: null}
    }
    setBaseLength(baseLength * 2)
    return newArray

}

const add = (element, index, array, length, setArray, baseLength, setBaseLength) => {
    let newArray
    if (baseLength == length){
        newArray = expandCapacity(array, baseLength, setBaseLength)
    } else {
        newArray = Array.from(array)
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