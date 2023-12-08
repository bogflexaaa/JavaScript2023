function createShuffledArray(len) {
    let array = [];
    
    for (let i = 1; i <= len; i++) {
        array.push(i);
    }
  
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]];
    }
    
    return array;
}

function findIndex(array, n) {
    console.log(array);

    let index = array.indexOf(n);
     
    if (index >= 0) {
        return "Индекс элемента = " + index;
    } 
    
    return 'Элемент не найден';    
}

console.log(findIndex(createShuffledArray(5), 3));
console.log(findIndex(createShuffledArray(7), 1));
console.log(findIndex(createShuffledArray(3), 7));
