import "./main.css";
/**           TYPES  HTML Elements  */

/**           DOM VARIABLES  */

const form: HTMLFormElement = document.querySelector("form")!;
const input: HTMLInputElement = document.querySelector("input")!;
const list: HTMLUListElement = document.querySelector("#list")!;

/**           LOGICAL VARIABLES  */
let counter = 1;

/**           HANDLER FUNCTIONS  */

function handleAddTask() {
	form.addEventListener("submit", (e: Event) => {
		e.preventDefault();
		let value = input.value;
		if (counter === 11) {
			input.disabled = true;
			alert(`Your limit is finished!`);
		}
		if (value) {
			list.innerHTML += `
				<li class="flex items-center gap-[30px] justify-between ">${counter++}. <span>${value}</span> <button onclick="this.parentNode.remove()">❌</button></li>

				<hr />
			`;
			form.reset();
		} else {
			return;
		}
	});
}

/**           LOGICAL FUNCTIONS  */

function init() {
	handleAddTask();
}

init();
