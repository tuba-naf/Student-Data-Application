var stdFirstname= document.getElementById("stdFirstName");
var stdLastname= document.getElementById("stdLastName");
var stdAge= document.getElementById("stdAge");
var stdEdu= document.getElementById("stdEdu");
var stdId= document.getElementById("stdId");

var stdList= [];
var tBody= document.getElementById("tbody");

function render (){
    tBody.innerHTML="";
    for(var i=0;i<stdList.length;i++){
        tBody.innerHTML +=` <tr>
        <td>${i+1}</td>
        <td>${stdList[i].Firstname}</td>
        <td>${stdList[i].Lastname}</td>
        <td>${stdList[i].Age}</td>
        <td>${stdList[i].Education}</td>
        <td>${stdList[i].Id}</td>
        <td><button onClick="deleteData(${i})">Delete</button></td>
        <td><button onClick="editData(${i})">Edit</button></td>
         </tr>
        `
    }
}

function addStudent(){
    var a= stdFirstname.value;
    var b= stdLastname.value;
    var c= stdAge.value;
    var d= stdEdu.value;
    var e= stdId.value;

    var obj= {
         Firstname:a,
         Lastname:b,
         Age:c,
         Education:d,
         Id:e,
    }

stdList.push(obj);
console.log(stdList)
stdFirstname.value= "";
stdLastname.value="";
stdAge.value="";
stdEdu.value="";
stdId.value="";
render();
}
function deleteData(index){
    stdList.splice(index,1);
    render();
}
 function deleteAll(){
    stdList=[];
    tBody.innerHTML="";
 }
 function editData(index){
    var newName= prompt("Enter the new Name");
    var newLastName= prompt("Enter the new Last name");
    var newAge= prompt("Enter the new Age");
    var newEducation= prompt("Enter the new Education");
    var newId= prompt("Enter the new Id");
    if(newName!==null&&newLastName!==null&&newAge!==null&&newEducation!==null&&newId!==null){
        stdList[index].Firstname=newName;
        stdList[index].Lastname=newLastName;
        stdList[index].Age=newAge;
        stdList[index].Education=newEducation;
        stdList[index].Id=newId;
    }
    render()
 }

