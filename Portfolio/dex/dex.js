//this for html body
document.getElementById('home').onclick = function() {$d()};

function $d() {
	home.class = "home active";
	par.class = "projects-and-research";
	doc.class = "doc";
	$2.style.display = "block";
	$3.style.display = "none";
	$4.style.display = "none";
}


document.getElementById('par').onclick = function() {$e()};

function $e() {
	home.class = "home";
	par.class = "projects-and-research active";
	doc.class = "doc";
	$2.style.display = "none";
	$3.style.display = "block";
	$4.style.display = "none";
}

document.getElementById('doc').onclick = function() {$f()};

function $f() {
	home.class = "home";
	par.class = "projects-and-research";
	doc.class = "doc active";
	$2.style.display = "none";
	$3.style.display = "none";
	$4.style.display = "block";
}



/**/