/*
# Learning Objectives

- Use anonymous functions with setTimeout
- Use declared functions with setTimeout
- Use functions with setInterval
- Cancel intervals with the clearInterval function
*/

// console.log('Starting the show in 5 seconds...')
//
// let confirmLive = () => {
//   console.log('We are live and broadcasting!')
// }
// setTimeout(confirmLive, 5000)

let interval = setInterval(() => {
  console.log('2 seconds have elapsed')
}, 2000)

setTimeout(() => {
  clearInterval(interval)
}, 7000)
