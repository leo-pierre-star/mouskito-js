var tel = document.querySelector("#tel");

tel.addEventListener('keypress', function (e) {

	if( isNaN(tel.value)){
		document.getElementById('error').innerHTML = '<p style="color:red"> Vous ne devez saisir que des chiffres</p>'
		e.preventDefault();
	}else{
		document.getElementById('error').innerHTML = ''

	}
})

function verification() {

	if ($('#nom').val() == "") {
		alert("Ce champs nom ne doit pas vide");

		$('#nom').focus();
		$('#nom').css('background-color', 'red');

		return false;
	}

	if ($('#prenom').val() == '') {
		$('#prenom').focus();
		$('#prenom').css('background-color', 'red');

		return false;
	}

	var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/;

	if (!regex.test($('#email').val())) {
		alert("Ce champs Email ne doit pas vide et il doit correspondre au format email");

		document.formul.email.focus();
		document.formul.email.style.backgroundColor = "red";

		return false;
	}

}