// console.info(jQuery.fn.jquery);

// var tel = document.querySelector("#tel");
let tel = $('#tel');

tel.on('keyup', function (event) {
    if (isNaN(tel.val())) {
        $('#error').html('<p style="color:red"> Vous ne devez saisir que des chiffres</p>');
        event.preventDefault();
    } else {
        $('#error').html('');
    }
})

// tel.addEventListener('keypress', function (e) {
//
//     if( isNaN(tel.value)){
//         document.getElementById('error').innerHTML = '<p style="color:red"> Vous ne devez saisir que des chiffres</p>'
//         e.preventDefault();
//     }else{
//         document.getElementById('error').innerHTML = ''
//
//     }
// })


// function verification() {
//
//     if (document.formul.nom.value == "") {
//         alert("Ce champs nom ne doit pas vide");
//
//         document.formul.nom.focus();
//         document.formul.nom.style.backgroundColor = "red";
//
//         return false;
//     }
//
//     if (document.formul.prenom.value == "") {
//         alert("Ce champs prénomne doit pas vide");
//
//         document.formul.prenom.focus();
//         document.formul.prenom.style.backgroundColor = "red";
//
//         return false;
//     }
//
//     var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/;
//
//     if (!regex.test(document.getElementById('email').value)) {
//         alert("Ce champs Email ne doit pas vide");
//
//         document.formul.email.focus();
//         document.formul.email.style.backgroundColor = "red";
//
//         return false;
//     }
//
// }

$('form').on('submit', function () {

    if ($('#nom', $(this)).val() == "") {
        alert("Ce champs nom ne doit pas être vide");

        $('#nom', $(this)).focus();
        $('#nom', $(this)).css('background-color', 'red');

        return false;
    }

    if ($('#prenom', $(this)).val() == "") {
        alert("Ce champs prénom ne doit pas être vide");

        $('#prenom', $(this)).focus();
        $('#prenom', $(this)).css('background-color', 'red');

        return false;
    }

    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/;

    if (!regex.test($('#email', $(this)))) {
        alert("Ce champs Email ne doit pas vide et doit contenir une adresse email valide.");
        $('#email', $(this)).focus();
        $('#email', $(this)).css('background-color', 'red');

        return false;
    }
});