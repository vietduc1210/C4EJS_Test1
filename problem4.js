let com = [
    {
        staffName: "Duc",
        age: 18,
        salary: 1000,
        position: "Intern",
    },
    {
        staffName:"Minh",
        age: 30,
        salary: 5000,
        position: "manager",
    },
    {
        staffName: "An",
        age: 40,
        salary: 10000,
        position: "CEO",
    }
]
let input = prompt("(Read, Create, Update, Delete, Exit)");
while(true){
    if(input.toLowerCase()==="read"){
        for(let i=0;i<com.length;i++){
            console.log("-------------------")
            console.log("Name: " +com[i].staffName);
            console.log("Age: " +com[i].age);
            console.log("Salary: " +com[i].salary);
            console.log("Position: " +com[i].position);

        }
    }
    if(input.toLowerCase()==="create"){
        let newStaff = {}
        newStaff.staffName = prompt("Name");
        newStaff.age = prompt("Age");
        newStaff.salary = prompt("Salary");
        newStaff.position = prompt("Position");
        com.push(newStaff);
        alert("Done");
    }
    if(input.toLowerCase()==="delete"){
        let pos = prompt("Enter position");
        com.splice(pos-1,1);
    }
    if(input.toLowerCase()==="update"){
        let pos = prompt("Enter position");
        com[pos-1].staffName = prompt("Name");
        com[pos-1].age = prompt("Age");
        com[pos-1].salary = prompt("Salary");
        com[pos-1].position = prompt("Position");
        alert("Done");
    }
    if(input.toLowerCase()==="exit"){
        break;
    }
    input = prompt("(Read, Create, Update, Delete, Exit)");
}