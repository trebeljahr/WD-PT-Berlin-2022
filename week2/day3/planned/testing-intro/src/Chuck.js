class Chuck {
	constructor() {
		this.firstName = 'Chuck';
		this.lastName = 'Norris';
		this.jokes = [
			'Chuck Norris counted to infinity... Twice.',
			'Chuck Norris is the only man to ever defeat a brick wall in a game of tennis'
		];
	}
	addJoke(joke) {
		this.jokes.push(joke);
	}
	getRandomJoke() {
		return this.jokes[Math.floor(Math.random() * this.jokes.length)];
	}
}

if (typeof module !== undefined) {
	module.exports = Chuck;
}