const yargs = require("yargs");
const {addNote} = require("../utils/orders");

console.log(process.argv);
console.log(yargs.argv);

const command = process.argv[2];

if (command == "add"){
    console.log("Adding new coffee order:");
    addNote(yargs.argv.order);

    
} else if (command == "remove"){
    console.log("Removing order from list:");
} else if (command == "list"){
    console.log("Displaying orders in list:")
} else {
    console.log("Invalid input");
};

