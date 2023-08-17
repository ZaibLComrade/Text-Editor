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
