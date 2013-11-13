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
		alert("Please insert an item.");
		return false;
	} else if (date == "") {
		// no date listed
		alert("Please insert a date.");
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
function addItem (event) {
	// Stop link from going anywhere
	event.preventDefault();
	var check = $("<form id='storelist'><input type='checkbox' /></form>");
	var item = document.getElementById('item').value;
    var date = document.getElementById('date').value;
    var store = document.getElementById('store').value;
    // Create one full item to add.  
    var completeItem = $(checkbox).append(item).append(date).append(store);
    
    // Add new items to the list

    var itemRoot = $("#itemsAdded");
    itemRoot.prepend(completeItem);
	
	// Click handler for link.
	$("#add").on('click', addItem);
}

});