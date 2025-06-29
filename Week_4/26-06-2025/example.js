// Example for localStorage and JSON
// set items 2 parameters
//setItem(key, value)
localStorage.setItem("Example", JSON.stringify({ hello: "John", age: 30, dhee: "New York" }));
let get = localStorage.getItem("Example");
console.log(JSON.parse(get));

//removeItem(key)
localStorage.removeItem("Example");
localStorage.removeItem("Details");

let example={
    name:"Ganesh",
    age:20,
    city:"Endluru"
}
localStorage.setItem("person", JSON.stringify(example));
let x = localStorage.getItem("person");
console.log(JSON.parse(x));
