function createStudentCard(name, age){

    let studentCard = document.createElement('div');

    studentCard.innerHTML = `
    <h2>${name}</h2>
    <span>Возраст ${age} лет</span>
    `;

    document.body.appendChild(studentCard)
}

createStudentCard('Богдан', 19)