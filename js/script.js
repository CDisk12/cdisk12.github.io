function inf() {
    document.getElementById("inf").classList.add("active");

    document.getElementById("img").classList.remove("active");
    document.getElementById("imp").classList.remove("active");
    document.getElementById("vac").classList.remove("active");

    document.getElementById("information").style.display = 'flex';
    
    document.getElementById("images").style.display = 'none';
    document.getElementById("impound").style.display = 'none';
    document.getElementById("vaccination").style.display = 'none';
}
function img() {
    document.getElementById("inf").classList.remove("active");

    document.getElementById("img").classList.add("active");

    document.getElementById("imp").classList.remove("active");
    document.getElementById("vac").classList.remove("active");

    document.getElementById("information").style.display = 'none';
    
    document.getElementById("images").style.display = 'flex';

    document.getElementById("impound").style.display = 'none';
    document.getElementById("vaccination").style.display = 'none';
}
function imp() {
    document.getElementById("inf").classList.remove("active");
    document.getElementById("img").classList.remove("active");

    document.getElementById("imp").classList.add("active");

    document.getElementById("vac").classList.remove("active");

    document.getElementById("information").style.display = 'none';
    document.getElementById("images").style.display = 'none';
    
    document.getElementById("impound").style.display = 'flex';

    document.getElementById("vaccination").style.display = 'none';
}
function vac() {
    document.getElementById("inf").classList.remove("active");
    document.getElementById("img").classList.remove("active");
    document.getElementById("imp").classList.remove("active");

    document.getElementById("vac").classList.add("active");

    document.getElementById("information").style.display = 'none';
    document.getElementById("images").style.display = 'none';
    document.getElementById("impound").style.display = 'none';

    document.getElementById("vaccination").style.display = 'flex';
}