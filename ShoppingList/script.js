// Shopping List for Mike Harmanos, Honest Site Success.com, 2013

$(document).ready(function() {
	var input = document.getElementById('submit');


	input.onclick = checkscript;

function checkscript (e) {
    var item = document.getElementById($.trim('item')).value;
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
//    alert("Thanks! You want: "+item+" on "+date+" from " +store);
	addItem();
}

//create the list
function addItem (event) {
	var check = $("<input type='checkbox' />"); //creates the checkbox
	var listitem = $("<div class='listitem'></div>"); //creates a div to wrap all items in one string
	var item = document.getElementById('item').value; //what am I buying?
    var date = document.getElementById('date').value; //when am I buying it?
    var store = document.getElementById('store').value; //where am I buying it?
    // Create one full item to add.  
    listitem.append(check).append(item+"  ").append(date+"  ").append(store);  //by adding as one div class, we can then style the entire string when we make changes to it.
    $("#itemsAdded").prepend(listitem);
    // Add new items to the list
    check.on('click',deleteitem); //How we start removing items.  Once they are in the basket, we can then click on the checkbox to mark it off the list.
}

function deleteitem (event) {
//Toggle checked and unchecked classes when checkbox selected
    $(this).parent().toggleClass("checked"); //Gives ability to toggle items we have and don't have, but don't want to delete them entirely
    var deleteAll = document.getElementById('deleteallbutton'); //Look for the delete button
    deleteAll.onclick = deleteAllItems;
}

function deleteAllItems (event) {
	if (confirm('Are you sure you want to remove the selected items from the list?')){ //Last chance to review deletions
		$(".checked").remove(); //Adios, amigos!
	}
}

});