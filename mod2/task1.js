function calculateSquare(x1, y1, x2, y2) {
    const first_side = Math.abs(x1 - x2);
    const second_side = Math.abs(y1 - y2);
    
    console.log(`x1 = ${x1}, y1 = ${y1}, x2 = ${x2}, y2 = ${y2}`);
    console.log(`square = ${first_side * second_side}`);
}

calculateSquare(2, 3, 10, 5);
calculateSquare(10, 5, 2, 3);
calculateSquare(-5, 8, 10, 5);
calculateSquare(5, 8, 5, 5);
calculateSquare(8, 1, 5, 1);
