let input = prompt("Enter a sentence");
let words = input.split(" ");

for(let i =0;i<words.length;i++){
    words[i] = words[i][0].toLocaleUpperCase() + words[i].substr(1);
}

let output = words.join(" ");
console.log(output);