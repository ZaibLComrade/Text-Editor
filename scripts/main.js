function format(input, value) {
	const output = document.getElementById("text-input");
	if(input.type === "submit") {
		input.classList.toggle("bg-cyan-400");
		input.classList.toggle("hover:bg-transparent");
		switch(value) {
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

	if(input.type === "number") {
		output.style.fontSize = `${value}px`;
	}
	
	if(input.type === "color") {
		output.style.color = value;
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

const types = {
	"align-left-btn": "left",
	"align-center-btn": "center",
	"align-right-btn": "right",
	"align-justify-btn": "justify"
}

for(let i = 0; i < Object.keys(types).length; i++) {
	const currBtn = document.getElementById(Object.keys(types)[i]);
	currBtn.addEventListener("click", () => {
		format(currBtn, Object.values(types)[i]);
		disableExcept(Object.keys(types), Object.values(types)[i]);
	})
}

const numberInp = document.getElementById("number-input");
numberInp.addEventListener("change", () => {
	const value = parseInt(numberInp.value);
	if(value >= 10) format(numberInp, value);
})

const colorInp = document.getElementById("color-input");
colorInp.addEventListener("change", () => {
	const value = colorInp.value;
	format(colorInp, value)
})
