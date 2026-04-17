
const students = [
    { name: "Basheer", marks: 92, attendance: 95 },
    { name: "Adnan", marks: 45, attendance: 60 },
    { name: "Hammad", marks: 78, attendance: 80 },
    { name: "Shams", marks: 88, attendance: 88 },
    { name: "Yousif", marks: 100, attendance: 100 },
    { name: "A-Qadeer", marks: 55, attendance: 90 }
];

function calculateGrade(marks) {
    if (marks >= 90) {
        return "A+";
    } else if (marks >= 80) {
        return "A";
    } else if (marks >= 70) {
        return "B";
    } else if (marks >= 60) {
        return "C";
    } else {
        return "Fail";
    }
}


function checkScholarship(marks, attendance) {
    if ((marks > 80 && attendance > 90) || (marks === 100)) {
        return true;
    } else {
        return false;
    }
}


console.log("--- Student Report ---");
students.forEach(function(student) {
    const grade = calculateGrade(student.marks);
    const isScholar = checkScholarship(student.marks, student.attendance);
    
    let statusMessage = "";
    
    if (isScholar === true) {
        statusMessage = "Scholarship Eligible";
    } else {
        statusMessage = "Not Eligible";
    }
    
    console.log(`Name: ${student.name} - Grade: ${grade} - Status: ${statusMessage}`);
});