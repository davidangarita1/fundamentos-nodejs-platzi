console.log('Hola mundo');

let i = 0;

setInterval(() => {
	console.log(i);
	i++;

	if (i === 5) {
		clearInterval(i);
	}
}, 1000);