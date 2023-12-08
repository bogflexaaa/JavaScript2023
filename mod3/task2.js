function formatName(userName, userSurname) {
    const formattedName = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
    const formattedSurname = userSurname.charAt(0).toUpperCase() + userSurname.slice(1).toLowerCase();
    console.log(`${formattedName} ${formattedSurname}`);
}

formatName('ивАН', 'иВаНоВ');
formatName('ПЕТР', 'ПЕТРОВ');
