function f1(x,y){
    console.log(Math.pow(x, 2)+Math.pow(y,2))
}
f1(5,6)

function f2(x,y){
    console.log(Math.pow(x, Math.E))
}
f2(2)

function f3(a,b){
    console.log(Math.pow(a,2) - Math.pow(b,2))
}
f3(3,2)

function f4(a,b){
    console.log(Math.sqrt(Math.pow(a, 2)+Math.pow(b,2)))
}
f4(3,4)

//function f5
function f5(y){
    console.log(Math.pow(y,2) - 2 * y + 4)

}
f5(3);

//Function f6
function f6(a,b) {
    console.log(a - b * (Math.pow(a,2) + Math.pow(b,2)) - a)

}
f6(1,2);

//function f7

function f7(a,b) {
    console.log(2 * (a + b))
}
f7(2,3);

//function f8
function f8(a,b){
    console.log(Math.pow(a + b, 2))
}
f8(10,20);
//function9
function f9(a,b) {
    console.log(Math.pow(a,2) - Math.pow(b,2))

}

f9(10,20);

//function 10
function f10(a,b){
    console.log(a * b)
}

f10(5,6);

//function 11

function f11(a,b) {
    console.log(3 * (Math.pow(a * b)))
}

// factorial 17
function factorial(x) {
    let multiplication = 1; 
    for (let i = 1; i <= x; i++) {
        multiplication = multiplication * i;
    }
    console.log(multiplication);
}

factorial(5);


//p1 p2

function myFunction(p1,p2)
{
    const sum = p1 + p2;
  return sum;
}

console.log(myFunction(2,3));

function isEven(number) 
{   let result = '';

    if(number % 2 == 0) 
    {
      result = "it's even number";
    }
    else 
    {
        result = "it's odd number";
    }
    return result;
}
console.log(isEven(5));
// isEven(5);
// isEven(4);
// isEven(11);

//assignment
//2 ugugdsun toonii hamgiin ihiig olood butsaadag function bichne uu
//findMax

function findMax(a,b) 
{
  
    if(a > b)
    {
        return a;
    }
    else
    {
        return b;
    }
}
console.log(findMax(1,2));
console.log(findMax(100,2));

//expression
let x = function (a,b)
{
    if(a>b)
    {
        return a;
    }
    else
    {
        return b;
    }
};
console.log(x(70, 45));

//arrow function

let too = (a,b) => {
    if(a>b)
    {
        return a;
    }
    else
    {
        return b;
    }
};
console.log(x(70, 80));

//get promts Findmax
// const num1 = Number(prompt('Give me first number'));
// const num2 = Number(prompt('second number'));

// const result = findMax(num1, num2);
// console.log(result);

//array function
let arrayMax = (array) => {

}
