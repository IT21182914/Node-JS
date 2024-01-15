//start operating system process
console.log("first");

setTimeout(() => {
  console.log("second");
}, 0);

console.log("third");
//complete and exited operating system process

/*Output:
 first
 third
 second */
