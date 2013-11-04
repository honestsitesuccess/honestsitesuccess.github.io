// Shopping List for Mike Harmanos, Honest Site Success.com, 2013

var form = document.getElementById('storelist');

form.onsubmit = checkscript;

function checkscript (e) {
    var item = document.getElementById('item').value;
    var date = document.getElementById('date').value;
    var store = document.getElementById('store').value;
    if (item == "") {
		// no item listed
		alert ('Please insert an item.');
		return false;
	} else if (date == "") {
		// no date listed
		alert ('Please insert a date.');
		return false;
	}
    //Execute whatever code comes next
    nextStep(item,date,store)
	return true;
}

function nextStep(item, date, store){
    alert ('Thanks! you want: '+item+" on "+date+' from ' +store)
};
//create the list
