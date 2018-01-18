/*
const fs = require('fs');
const file = fs.createWriteStream('./big.file');

for(let i=0; i<= 5e6; i++) {
	file.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n');
}

file.end();*/

/*const { Writable, Readable } = require('stream');
const fs = require('fs');
const readStream = fs.createReadStream('./big.file');
const myWriteStream = new Writable({
	write(chunk, encoding, callback) {
		console.log('called white');
		callback();
	}
});

myWriteStream.on('close', () => {
	console.log('Close event is called on MyWriteStream');
});
myWriteStream.on('drain', () => {
	console.log('Drain event is called on MyWriteStream');
});
myWriteStream.on('error', () => {
	console.log('error event is called on MyWriteStream');
});
myWriteStream.on('finish', () => {
	console.log('finish event is called on MyWriteStream');
});
myWriteStream.on('pipe', () => {
	console.log('pipe event is called on MyWriteStream');
});
myWriteStream.on('unpipe', () => {
	console.log('unpipe event is called on MyWriteStream');
});
myWriteStream.on('cork', () => {
	console.log('cork event is called on MyWriteStream');
});
myWriteStream.on('end', () => {
	console.log('end event is called on MyWriteStream');
});
myWriteStream.setDefaultEncoding('utf8');
myWriteStream.on('uncork', () => {
	console.log('uncork event is called on MyWriteStream');
});
console.log(`HighWaterMark for writable - ${myWriteStream.writableHighWaterMark}`);
readStream.on('data', () => {
	console.log('data event is called on ReadStream');
})
readStream.pipe(myWriteStream);*/

/*
myStream.on('finish', function(){
	console.log('Write event is closed', this);
});
myStream.write('some data');
myStream.write('some more data');
myStream.end('done writing data');*/
