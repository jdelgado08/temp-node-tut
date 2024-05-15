const {readFileSync, writeFileSync, readFile} = require('fs')

const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')


writeFileSync (
    './content/resultSync.txt', 
    `Here is the result ${first}, ${second}`,
    {flag : 'a'}
)
