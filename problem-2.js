//Author: Yel-Mangok <Github>

//storage the exam score in a variable
var s = prompt("Enter your exam score: ");

//condition
if (s < 0) {
    //if the condition is true
    //executee this code
    alert("Invalid Score. Try again...");
} else if (s >= 0 && s < 60) {
    //if the condition is true,
    //else if, analys othe condition
    //execute this code
    alert("You fail the exam.");
} else if (s >= 60 && s <= 100) {
    //if the condition is true,
    //else if, analys othe condition
    //execute this code
    alert("You pass the exam.");
} else {
    //default false clausula
    alert("invalid score. can't be greater than 100");

}

/*
-------------------------
desktop test
-------------------------
s = -20 => invalid exam numer
s = 0 => fail the exam
s = 59 => fail the exam
s = 60 => pass the exam
s = 100 => pass the exam
s = 120 => invalid exam number
-------------------------
*/



