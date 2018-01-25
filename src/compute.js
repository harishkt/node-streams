const longAssCompute = () => {
	let sum = 0;
	for(let i = 0; i< 1e09; i++ ) {
		sum += i;
	}
	return sum;
};
process.on('message', msg => {
	console.log(`msg is ${msg}`);
	const sum = longAssCompute();
	console.log('sending message from child to parent : We are computing....');
	process.send(sum);
})