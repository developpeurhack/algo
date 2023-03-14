// ex 1
function myLength(str) {
    let length = 0;
    for (let item in str) {
    length++;
    }
    return length;
}
myLength();
console.log(myLength("bonjour , 1 , 2")); // 15

//exo 2
function myTrim() {
    
};

//exo 5
let n = 10;

function multi(n) {
    let result = 0;
    for (let i = 1; i <= 10; i++) {
    console.log(`${n} * ${i} =  ${n * i}`);
    }
    return result;
}

console.log(multi(n));

// exo 6
function laSomme(x) {
    let sum = 0;
        for (let i = 1; i <= x ; i++) {
    
        sum += i;
        }
    return sum
}
console.log(laSomme(5)); // 15

//exo 7

let y = 10;
function multiplication(y) {
    let result = 0;
    for (let i = 1; i <= 10; i++) {
    console.log(i);
    }
    return result;
}

console.log(multiplication(y));

//  exo 8
let z = 20;
function count(z){
for ( let i = 0; i < 20; i++){
    var num = Number(prompt("Entrez un nombre entre 0 et 20"));
    count+
    console.log(`${i}`);
    
            if ( num  < 20  ){ continue } else { break };
    
        }
    return Math.max(num)
}
console.log(count(`${10}`))

// not finish

// exo 9
function numInfini(x) {
    for (let i = 1; i < x; i++) {
        var num = Number(prompt("Entrez un nombre "));

        console.log(i);
        if (num === 0) { break };
    }
    return num;
}
console.log(numInfini(10)); // 1, 2 , 3......0 break

// exo 10  ====> essai solution avec poo