const sayHello = function (name) {
  console.log("Hello, " + name);
}

sayHello("Gabi")

const returnSayHello = function (name) {
  return "Hello, " + name;
}

const greeting = returnSayHello('Orion');
console.log(greeting);