const remove = (index, array, setArray, length) => {
    console.log(array)
    if (index < 0 || index > length-1){
        return -1
    } else {
        let newArray = JSON.parse(JSON.stringify(array))
        console.log('yay')
        console.log('index', index)
        console.log('length', length)
        console.log('newarray 2', newArray[2].number)

        for (let i = Number(index); i < length-1; i++){
            console.log("i", i)
            console.log("newArray=", newArray)
            console.log("array=", array)
            console.log('newarray[2]', newArray[2])
            console.log("type of i+1", typeof(i+1), "typeof i", typeof(i))
            newArray[i].number = newArray[i+1].number
        }
        newArray[length-1] = {
            index: length-1,
            number: null
        }
        setArray(newArray)
    }
}

export default {
    remove: remove
}