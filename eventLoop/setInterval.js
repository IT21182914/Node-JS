setInterval(() => {
  console.log("Hello World");
}, 2000);

console.log("I will run first");
//process stays alive unless
//Kill Process (ctrl + c) or
//Unexpected Error

/* Output:
I will run first
Hello World (repeats every 2 seconds)
Hello World (repeats every 2 seconds)
Hello World (repeats every 2 seconds)
Hello World (repeats every 2 seconds)
Hello World (repeats every 2 seconds)

until process is killed
*/
