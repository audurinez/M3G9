"use strict"
 // here we are going to create a type for our objects
{
 type persons ={
    name: string;
    dateOfBirth: string;
    children: number;
    country: string;
    knowsHowToProgram: boolean;
 }

 const applicants:persons[] =[
 {
    name: "Darryl Rozenzweig",
    dateOfBirth: "12/22/1996",
    children: 0,
    country: "Burkina Faso",
    knowsHowToProgram: true
 },
 {
    name: "Brittany Ilyinski",
    dateOfBirth: "1/26/1978",
    children: 0,
    country: "China",
    knowsHowToProgram: false
 },
 {
    name: "Kaylee De Maine",
    dateOfBirth: "11/25/1979",
    children: 3,
    country: "Australia",
    knowsHowToProgram: false
 },
 {
    name: "Erina Cockrem",
    dateOfBirth: "7/24/1974",
    children: 2,
    country: "Mexico",
    knowsHowToProgram: true
 },
 {
    name: "Anabella Silson",
    dateOfBirth: "9/2/1999",
    children: 4,
    country: "Serbia",
    knowsHowToProgram: true
 },
]

//1st statement
// We use parse to create a date out of string. 
// We use if else statment to answer the question - firstly creating a statement

if (Date.parse(applicants[0].dateOfBirth)<Date.parse(applicants[4].dateOfBirth)) {

    console.log("the last person is older than the first person");
    
}
else {

    console.log("the last person is not older than the first person");
    
}

//2nd statement - We use the same method here

if (applicants[1].children==applicants[2].children) {

    console.log("The second person has the same amount of children as the third person");
    
}
else {

    console.log("The second person does not have the same amount of children as the third person");
    
}

//3rd statement Here we dont need a else statemtn because there is the answer is YAY

if (applicants[0].knowsHowToProgram && applicants[3].knowsHowToProgram){

    console.log("YAY!");
    
}

//4th statement Here we create a switch statement. Since our person is chinse she becomes other.

let greeting = "other";


switch (greeting) {
    case "Iceland": 
        console.log("Hæ");
        break;
    case "Spain":
        console.log("Hola");
        break;
    case "Korea":
        console.log("여보세요");
        break;
    case "other":
        console.log("Hello");
        break;

}

// 5th statement Here we use a switch statement and use a length property to count our characters in the name. 

let result = ((applicants[1].name).length) > 5 ? "The 2nd persons name is longer than 5 characters" : "The 2nd persons name is not longer than 5 characters";

console.log(result);



}
