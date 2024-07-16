const find = (length, array, number) => {
    for (let i = 0; i < length; i++){
        if (array[i].number == number){
            return i
        }
    }
    return -1;
}
export default {
    find: find
}