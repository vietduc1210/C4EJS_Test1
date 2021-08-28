let input = prompt("Enter the date (separated by \'/'\)");
let date = input.split("/");
let month1 = [1,3,5,7,8,10,12];
let month2 = [4,6,9,11];
for(let i=0;i<date.length;i++){
    date[i] =Number(date[i]);
}
if(date[2]%4===0&&date[2]>0){
    if(date[1]===2){
        if(date[0]>0 && date[0]<30){
            alert("Valid");
        }
        else{
            alert("Error");
        }
    }
    else if(month1.includes(date[1])){
        if(date[0]>0 && date[0]<32){
            alert("Valid");
        }
        else{
            alert("Error");
        }
    }
    else if(month2.includes(date[1])){
        if(date[0]>0 && date[0]<31){
            alert("Valid");
        }
        else{
            alert("Error");
        }
    }
    else{
        alert("Error");
    }
    
}
else if(date[2]%4!==0&&date[2]>0){
    if(date[1]===2){
        if(date[0]>0 && date[0]<29){
            alert("Valid");
        }
        else{
            alert("Error");
        }
    }
    else if(month1.includes(date[1])){
        if(date[0]>0 && date[0]<32){
            alert("Valid");
        }
        else{
            alert("Error");
        }
    }
    else if(month2.includes(date[1])){
        if(date[0]>0 && date[0]<31){
            alert("Valid");
        }
        else{
            alert("Error");
        }
    }
    else{
        alert("Error");
    }
    
}
else{
    alert("Error");
}