const { Worker, isMainThread } = require('worker_threads');
 
const fibonacci = require('./fib')
 
if (isMainThread) {
  const w1 = new Worker(__filename);
  const w2 = new Worker(__filename);
 
  console.log(w1.threadId)
  console.log(w2.threadId)
 
} else {
  console.log('--- WORKER START ---');  
  console.log(fibonacci(45))
  console.log(isMainThread);
  console.log('--- WORKER END ---');
}