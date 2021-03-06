// ----------- reservation form ----------//
$('#contact-form').bootstrapValidator({
//        live: 'disabled',
message: 'This value is not valid',
feedbackIcons: {
	valid: 'glyphicon glyphicon-ok',
	invalid: 'glyphicon glyphicon-remove',
	validating: 'glyphicon glyphicon-refresh'
},
fields: {
	Name: {
		validators: {
			notEmpty: {
				message: 'The Name is required and cannot be empty'
			}
		}
	},
	email: {
		validators: {
			notEmpty: {
				message: 'The email address is required'
			},
			emailAddress: {
				message: 'The email address is not valid'
			}
		}
	},
	Message: {
		validators: {
			notEmpty: {
				message: 'The Message is required and cannot be empty'
			}
		}
	}
}
}); 

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

function myFunction1() {
	document.getElementById("myDropdown1").classList.toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns1 = document.getElementsByClassName("dropdown-content");
		var j;
		for (j = 0; j < dropdowns.length; j++) {
			var openDropdown1 = dropdowns1[i];
			if (openDropdown1.classList.contains('show')) {
				openDropdown1.classList.remove('show');
			}
		}
	}
}

