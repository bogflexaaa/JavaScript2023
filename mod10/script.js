const students = [{
    firstName: "Артур",
    lastName: "Крымский",
    middleName: "Олегович",
    dob: new Date("2004-11-14"),
    startYear: 2022,
    faculty: "ИРИТ-РТФ"
}, {
    firstName: "Богдан",
    lastName: "Бикаев",
    middleName: "Александрович",
    dob: new Date("2004-04-08"),
    startYear: 2022,
    faculty: "ИРИТ-РТФ"
}, {
    firstName: "Андрей",
    lastName: "Петрашов",
    middleName: "Генадьевич",
    dob: new Date("2004-06-28"),
    startYear: 2022,
    faculty: "ИРИТ-РТФ"
}];

function addStudent(event) {
    event.preventDefault();
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const middleName = document.getElementById('middle-name').value;
    const dob = new Date(document.getElementById('dob').value);
    const startYear = parseInt(document.getElementById('start-year').value);
    const faculty = document.getElementById('faculty').value;
    const student = {
        firstName,
        lastName,
        middleName,
        dob,
        startYear,
        faculty
    };
    students.push(student);
    renderStudentsTable();
    document.getElementById('add-student-form').reset();
}

function renderStudentsTable(filteredStudents = students) {
    const studentsList = document.getElementById('students-list');
    studentsList.innerHTML = '';
    filteredStudents.forEach((student) => {
        const row = document.createElement('tr');
        const firstNameCell = document.createElement('td');
        firstNameCell.textContent = student.firstName;
        row.appendChild(firstNameCell);
        const lastNameCell = document.createElement('td');
        lastNameCell.textContent = student.lastName;
        row.appendChild(lastNameCell);
        const middleNameCell = document.createElement('td');
        middleNameCell.textContent = student.middleName;
        row.appendChild(middleNameCell);
        const dobCell = document.createElement('td');
        const dob = student.dob.toLocaleDateString('ru-RU');
        const age = calculateAge(student.dob);
        dobCell.textContent = `${dob} (${age} лет)`;
        row.appendChild(dobCell);
        const startYearCell = document.createElement('td');
        startYearCell.textContent = student.startYear;
        row.appendChild(startYearCell);
        const graduationYear = student.startYear + 4;
        const graduationYearCell = document.createElement('td');
        graduationYearCell.textContent = graduationYear;
        row.appendChild(graduationYearCell);
        const facultyCell = document.createElement('td');
        facultyCell.textContent = student.faculty;
        row.appendChild(facultyCell);
        studentsList.appendChild(row);
    });
}

function calculateAge(dob) {
    const currentDate = new Date();
    const birthDate = new Date(dob);
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDifference = currentDate.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function filterStudents() {
    const filterFirstName = document.getElementById('filter-first-name').value.toLowerCase();
    const filterLastName = document.getElementById('filter-last-name').value.toLowerCase();
    const filterMiddleName = document.getElementById('filter-middle-name').value.toLowerCase();
    const filterFaculty = document.getElementById('filter-faculty').value.toLowerCase();
    const filterStartYear = parseInt(document.getElementById('filter-start-year').value);
    const filterGraduationYear = parseInt(document.getElementById('filter-graduation-year').value);
    const filteredStudents = students.filter((student) => {
        const fullName = `${student.firstName} ${student.lastName} ${student.middleName}`.toLowerCase();
        return (
            (!filterFirstName || fullName.startsWith(filterFirstName)) && (!filterLastName || fullName.includes(filterLastName)) && (!filterMiddleName || fullName.includes(filterMiddleName)) && (!filterFaculty || student.faculty.toLowerCase().includes(filterFaculty)) && (!filterStartYear || student.startYear === filterStartYear) && (!filterGraduationYear || student.startYear + 4 === filterGraduationYear));
    });
    renderStudentsTable(filteredStudents);
}

function resetFilters() {
    document.getElementById('filter-first-name').value = '';
    document.getElementById('filter-last-name').value = '';
    document.getElementById('filter-middle-name').value = '';
    document.getElementById('filter-faculty').value = '';
    document.getElementById('filter-start-year').value = '';
    document.getElementById('filter-graduation-year').value = '';
    renderStudentsTable();
}
document.getElementById('add-student-form').addEventListener('submit', addStudent);
document.getElementById('apply-filter-btn').addEventListener('click', filterStudents);
document.getElementById('reset-filters-btn').addEventListener('click', resetFilters);
renderStudentsTable();
