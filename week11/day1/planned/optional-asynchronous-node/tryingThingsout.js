const slow = new Promise((resolve) => setTimeout(() => resolve("slow"), 3000));
const fast = new Promise((resolve) => setTimeout(() => resolve("fast"), 10));

Promise.all([slow, fast]).then((results) => console.log(results));
// logs: [ 'slow', 'fast' ]
