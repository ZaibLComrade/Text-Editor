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
	}
}

const boldBtn = document.getElementById("bold-btn");
boldBtn.addEventListener("click", () => {
	format(boldBtn, "bold");
})
