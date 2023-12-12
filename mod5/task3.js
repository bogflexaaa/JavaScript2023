function arrSort(array){ 
  
    for (let i = 0; i < array.length; i++){ 
        for (let j = 0; j < array.length - 1; j++){ 
            if (array[i+1] < array[j]){ 
                let temp = array[j]; 
                array[j] = array[j + 1]; 
                array[j + 1] = temp; 
            } 
        }         
    } 
 
    return array; 
} 
 
console.log(arrSort([1,2,3,4,5])); 
console.log(arrSort([3,12,33,44,100])); 
console.log(arrSort([0,1]));