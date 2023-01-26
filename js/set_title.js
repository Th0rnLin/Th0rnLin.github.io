function set_title() {
	let titles = ["I'M A GUY\nWHO'S A HERO FOR FUN.",
				  "ALL IS WELL.",
				  "IF YOU HAVE DREAM\nYOU CAN DO IT.",
				  "CHASE EXCELLENCE,\nSUCCESS WILL FOLLOW."];
	let index = 0;
	let rnd = Math.floor(Math.random() * titles.length);

	function type() {
		document.getElementById('set_title').textContent = titles[rnd].substring(0, ++index);
	}
	setInterval(type, 100);
}
set_title()