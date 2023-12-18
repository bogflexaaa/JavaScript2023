function getOlderUser(allUsers){ 
  
     allUsers.sort((a,b) => b.age - a.age )    
     return allUsers[0].name
 } 
  
 let allUsers=[ 
     {name: 'Валя', age: 11}, 
     {name: 'Таня', age: 24}, 
     {name: 'Рома', age: 21}, 
     {name: 'Надя', age: 34}, 
     {name: 'Антон', age: 7} 
    ]; 
  
 console.log(getOlderUser(allUsers));
