const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const find = async (length, array, number, setErrorMessage) => {
    for (let i = 0; i < length; i++){
        await wait(1000); // Wait for i seconds before continuing
        document.getElementById(i).style.backgroundColor = '#FF7940';
        await wait(1000); // Wait for 1 second
        console.log("array[i].number", array[i].number)
        if (array[i].number == number) {
            document.getElementById(i).style.backgroundColor = '#75d4e7';
            setErrorMessage(`Found at index ${i}`)
            await wait(3000); // Wait for 3 seconds
            document.getElementById(i).style.backgroundColor = 'transparent';
            console.log(`Element found at index ${i}`);
            setErrorMessage(null)
            return i; // Return index if found
        } else {
            document.getElementById(i).style.backgroundColor = 'transparent';
        }
    }
    console.log("not found")
    return -1
}
export default {
    find: find
}