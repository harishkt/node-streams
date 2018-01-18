const { Readable } = require('stream');

const myReadable = new Readable({
	read(size) {
		this.push(String.fromCharCode(this.currentNum++));
		if (this.currentNum > 1000) {
			this.push(null);
		}
	}
});

myReadable.currentNum = 0;
myReadable.pipe(process.stdout);