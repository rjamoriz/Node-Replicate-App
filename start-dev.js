import { exec } from 'child_process';

// Print the test message
console.log('test');

// Start nodemon
const nodemonProcess = exec('nodemon index.js');

// Automatically terminate nodemon after 10 seconds (10000 milliseconds)
setTimeout(() => {
  nodemonProcess.kill();
  console.log('Nodemon terminated automatically after 10 seconds');
}, 10000);

// Optionally, you can listen for nodemon output
nodemonProcess.stdout.on('data', (data) => {
  console.log(data.toString());
});

nodemonProcess.stderr.on('data', (data) => {
  console.error(data.toString());
});