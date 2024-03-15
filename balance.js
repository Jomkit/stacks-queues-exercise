// Determine if brackets of a string are balanced
// Ex: banana, {banana}, {(banana)}, etc
// Imbalanced: banna], {anana), {{banana]]]]}}, ((ok) [nope)]

// I assume you'll never end up with more closing brackets then open early in the analysis, or else that would be imbalanced by default

const Stack = require('./stack')
const argv = process.argv;
let string = argv[2]
let countBalance = new Stack();

if(!string){
    throw new Error('Please enter a valid string');
}

try{
    for(let c of string){
        if(c === '(' || c === '{' || c === '['){
            console.log('Opening spotted!');
            countBalance.push(c);
        } else if(c === ')' || c === '}' || c === ']'){
            console.log('closing spotted!');
            countBalance.pop();
        }
    }
    if(countBalance.size==0){
        console.log('Balanced!');
    } else{
        console.log('Imbalanced!');
    }
}catch{
    console.log('Imbalanced brackets!');
}
