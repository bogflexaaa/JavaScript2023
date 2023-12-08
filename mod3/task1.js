function checkPassword(password) {
    const hasValidLength = password.length >= 4;
    const hasValidCharacter = password.includes('-') || password.includes('_');

    if (hasValidLength && hasValidCharacter) {
        console.log('Пароль надёжный');
    } else {
        console.log('Пароль недостаточно надёжный');
    }
}

checkPassword('1234-');
checkPassword("4321_");
checkPassword("qaz-xsw");
checkPassword("_zxd");
checkPassword("_-a");
checkPassword("qaz");
checkPassword("_-3");
checkPassword("123456789");
