import "./main.css";

// class User {
// 	private name: string;
// 	public age: number;
// 	constructor(name: string, age: number) {
// 		((this.name = name), (this.age = age));
// 	}
// 	eat() {
// 		console.log(`${this.name} is eating`);
// 	}
// }

// const user = new User("John", 30);
// user.name = "John Doe";
// user.age = 31;
// user.eat();

// console.log(user);

class User {
	constructor(
		private name: string,
		public age: number,
	) {}
	eat() {
		console.log(`${this.name} is eating`);
	}
}
const user = new User("John", 30);
user.eat();

console.log(user);
