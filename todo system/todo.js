// function submit(){
// alert('Working');

// var myvar = document.getElementById("StudenData").value;
// console.log(myvar, "myvar");

// var myvarlocal = JSON.parse(localStorage.getItem("myvarlocal")) || [];
// myvarlocal.push(myvar);
// localStorage.setItem("myvarlocal", JSON.stringify(myvarlocal));
// console.log(myvarlocal, "myvarlocal");

// }


function cs(){
alert("working");
 var student = document.getElementById("data").value;
 console.log(student, "student")

 var DataFromLS = JSON.parse (localStorage.getItem("DataFromLS")) || [];
 DataFromLS.push(student);

localStorage.setItem("DataFromLS", JSON.stringify(DataFromLS));
  console.log(DataFromLS, "DataFromLS");


 }







