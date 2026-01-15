const names = ["Nancy", "Blessing", "Jorge", "Svetlana", "Bob"];

const nameLengths = names.map((name) => name.length);

console.log(nameLengths);


const filteredNames = names.filter((name) => name.length > 5);

console.log(filteredNames);

const totalLength = nameLengths.reduce((total, length) => total + length);

console.log(totalLength);

