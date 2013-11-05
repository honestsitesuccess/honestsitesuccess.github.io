// Shopping List for Mike Harmanos, Honest Site Success.com, 2013

var form = document.getElementById('storelist');

form.onsubmit = checkscript;

function checkscript (e) {
    var item = document.getElementById('item').value;
    var date = document.getElementById('date').value;
    var store = document.getElementById('store').value;
    if (item == "") {
		// no item listed
		alert('Please insert an item.');
		return false;
	} else if (date == "") {
		// no date listed
		alert('Please insert a date.');
		return false;
	}
    //Execute whatever code comes next
    nextStep(item,date,store)
	return false;
}

function nextStep(item, date, store){
    alert('Thanks! You want: '+item+" on "+date+' from ' +store);
	addItem();
}

//create the list
function addItem () {
	userEntry = document.storelist.item.value; + document.storelist.store.value + document.storelist.date.value;
	paragraph = document.createElement("p");
	paragraph.className = "added";
	newItem = userEntry.appendChild(paragraph);
	newitem.innerHTML = userEntry;
	$('#items p:last-child').append("<span class='delete-item' style='display:none;'>Delete</span>");

}