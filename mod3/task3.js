function parity(number) {
    const isOdd = Math.abs(number) % 2 === 1;
    const parityType = isOdd ? "нечётное" : "чётное";
    console.log(`Число ${parityType}`);
}

parity(1);
parity(-1);
parity(2);
parity(212);
