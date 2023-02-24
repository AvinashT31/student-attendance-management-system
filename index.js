function AddStudent(){

     alert("Added Name Successfully");

     var AddStudentName = document.getElementById("AddStudentName").value;
     console.log(AddStudentName, "AddStudentName");
     
     var StudentNameLocal = JSON.parse(localStorage.getItem("StudentNameLocal")) || [];
     StudentNameLocal.push(AddStudentName);
     console.log(StudentNameLocal, "StudentNameLocal");

     localStorage.setItem("StudentNameLocal", JSON.stringify(StudentNameLocal));
     MarkAttendance();
AttendanceSheet();
}

function MarkAttendance(){

    var StudentDataList = JSON.parse(localStorage.getItem("StudentNameLocal"));
    console.log(StudentDataList, "StudentDataList")

    var StudentData = document.getElementById("MarkAttendance");
    console.log(StudentData, "StudentData");

    var Student = [];

    for(var i=0; i < StudentDataList.length; i++){

        Student += `<div id="StudentInfo"><p>${StudentDataList[i]}</p></div>`
    }

    console.log(Student, "Student");
    StudentData.innerHTML = Student;
}

MarkAttendance()



function AttendanceSheet(){

    var StudentDataList = JSON.parse(localStorage.getItem("StudentNameLocal"));
    console.log(StudentDataList, "StudentDataList")

    var StudentData = document.getElementById("AttendanceSheet");
    console.log(StudentData, "StudentData");

    var Student = [];

    for(var i=0; i < StudentDataList.length; i++){

        Student += `<div id="StudentInfo"><p>${StudentDataList[i]}</p></div>`
    }

    console.log(Student, "Student");
    StudentData.innerHTML = Student;
}
AttendanceSheet()

