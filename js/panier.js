function aPayerParArticle() {
	var facturations = document.querySelectorAll('.facturations li');

	facturations.forEach(function (facturation) {

		var quantite = facturation.querySelector('.quant');
		var prix = facturation.querySelector('.prix');

		if ((quantite.value !='' && !isNaN(quantite.value))
			&& (prix.value !='' && !isNaN(prix.value))) {

			var calcul = quantite.value * prix.value;

			facturation.querySelector('.total').value = calcul;
		}
	})
}

function totalPanier() {
	var  elements = document.querySelectorAll('.total');

	var netAPayer = 0;

	elements.forEach(function (element) {
		if (element.value != '' && !isNaN(element.value)) {
			netAPayer += element.value * 1;

			document.querySelector('.totalPanier').value = netAPayer;
		}
	})
}