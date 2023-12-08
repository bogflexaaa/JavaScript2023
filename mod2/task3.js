function compareRandomNumbers(n, m) {
    const min = Math.min(n, m);
    const max = Math.max(n, m);
    
    const num1 = Math.floor(Math.random() * (max - min + 1)) + min;
    const num2 = Math.floor(Math.random() * (max - min + 1)) + min;
    
    const comparison = {
        '>': num1 > num2,
        '<': num1 < num2,
        '>=': num1 >= num2,
        '<=': num1 <= num2,
        '==': num1 === num2,
        '!=': num1 !== num2
    };

    let signs = '';

    for (const [sign, result] of Object.entries(comparison)) {
        if (result) {
            signs += ` ${sign}`;
        }
    }

    console.log(`${num1}${signs} ${num2}`);
}

compareRandomNumbers(0, 100); 
compareRandomNumbers(2, 5);
compareRandomNumbers(100, -5);
compareRandomNumbers(-3, -10);
