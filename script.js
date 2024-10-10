// Shuffle handwritten text
function shuffleText() {
	for (let elmnt of document.querySelectorAll('[data-shuffle]')) {
		let temp = "";
		for (let letter of elmnt.innerText) {
			temp += `<span style="font-variation-settings: 'SCRI' ${Math.round(Math.random()*1000)}, 'SCRA' ${Math.round(Math.random()*1000)};">${letter}</span>`;
		}
		elmnt.innerHTML = temp;
	}
}
shuffleText();

// Animate handwritten text
function animateText() {
	for (let elmnt of document.querySelectorAll('[data-animate]')) {
		let temp = "";
		for (let letter of elmnt.innerText) {
			temp += `<span style="position: relative; font-variation-settings: 'SCRI' ${Math.round(Math.random()*1000)}, 'SCRA' ${Math.round(Math.random()*1000)};">${letter}</span>`;
		}
		elmnt.innerHTML = temp;
	}
	setInterval(() => {
		for (let span of document.querySelectorAll('[data-animate] span')) {
			span.style.fontVariationSettings = `"SCRI" ${Math.round(Math.random()*1000)}, "SCRA" ${Math.round(Math.random()*1000)}`;
			span.style.bottom = Math.random()*.1-.05 + "em";
		}
	}, 200)
}
animateText();

// Shuffle arrays helper function
function shuffle(array) {
	let currentIndex = array.length;
  
	// While there remain elements to shuffle...
	while (currentIndex != 0) {
  
		// Pick a remaining element...
		let randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;
	
		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
	}
}  

// Header background
function generateHeaderBackgroundElement() {
	// Initialize element
	const word = document.createElement("div");
	word.style.top = `${Math.random()*100}%`;
	word.style.left = `${Math.random()*100}%`;
	word.style.transform = `rotate(${Math.random()*90-45}deg) translate(-50%, -50%)`;

	// Generate letters
	let temp = "";
	for (let letter of "YOUNG KRONES") {
		if (letter == " ") {
			letter = "&nbsp;&nbsp;&nbsp;";
		}
		let color = "var(--dark)";
		if (Math.random() < .5) {
			color = "var(--secondary)";
		}
		temp += `<span style="color: ${color}; transform: translate(${Math.random()*25-12.5}%, ${Math.random()*25-12.5}%)">${letter}</span>`;
	}
	word.innerHTML = temp;

	// Add to DOM
	const homeHeaderBackground = document.querySelector('.home-header-background');
	homeHeaderBackground.appendChild(word);

	// Transition in
	for (let letter of word.querySelectorAll('span')) {
		setTimeout(() => {
			letter.style.opacity = 1;
		}, Math.random()*1000)
	}

	// Transition out
	setTimeout(() => {
		for (let letter of word.querySelectorAll('span')) {
			setTimeout(() => {
				letter.style.opacity = 0;
			}, Math.random()*1000)
		}
	}, 3000)

	// Remove element
	setTimeout(() => {
		word.remove();
	}, 8000)
}
setInterval(generateHeaderBackgroundElement, 100);

// Generate marquees
let marqueeTags = [
	"Parties",
	"Gender Insubordination",
	"Being Young and Old",
	"Architectural change",
	"POWER",
	"Sensology",
	"Moving the Audience Around",
	"Micro-audience performance",
	"Manifestos",
	"You Can’t Pay the Bills with Feelings",
	"The Bastard Postmodern Tradition",
	"Rogers Park",
	"Snake Oil",
	"Kroniform",
	"Site-specific theater",
	"ASSEMBLYWOMXN",
	"A DRAMA IN ROGERS PARK",
	"hate/lab",
	"The Kave",
	"j baby",
	"W Krone",
	"Calvin DuFloth",
	"Bonc Krone",
	"Hibachi Theater",
	"Maximalism",
	"a little something for everybody or one particular thing for somebody",
	"Disruption",
	"Do your duty for art",
	"Lore",
]
function generateMarquees() {
	for (let marquee of document.querySelectorAll('.home-marquee')) {
		let temp = "";
		shuffle(marqueeTags);
		for (let tag of marqueeTags) {
			temp += `<div>${tag}</div><div class="home-marquee-spacer"></div>`;
		}
		marquee.innerHTML = `<div class="home-marquee-section">${temp}</div><div class="home-marquee-section">${temp}</div>`;
	}
}
generateMarquees();