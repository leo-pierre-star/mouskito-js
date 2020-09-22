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

	if (document.formul.nom.value == "") {
		alert("Ce champs nom ne doit pas vide");

		document.formul.nom.focus();
		document.formul.nom.style.backgroundColor = "red";

		return false;
	}

	if (document.formul.prenom.value == "") {
		alert("Ce champs prénomne doit pas vide");

		document.formul.prenom.focus();
		document.formul.prenom.style.backgroundColor = "red";

		return false;
	}

	var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/;

	if (!regex.test(document.getElementById('email').value)) {
		alert("Ce champs Email ne doit pas vide");

		document.formul.email.focus();
		document.formul.email.style.backgroundColor = "red";

		return false;
	}

}