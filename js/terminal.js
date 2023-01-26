function response(inp) {
	let dict = {
		'notice': '<a>╔════╦╗─╔╦═══╦═══╦═╗─╔╦╗──╔══╦═╗─╔╦╦╦╗</a><br>\
                   <a>║╔╗╔╗║║─║║╔═╗║╔═╗║║╚╗║║║──╚╣╠╣║╚╗║║║║║</a><br>\
                   <a>╚╝║║╚╣╚═╝║║─║║╚═╝║╔╗╚╝║║───║║║╔╗╚╝║║║║</a><br>\
                   <a>──║║─║╔═╗║║─║║╔╗╔╣║╚╗║║║─╔╗║║║║╚╗║╠╩╩╝</a><br>\
                   <a>──║║─║║─║║╚═╝║║║╚╣║─║║║╚═╝╠╣╠╣║─║║╠╦╦╗</a><br>\
                   <a>──╚╝─╚╝─╚╩═══╩╝╚═╩╝─╚═╩═══╩══╩╝─╚═╩╩╩╝</a><br>\
                   Welcome to my website!<br>\
                   Want to know more commands, type "<a style="color: red">HELP</a>".',
		'config': '<a style="white-space:pre">Author     -> Thorn Lin.</a><br>\
                   <a style="white-space:pre">Country    -> Taiwan.</a><br>\
                   <a style="white-space:pre">Education  -> National Chin-Yi University of Technology.</a><br>\
                   <a style="white-space:pre">Major      -> Department of Computer Science and Information Engineering.</a><br>\
                   <a style="white-space:pre">Interests  -> ["Coding", "Animation", "Movie", "Music", "Cooking", "Baseball?"]</a><br>\
                   <a style="white-space:pre">Skills     -> ["Python", "C/C++", "Verilog", "HTML/CSS/JS", "Git", "Linux"]</a><br>\
                   <a style="white-space:pre">Researches -> ["Artificial Intelligence", "Digital IC Design"]</a><br>',
		'logb': '<a href="https://hackmd.io/@th0rnlin/BkMWddTso" class="logb">ChipNet: Real-Time LiDAR Processing for Drivable Region Segmentation on an FPGA.</a><br>',
		'contact': 'E-Mail: <a href="mailto: th0rnlin1412@gmail.com" style="color: red">th0rnlin1412@gmail.com</a>.<br>\
                    GitHub: <a href="https://github.com/Th0rnLin" style="color: red">https://github.com/Th0rnLin</a>.',
		'pi': '3.14159265358979323846...',
		'e': '2.718281828459045...',
		'infinitas': 'NO COMMENT......',
	};

	if (inp.toLowerCase() == 'help') {
		return '<a style="white-space:pre">notice   -> Display some cool fonts and some FUCKING words. Just like the header.</a><br>\
				<a style="white-space:pre">about    -> Tell you about me.</a><br>\
                <a style="white-space:pre">config   -> List out ideas for when there is nothing to talk about.</a><br>\
                <a style="white-space:pre">logb     -> Still under construction</a><br>\
				<a style="white-space:pre">contact  -> Do not contact me!!!</a><br>\
                <a style="white-space:pre">pi       -> The constant that must be used when explaining the <a href="https://en.wikipedia.org/wiki/Universe" style="color: red">UNIVERSE</a>!!!</a><br>\
                <a style="white-space:pre">e        -> ERROR 404</a><br>\
                <a style="white-space:pre">infinitas-> NO COMMENT......0.0</a><br>\
				<a style="white-space:pre">clear    -> CLEAR ALL</a>';
	}  else if (dict[inp.toLowerCase()] === undefined) {
		return 'Want to know more commands, type "<a style="color: red">HELP</a>" or open "<a style="color: red" href="./document.html">DOCUMENT</a>".';
	} else {
		return dict[inp.toLowerCase()];
	}
}

function scroll2Bottom() {
	let el = document.getElementById('terminal');
	el.scrollTop = el.scrollHeight;
}

function terminal() {
	let history = document.getElementById('history');
	let command = document.getElementById('command');

	function pressEnter(event) {
		if (event.keyCode == 13) {
			if(command.value.toLowerCase() == 'clear') {
				history.innerHTML = '';
			} else if (command.value.toLowerCase() == 'about') {
				window.open('./about.html', '_blank').location;
				history.innerHTML = history.innerHTML + '<a class="liner-guest">guest</a><a class="liner-sign">@</a><a class="liner-URL">Th0rnLin.github.io</a><a class="liner-sign">: ~ %</a> ' + command.value + '<br>';
			} else {
				history.innerHTML = history.innerHTML + '<a class="liner-guest">guest</a><a class="liner-sign">@</a><a class="liner-URL">Th0rnLin.github.io</a><a class="liner-sign">: ~ %</a> ' + command.value + '<br>';
				history.innerHTML = history.innerHTML + response(command.value) + '<br>' + '<br>';	
			}
			command.value = '';
			scroll2Bottom();
		}
	}
	command.addEventListener('keydown', pressEnter);
}
terminal();