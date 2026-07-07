let attendance = JSON.parse(localStorage.getItem("attendance")) || [];

displayAttendance();

function markAttendance(){

let name = document.getElementById("studentName").value.trim();

if(name==""){
alert("Enter Student Name");
return;
}

let time = new Date().toLocaleTimeString();

attendance.push({
name:name,
status:"Present",
time:time
});

localStorage.setItem("attendance",JSON.stringify(attendance));

document.getElementById("studentName").value="";

displayAttendance();

}

function displayAttendance(){

let table=document.getElementById("tableBody");

table.innerHTML="";

attendance.forEach(student=>{

table.innerHTML+=`
<tr>
<td>${student.name}</td>
<td>${student.status}</td>
<td>${student.time}</td>
</tr>
`;

});

}
