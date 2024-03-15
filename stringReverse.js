const Stack = require('./stack');
const argv = process.argv;

if(!argv[2]){throw new Error('No string detected')}
let string = argv[2];
let revString = '';
let reverserStack = new Stack();

for(let c of string){
    reverserStack.push(c);
    // console.log("c:", c)
}
let end = reverserStack.size;
for(let i=0; i<end; i++){
    // console.log(reverserStack.size);
    revString += reverserStack.pop();
    // console.log(i);
}

console.log(revString);
return revString;