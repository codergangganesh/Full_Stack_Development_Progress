function add(n1,n2){
    return n1+n2;
}
function multiplication(n1,n2){
    return n1*n2;
}
function division(n1,n2){
    return n1/n2;
}
function remainder(n1,n2){
    return n1%n2;
}

function subtraction(n1,n2){
    return n1-n2;
}
function calculator(n1,n2,operator){
    return operator(n1,n2);
}

console.log(calculator(4,2,add));

const fruits = ["apple", "banana", "cherry"];

fruits.forEach(function(fruit) {
  console.log(fruit);
});
