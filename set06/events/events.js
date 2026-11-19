const EventEmitter = require('events');
const emitter = new EventEmitter();

// listener
emitter.on('log', (msg) => {
  console.log('LOG EVENT:', msg);
});

emitter.on('error2', (msg) => {
  console.log('ERROR EVENT:', msg);
});

// trigger them
emitter.emit('log', 'Application started');
emitter.emit('log', 'User opened dashboard');
emitter.emit('error2', 'Database not reachable');
