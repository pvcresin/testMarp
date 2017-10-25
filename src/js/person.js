export default class Person {
	constructor(name) {
		this.name = name;
	};
	hello() {
		console.log(`My name is ${this.name}.`);
	};
}