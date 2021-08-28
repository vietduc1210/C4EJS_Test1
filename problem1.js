let input = prompt("Enter a string");
let newInput = input.split("");
let output = "";
let i = newInput.length -1;
while(i>=0){
    output = output +newInput[i];
    i--;
}
console.log(output);