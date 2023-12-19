function createStudentList(listArr){

    studentList = document.createElement('ul');

    let header = document.createElement('h2')
    header.textContent = 'Студенты'
    studentList.appendChild(header)

    for(let i = 0; i < listArr.length; i++){
        
       let student = listArr[i];

       let listItem = document.createElement('li')        
       listItem.innerHTML = `
       Имя: ${student.name}<br>
       Возраст: ${student.age}
       `;

       studentList.appendChild(listItem)
           
    }

    document.body.appendChild(studentList);
}

let allStudents=[
    {name: 'Валя', age: 11},
    {name: 'Таня',age: 24},
    {name: 'Рома',age: 21},
    {name: 'Надя', age: 34},
    {name: 'Антон', age: 7}
   ];


const btn = document.getElementById('show-list');

function showList() {
    
    createStudentList(allStudents);  
    btn.removeEventListener('click', showList); 

  }

btn.addEventListener('click', showList);
