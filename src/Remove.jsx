const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const remove = async (index, array, setArray, length, setErrorMessage) => {
    console.log(array)
    if (index < 0 || index > length-1){
        return -1
    } else {
        let newArray = JSON.parse(JSON.stringify(array))
        for (let i = Number(index); i < length-1; i++){
            document.getElementById(i+1).style.backgroundColor='#FF7940'
            await wait(1000)
            newArray[i].number = newArray[i+1].number
            setArray([...newArray])
            document.getElementById(i+1).style.backgroundColor = 'transparent';
            document.getElementById(i).style.backgroundColor = '#75d4e7';
            await wait(1000)
        }
        newArray[length-1] = {
            index: length-1,
            number: null
        }
        setArray(newArray)
        setErrorMessage(`${index} removed from array`)
        await wait (3000)
        for (let i = 0; i < length; i++){
            document.getElementById(i).style.backgroundColor = 'transparent';
        }
        setErrorMessage(null)
    }
}

export default {
    remove: remove
}