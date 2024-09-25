const {kafka} = require("./client")

async function init(){
    const producer = kafka.producer();

    console.log("Connecting Producer....");
    await producer.connect();
    console.log("Producer Connect Success !!");

    await producer.send({
        topic : "rider-updates",
        messages : [{
            key : "location-update",
            value : JSON.stringify({
                name : "Ambuj Kumar",
                location : "SOUTH",
                partition : 0
            })
        }]
    });

    await producer.disconnect();
}

init();