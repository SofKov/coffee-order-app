const fs = require("fs");

const loadOrders = () => {
    try{
        const dataBuffer = fs.readFileSync("src/orders.json");
        const ordersJson = dataBuffer.toString();
        return JSON.parse(ordersJson);    
    } catch (error){
        return [];
    }
};

const saveOrders = (allOrders) => {
    const ordersJson = JSON.stringify(allOrders);
    fs.writeFileSync("src/orders.json", ordersJson);
};

const addOrder = (myOrder) => {
    const allOrders = loadOrders ();
    allOrders.push({orderAdded: myOrder});

    saveOrders(allOrders);
};

const listOrders = () => {
    const allOrders = loadOrders();
    allOrders.map(order => {
        console.log(order);
    });
};

const removeOrder = (orderToRemove) => {
    const allOrders = loadOrders();

    const ordersToKeep = allOrders.filter( order =>{
        return order.orderAdded != orderToRemove;
    });

    saveOrders(ordersToKeep);
};

module.exports = {
    addOrder,
    listOrders,
    removeOrder
};