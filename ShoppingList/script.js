// Shopping List for Mike Harmanos, Honest Site Success.com, 2013

$(document).ready(function() {
	var form = document.getElementById('storelist');


form.onsubmit = checkscript;

function checkscript (e) {
    var item = document.getElementById('item').value;
    var date = document.getElementById('date').value;
    var store = document.getElementById('store').value;
    if (item == "") {
		// no item listed
		console.log("Please insert an item.");
		return false;
	} else if (date == "") {
		// no date listed
		console.log("Please insert a date.");
		return false;
	}
    //Execute whatever code comes next
    nextStep(item, date, store);
	return false;
}

function nextStep(item, date, store) {
    alert("Thanks! You want: "+item+" on "+date+" from " +store);
	addItem();
}

//create the list
function addItem () {
	var item = document.getElementById('item').value;
    var date = document.getElementById('date').value;
    var store = document.getElementById('store').value;
	userEntry = item + " " + store + " " + date;
	paragraph = document.createElement("p");
	paragraph.className = "added";
	paragraph.innerHTML = userEntry;
	$('#items').prepend(paragraph);
}

});