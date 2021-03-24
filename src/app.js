const yargs = require("yargs");
const {addOrder, listOrders, removeOrder} = require("../utils/orders");


const command = process.argv[2];

if (command == "add"){
    console.log("Adding new coffee order:");
    console.log(yargs.argv.order);
    addOrder(yargs.argv.order);

} else if (command == "remove"){
    console.log("Removing order from list:");
    console.log(yargs.argv.order);
    removeOrder(yargs.argv.order);

} else if (command == "list"){
    console.log("Displaying all orders below:");
    listOrders();

} else {
    console.log("Invalid input");
};