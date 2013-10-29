// Shopping List for Mike Harmanos, Honest Site Success.com, 2013

$(document).ready(function() {
	form action="something.pl" onsubmit="return checkscript()"

function checkscript () {
	if (item = " ") {
		// no item listed
		alert ('Please insert an item.');
		return false;
	} else if (date = " ") {
		// no date listed
		alert ('Please insert a date.');
		return false;
	} 
	return true;
}

var item = {
	check: "check",
	item: "item",
	store: "option",
	date: "date"
};

var items = [item];

function printitem(Item) {
	console.log(Item.check + " " + Item.item + " " + Item.option + " " + Item.date);
}

function add(check,item,option,date) {
	items[items.length] = {
		check: check,
		item: item,
		option: option,
		date: date,
	};
}

onclick(onsubmit);
add();

if (document.forms[0].check.checked) {
	var ele = document.getElementById("item");
	ele.style.setProperty("text-decoration", "line-through");
} 



}