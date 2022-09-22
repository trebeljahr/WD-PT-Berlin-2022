# Node JS
Node - Single threaded event-loop based architecture.
but with an asynchrounous non-blocking (and sometimes multithreaded) io-model. 

Is NodeJS single threaded? No. But its event loop is.

## Event Loop
Heart of Node.js, can be seen as an abstraction of how Node.js executes code and runs your application

It must run without interruption and without slowing down, if not your users will become frustrated, because the server doesn't react anymore.

## What is a thread? 
A thread is an execution context the CPU uses so it can switch between handling different tasks.
It's a set of values (the CPU registers) that clearly specifies the exact state the CPU was in, so it can return there at a later time. 
Doing this saving of execution state, allows the CPU to switch between different tasks, by using their different execution contexts, and continue working on them without loosing progress.

book - "thread" -> execution context -> page, line number and word number
friend can read same book, with her own metrics of these, without interfering, you can't both use the book at the same time but you can still read in parrallel, by switching the book after each page let's say. That's how programs in threads can be operated "simultaneously" by a cpu as well. 

## Things that need threads
- all fs (File system) operations, except fs.FSWatcher()
- some functions from Crypto lib
- almost all Zlib functions
- dns.lookup(), dns.lookupService()
