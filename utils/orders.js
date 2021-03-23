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

const saveOrders = (allOrder) => {
    const ordersJson = JSON.stringify(allOrders);
    fs.writeFileSync("src/orders.json", ordersJson);
};

const addOrder = (myOrder) => {
    const allOrders = loadOrders ();
    allOrders.push({order: myOrder});

    saveOrders(allOrders);
};



module.exports = {
    addOrder,
};