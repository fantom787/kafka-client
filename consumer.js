const {kafka} = require("./client")


async function init(){
    const consumer = kafka.consumer({groupId : "group-1"});
    consumer.connect();

    await consumer.subscribe({topic : "rider-updates", fromBeginning : true});

    await consumer.run({
        eachMessage : async ({topic, partition, message, heartbeat, pause}) => {
            console.log(`topic : ${topic}, partition : ${partition}, message : ${message.value.toString()}`)
        }
    });
}

init();