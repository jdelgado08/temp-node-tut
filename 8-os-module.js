const { log } = require('console')
const os = require('os') //no ./ so node knows he using build-in module

//info about current user
const user = os.userInfo()

//method returns system uptime in seconds

console.log(`The System uptime is ${os.uptime()} seconds`);

const currentOs = {
    name : os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem : os.freemem(),
}

console.log(currentOs);