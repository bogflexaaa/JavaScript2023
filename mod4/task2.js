function createShuffledArray(count) {
    let array = [];
    
    for (let i = 1; i <= count; i++) {
        array.push(i);
    }
    
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    console.log(array);
}

createShuffledArray(5);
createShuffledArray(7);
createShuffledArray(3);
