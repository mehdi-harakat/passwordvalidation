let inp = document.querySelector(".wrapper-container #mainInp");
let eye = document.querySelector(".wrapper-container .fa-regular");
let requarList = Array.from(
	document.querySelectorAll(" .wrapper-container .pass-info .info")
);

eye.addEventListener("click", (e) => {
	if (e.target.classList.contains("fa-eye-slash")) {
		inp.type = "password";
		e.target.className = "fa-regular fa-eye";
	} else if (e.target.classList.contains("fa-eye")) {
		inp.type = "text";
		e.target.className = "fa-regular fa-eye-slash";
	}
});

for (let elem of requarList) {
	elem.firstElementChild.classList.add("fa-xmark");
	elem.lastElementChild.classList.add("done");
}

let regObj = [
	{ reg: /.{10,}/, index: 0 }, // Minimum Of 8 Characters
	{ reg: /[0-9]/, index: 1 }, // At Least One Number
	{ reg: /[a-z]/, index: 2 }, // At Least One Lowercase Letter
	{ reg: /[A-Z]/, index: 3 }, // At least One Uppercase Letter
	{ reg: /[^A-Za-z0-9]/, index: 4 }, // At Least One Special Character
];

inp.addEventListener("keyup", () => {
	regObj.forEach((item) => {
		let isValid = item.reg.test(inp.value); // regObj[...].key.test(inp.value) **Output true or false

		let catcher = requarList[item.index];
		
		if (isValid) {
			catcher.firstElementChild.classList.remove("fa-xmark");
			catcher.firstElementChild.classList.add("fa-check");
			catcher.lastElementChild.classList.remove("done");
		} else {
			catcher.firstElementChild.classList.add("fa-xmark");
			catcher.firstElementChild.classList.remove("fa-check");
			catcher.lastElementChild.classList.add("done");
		}
	});
});
