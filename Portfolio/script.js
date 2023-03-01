function $bgcolor() {
	let checkbox = document.getElementById('box');
	let $0 = document.getElementById('$0');
	let $1 = document.getElementById('$1');
	if (checkbox.checked == true) {
		document.body.style.backgroundColor = '#141414';
		document.body.style.transition = "all 1s";
		$0.style.display = "none";
		$1.style.display = "block";
	} else {
		document.body.style.backgroundColor = "#ffffff";
		document.body.style.transition = "all 1s";
		$0.style.display = "block";
		$1.style.display = "none";
	}
}

