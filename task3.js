function filter(objects, prop, value) {

    return objects.filter(obj => obj[prop] === value);
  }

  let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
  ];
  
console.log(filter(objects, 'name', 'Иван'));
