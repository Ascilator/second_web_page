function show_0 () {
	var temp = document.getElementById(0);
	if(temp.className==="accordion_item"){
		temp.className += " active";

		temp = document.getElementById(1);
		temp.className = "accordion_item";
		temp = document.getElementById(2);
		temp.className = "accordion_item";
	} else {
		temp.className = "accordion_item";
	}
}
function show_1 () {
	var temp = document.getElementById(1);
	if(temp.className==="accordion_item"){
		temp.className += " active";
		temp = document.getElementById(0);
		temp.className = "accordion_item";
		temp = document.getElementById(2);
		temp.className = "accordion_item";
	} else {
		temp.className = "accordion_item";
	}
}

function show_2 () {
	var temp = document.getElementById(2);
	if(temp.className==="accordion_item"){
		temp.className += " active";
		temp = document.getElementById(1);
		temp.className = "accordion_item";
		temp = document.getElementById(0);
		temp.className = "accordion_item";
	} else {
		temp.className = "accordion_item";
	}
}

var current_index = 1;
function plus(n) {
	show(current_index+=n);
}
var slides = document.getElementsByClassName('comment_item___');
for(i = 1; i < slides.length; i++){
		slides[i].style.display = "none";
}
function show(n) {
	var i;

	if(n > slides.length){
		current_index = 1;
	}
	if(n < 1){
		current_index = slides.length;
	}
	for(i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}
	slides[current_index-1].style.display = "flex";

}

function BURGER(){

	var menu_burger = document.getElementById('menu');
	var logo = document.getElementById('Mogo');
	

	if(menu_burger.className === 'top_nav'){
		menu_burger.className += ' responsive';
		logo.style.display = 'none';

	} else {
		menu_burger.className = 'top_nav';
		logo.style.display = 'flex';
	}
}
/*
document.addEventListener("DOMContentLoaded", TROYAN);
function TROYAN() {

	var back = document.getElementById('back');
	var header = document.getElementById('head');
	var main = document.getElementById('main');
	var body = document.getElementById('body');
	back.style.display = 'none';
	main.style.display = 'none';
	head.style.display = 'none';
	var str = '<div id="id1"> <img src = \'img/WN5rupgI3gE.jpg\'> </div>';
    body.innerHTML += str;
	text();
}

function text(){
	var cumtent = document.getElementById('id1');
	revent = cumtent.addEventListener('onclick', back___);

	
	
}
function  back___(revent){
	console.log('asdfasdf')
	var back = document.getElementById('back');
	var header = document.getElementById('head');
	var main = document.getElementById('main');
	var body = document.getElementById('body');
	back.style.display = 'block';
	main.style.display = 'block';
	head.style.display = 'block';
}*/