// NAME
alert("Welcome To Our Homepage")
let name=prompt("Please Indicate Your Name");

// AGE
//let age=prompt("Please Indicate Your Age");

// EMAIL
let email=prompt("Indicate Your Email Address");


//let message=alert(`Hi ${name}, you are ${age} years old and we'll keep in touch via your email: ${email}`);

let myName="Lawrencia";
console.log(myName);

let myAge="23 years old";
console.log(myAge);

let x=9;
let y=5;
let addNumbers=x+y;
console.log(addNumbers);

let subNum=x-y;
console.log(subNum);

let divNum=x/y;
console.log(divNum);

let multNum=x*y;
console.log(multNum);

let n=15;
let m=4;
let remainder=n%m;
console.log(remainder);

let young=true;
console.log(young);

let main=80;
console.log(typeof(main));

let pal="Nina";
console.log(typeof(pal));

//ASSIGNMENT 10
function VerifyAge () let Age = prompt("How old are you?")
{ if  (Age<12){
    alert(`Hi ${name}, you are ${Age} years old and you are too young to register. Sorry😔😔`)
}else if(Age>= 12 && Age <=18){
    alert(`Hi ${name}, you are ${Age} years old and you have limited options to register for. We will keep in touch via your email: ${email}👋👋`)
}else if (Age>=18){ alert(`Hi ${name}, you are ${Age} years old and you can register for any option of your choice. We will keep in touch via your email: ${email} 👋👋`)

}else{
        alert(`Welcome ${name}! Please enter a valid age/number`);
    }

}
