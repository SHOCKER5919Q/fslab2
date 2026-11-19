const EventEmitter = require('events');
const emitter = new EventEmitter();

// LISTEN for the custom event
emitter.on('userLoggedIn', (user) => {
  console.log('Event received!');
  console.log('User:', user.name);
  console.log('Time:', user.time);
});

// TRIGGER the custom event
emitter.emit('userLoggedIn', { name: 'Saket', time: '10:30 AM' });
emitter.emit('userLoggedIn', { name: 'Arjun', time: '10:45 AM' });
