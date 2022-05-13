const fibonacci = require('./fib');
const cluster = require('cluster')
const os = require('os')
const qtd_cpu = require('os').cpus().length
//const qtd_cpu = 1
 
if (cluster.isMaster){
  for(let i=0;i < qtd_cpu;i++){
    const worker = cluster.fork();
    worker.send(`MASTER: envio seu id: ${worker.id}`)
    worker.on('message', (msg) => console.log(`MASTER ouvindo... ${msg}`))
  }
}else{
  //console.log(fibonacci(42));
  cluster.worker.on('message', (msg) => console.log(`WORKER ${cluster.worker.id} ouvindo...(${msg})`))
  process.send(`WORKER: Olá master, eu sou o worker ${cluster.worker.id}`)
}
 
console.log(`qtd_cpu: ${qtd_cpu}`)
console.log(`totalmem: ${os.totalmem()}`)
console.log(`freemem: ${os.freemem()}`)
console.log(`SO: ${os.type()}`) //'Linux' on Linux, 'Darwin' on macOS, and 'Windows_NT'
console.log(os.cpus())