let arr = [1,2,3,3,4,5,4,4,4,5,5];
let newArr = [];
for(let i=0;i<arr.length;i++){
    let a = 0;
    for(let n=0;n<i;n++){
        if(arr[i]==arr[n]){
            a++
        }
        
    }
    if(a==0){
        newArr.push(arr[i]);
    }
}
console.log(newArr);
