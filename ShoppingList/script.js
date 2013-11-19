// Shopping List for Mike Harmanos, Honest Site Success.com, 2013

$(document).ready(function() {
	var input = document.getElementById('submit');


	input.onclick = checkscript;

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
	// event.preventDefault();
	var check = $("<input type='checkbox' />");
	var item = document.getElementById('item').value;
    var date = document.getElementById('date').value;
    var store = document.getElementById('store').value;
    // Create one full item to add.  
    var completeItem = $("#itemsAdded").append(check).append(item).append(date).append(store);
    
    // Add new items to the list

    var itemRoot = $("#itemsAdded");
    itemRoot.prepend(completeItem);
	
	// Click handler for link.
	$("#add").on('click', addItem);

function deleteitem (event) {
	//click the checkbox to remove item
	//click the Delete Checked button to remove checked items
	$(completeItem).prop('checked',true);
	$('.addItem').addClass('checked');
}

	$(completeItem).prop('checked',false);
	$('.addItem').deleteClass('checked');
} 

//Toggle checked and unchecked classes when checkbox selected
	this.check = function () {
    $(check).prop('checked',true);
    $('.addItem').addClass('checked');
  }

  this.uncheck = function () {
    $(check).prop('checked',false);
    $('.addItem').removeClass('checked');
  }

}

});