let input = prompt("Enter the date (separated by \'/'\)");
let date = input.split("/");
let month1 = [1,3,5,7,8,10,12];
let month2 = [4,6,9,11];
let boolean = false;
for(let i=0;i<date.length;i++){
    date[i] =Number(date[i]);
}
if(date[2]%4===0&&date[2]>0){
    if(date[1]===2){
        if(date[0]>0 && date[0]<30){
            alert("Valid");
            boolean = true;
            if(date[0]===29){
                date[0]=1;
                date[1]=date[1]+1;
            }
            else{
                date[0]+=1;
            }
        }
        else{
            alert("Error");
        }
    }
    else if(month1.includes(date[1])){
        if(date[0]>0 && date[0]<32){
            alert("Valid");
            boolean = true;
            if(date[0]===31&&date[1]!==12){
                date[0]=1;
                date[1]=date[1]+1;
            }
            else if(date[0]===31&&date[1]===12){
                date[0]=1;
                date[1]=1;
                date[2]=date[2]+1;
            }
            else{
                date[0]+=1;
            }
        }
        else{
            alert("Error");
        }
    }
    else if(month2.includes(date[1])){
        if(date[0]>0 && date[0]<31){
            alert("Valid");
            boolean = true;
            if(date[0]===30){
                date[0]=1;
                date[1]=date[1]+1;
            }
            else{
                date[0]+=1;
            }
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
            boolean = true;
            if(date[0]===28){
                date[0]=1;
                date[1]=date[1]+1;
            }
            else{
                date[0]+=1;
            }
        }
        else{
            alert("Error");
        }
    }
    else if(month1.includes(date[1])){
        if(date[0]>0 && date[0]<32){
            alert("Valid");
            boolean = true;
            if(date[0]===31&&date[1]!==12){
                date[0]=1;
                date[1]=date[1]+1;
            }
            else if(date[0]===31&&date[1]===12){
                date[0]=1;
                date[1]=1;
                date[2]=date[2]+1;
            }
            else{
                date[0]+=1;
            }
        }

        else{
            alert("Error");
        }
    }
    else if(month2.includes(date[1])){
        if(date[0]>0 && date[0]<31){
            alert("Valid");
            boolean = true;
            if(date[0]===30){
                date[0]=1;
                date[1]=date[1]+1;
            }
            else{
                date[0]+=1;
            }
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
if(boolean === true){
    alert("The next day is " +date.join("/"));
}