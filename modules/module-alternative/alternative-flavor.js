//exactly the same as module.exports = { john, peter };

module.exports.items = ["item1", "item2"];

const person = {
  name: "John",
};

module.exports.singlePerson = person;
