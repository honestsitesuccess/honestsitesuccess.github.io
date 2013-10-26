// Shopping List for Mike Harmanos, Honest Site Success.com, 2013

$(document).ready(function() {
	form action="something.pl" onsubmit="return script()"

function checkscript() {
	if (some value is/is not something) {
		// something is wrong
		alert('alert user of problem');
		return false;
	}
	else if (another value is/is not something) {
		// something else is wrong
		alert('alert user of problem');
		return false;
	}

	// If the script makes it to here, everything is OK,
	// so you can submit the form

	return true;
}

if (document.forms[0].checkbox.checked) {
	user_input = document.forms[0].checkbox.name
}

}