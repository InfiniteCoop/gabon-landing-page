function iconHover() {
	var image1 = document.getElementById("map-icon");
	var image2 = document.getElementById("plan-icon");
	var image3 = document.getElementById("docs-icon");

	var link1 = document.getElementById("mapLink");
	var link2 = document.getElementById("planLink");
	var link3 = document.getElementById("docsLink");

	// if (!("ontouchstart" in document.documentElement) && 
	// 	! (navigator.maxTouchPoints > 0) &&
	// 	! (navigator.msMaxTouchPoints > 0) ){

	link1.addEventListener("mouseover", function(){
		image1.src="img/map-icon-active.svg";}, false);
	link1.addEventListener("mouseout", function(){
		image1.src="img/map-icon.svg";}, false);
	link2.addEventListener("mouseover", function(){
		image2.src="img/plan-icon-active.svg";}, false);
	link2.addEventListener("mouseout", function(){
		image2.src="img/plan-icon.svg";}, false);
	link3.addEventListener("mouseover", function(){
		image3.src="img/docs-icon-active.svg";}, false);
	link3.addEventListener("mouseout", function(){
		image3.src="img/docs-icon.svg";}, false); 
};

//Set language and update URL hash
function langtoggle(l){

	if (l == 'en' ){
		local_lang = lang.en,
		local_link = link.en
		window.location.hash = "#l=en";
	}

	else if (l == 'fr') {
		local_lang = lang.fr,
		local_link = link.fr
		window.location.hash = "#l=fr";
	}	

	for(var key in local_lang) {
		document.getElementById(key).innerHTML = local_lang[key];
	}
	for(var key in local_link) {
		document.getElementById(key).href = local_link[key];
	}
}

//Check URL hash; set appropriate page language.
function loadLanguage() {

	var domain = window.location.origin.split(".")[1];
	var hash = window.location.hash;

	if (hash == '#l=en') {
		langtoggle('en')
	}
	else {
		langtoggle('fr')
	}
}

//Generate flag link/image from country JS file
function generateFlag() {

	var flagContainer = document.getElementById('flag');

	var newLink = document.createElement('a');
	var newImg = document.createElement('img');

	newLink.href = flag["href"];
	newImg.setAttribute('src',flag["src"]);
	newImg.className += " img-responsive";

	newLink.appendChild(newImg);
	flagContainer.appendChild(newLink);
}

//Generate background image from country JS file
function generateBcgImg() {
document.getElementById('intro').style.background = bcgImage["src"];
}


//Generate sponsor logos from country JS file
function generateAppLogos() {

	var appLogoContainer = document.getElementById('AppLogos');

	for(var key in apps) 
	{
		var app = apps[key];
		var newDiv = document.createElement('div');
		var newLink = document.createElement('a');
		var newImg = document.createElement('img');
		newDiv.setAttribute('id',key);
		newDiv.className += "col-xs-6" + " col-lg-3" + " appIcon";
		newLink.href = app["href"];
		newLink.target = "_blank";
		newImg.className += " img-responsive";
		newImg.setAttribute('id',key);
		newImg.setAttribute('src',app["src"]);
		newImg.setAttribute('alt',app["alt"]);
		
		newLink.appendChild(newImg);
		newDiv.appendChild(newLink);
		appLogoContainer.appendChild(newDiv);

		//Trigger hover events
		newImg.addEventListener("mouseover", function(){
			var divSource = $(this).closest('div').attr('id');
			this.setAttribute('src', apps[divSource]["srcActive"])}, false);

		newImg.addEventListener("mouseout", function(){
			var divSource = $(this).closest('div').attr('id');
			this.setAttribute('src', apps[divSource]["src"])}, false);
}
};


//Generate partner logos from country JS file
function generatePartnerLogos() {

	var logoContainer = document.getElementById('PartnerLogos');

	for(var key in partners) 
	{
		var partner = partners[key];
		var newDiv = document.createElement('div');
		var newLink = document.createElement('a');
		var newImg = document.createElement('img');
		newDiv.setAttribute('id',key);
		newDiv.className += "col-xs-6" + " col-md-4" + " col-lg-3";
		newLink.href = partner["href"];
		newImg.className += " img-responsive";
		newImg.setAttribute('src',partner["src"]);
		newImg.setAttribute('alt',partner["alt"]);

		newLink.appendChild(newImg);
		newDiv.appendChild(newLink);
		logoContainer.appendChild(newDiv);
	}
}

window.addEventListener("DOMContentLoaded", function() {
	loadLanguage();
	generateFlag();
	generateBcgImg();
	iconHover();
	generateAppLogos();
	generatePartnerLogos();
}, false);

SocialShareKit.init();

$('.carousel').carousel({
	interval: 3000
});