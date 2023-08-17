function format(input, type) {
	const output = document.getElementById("text-input");
	if(input.type === "submit") {
		input.classList.toggle("bg-cyan-400");
		input.classList.toggle("hover:bg-transparent");
	}

	switch(type) {
		case "bold":
			output.classList.toggle("font-bold");	
			break;
		case "italic":
			output.classList.toggle("italic");
			break;
		case "underline": 
			output.classList.toggle("underline");
			break;
		case "left":
			output.classList.toggle("text-left");
			break;	
		case "center":
			output.classList.toggle("text-center");
			break;
		case "right":
			output.classList.toggle("text-right");
			break;
		case "justify":
			output.classList.toggle("text-jusitfy");
			break;
	}
}

function disableExcept(btnsArr, alignType) {
	defTypes = ["left", "center", "right", "justify"];
	let output = document.getElementById("text-input");
	for(let i = 0; i < defTypes.length; i++) {
		if(alignType !== defTypes[i]) {
			const btn = document.getElementById(btnsArr[i]);
			output.classList.remove(`text-${defTypes[i]}`);
			btn.classList.remove("bg-cyan-400");
			btn.classList.remove("hover:bg-transparent");
		}	
	}
}

const boldBtn = document.getElementById("bold-btn");
boldBtn.addEventListener("click", () => {
	format(boldBtn, "bold");
})

const italicBtn = document.getElementById("italic-btn");
italicBtn.addEventListener("click", () => {
	format(italicBtn, "italic");
})

const underlineBtn = document.getElementById("underline-btn");
underlineBtn.addEventListener("click", () => {
	format(underlineBtn, "underline");
}) 

const alignBtns = ["align-left-btn", "align-center-btn", "align-right-btn", "align-justify-btn"];
const types = ["left", "center", "right", "justify"];

for(let i = 0; i < alignBtns.length; i++) {
	const currBtn = document.getElementById(alignBtns[i]);
	currBtn.addEventListener("click", () => {
		format(currBtn, types[i]);
		disableExcept(alignBtns, types[i]);
	})
}
