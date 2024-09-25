const {kafka} = require("./client")

async function init ()
{
    const admin = kafka.admin();
    console.log("Admin Connecting ....");
    admin.connect();
    console.log("Admin Connected !!");

    console.log("Creating Topic - rider-updates");
    await admin.createTopics({
        topics : [{
            topic : "rider-updates",
            numPartitions : 2
        }]
    });
    console.log("Topic Created Success!!");
    
    console.log("Disconnecing Admin....");
    admin.disconnect();
    console.log("Disconnecing Admin Success !!");
}

init();