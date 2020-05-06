
(function(){
var menuToggleBtn = document.querySelector(".mobile_menu_toggle");

menuToggleBtn.addEventListener("click", menuToggle);

function menuToggle(){
	var mobile_menu = document.querySelector(".nav");

	if (mobile_menu.classList) {
		mobile_menu.classList.toggle("open");
	} else {
	// For IE9
	var classes = mobile_menu.className.split(" ");
	var i = classes.indexOf("open");

	if (i >= 0)
    	classes.splice(i, 1);
    else
    	classes.push("open");
    	mobile_menu.className = classes.join(" ");
	}
}

var cate_detail_toggle = document.querySelectorAll(".cate_item_title");

for (i = 0; i<cate_detail_toggle.length; i++) {
	cate_detail_toggle[i].addEventListener("click", cateDetailToggle);
}

function cateDetailToggle(){
	var self = this;
	var target = self.nextElementSibling;
	if (target.classList) {
		target.classList.toggle("open");
	} else {
	// For IE9
	var classes = target.className.split(" ");
	var i = classes.indexOf("open");

	if (i >= 0)
    	classes.splice(i, 1);
    else
    	classes.push("open");
    	target.className = classes.join(" ");
	}
}

var favoricon = document.querySelectorAll('.favorite');

for (i = 0; i<favoricon.length; i++) {
	favoricon[i].addEventListener("click", favorChangeStatus);
}

function favorChangeStatus() {
	var self = this;
	if (self.className.indexOf('icon-heart-o')>-1) {
		self.className = 'icon icon-heart favorite';
	} else {
		self.className = 'icon icon-heart-o favorite';
	}
}

var orderNumber = document.querySelector(".item_number");
var orderNumberValue = 0;
orderNumber.innerHTML = orderNumberValue;

orderNumber.addEventListener("click", resetOrders)

function resetOrders() {
	orderNumberValue = 0;
	orderNumber.innerHTML = orderNumberValue;
}

var addOrderBtn = document.querySelectorAll(".putin_cart");
for (i = 0; i<addOrderBtn.length; i++) {
	addOrderBtn[i].addEventListener("click", addOrderNumber);
}

function addOrderNumber(){
	orderNumberValue = orderNumberValue + 1;
	orderNumber.innerHTML = orderNumberValue;
}
})();