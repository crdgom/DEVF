// # Arithmetics

// ADDING OPERATOR

let add = 5 + 5;

console.log(add);

// SUBTRACT OPERATOR

let subtract =  5 - 2;

console.log(subtract);

// DIVIDER OPERATOR

let division = 15 / 3;

console.log(division);

// MULTIPLICATION OPERATOR

let multiply = 3 * 5;

console.log(multiply);

// MODULE OR RESIDUE OPERATOR

let residue = 25 % 3;
console.log(residue)

// OPERATOR RULES (MATHEMATICAL)

// MULTIPLICATION FIRST

let operation1 = 100 + 4 * 11;  // 100 + 4 = 104 * 11 = 1,144 but the first operation is instead 4*11 and at the end is added 100. Resulting in 144
console.log(operation1);
 // to proper operation we need to enclose (force) the add operation first with the parenthesis

 let operation2 = (100 + 4) * 11
 console.log(operation2)