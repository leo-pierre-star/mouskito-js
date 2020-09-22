function aPayerParArticle() {
    // var facturations = document.querySelectorAll('.facturations li');
    let facturations = $('.facturations li');

    // facturations.forEach(function (facturation) {
    //
    //     var quantite = facturation.querySelector('.quant');
    //     var prix = facturation.querySelector('.prix');
    //
    //     if ((quantite.value !='' && !isNaN(quantite.value))
    //         && (prix.value !='' && !isNaN(prix.value))) {
    //
    //         var calcul = quantite.value * prix.value;
    //
    //         facturation.querySelector('.total').value = calcul;
    //     }
    // })
    $.each(facturations, function (index, facturation) {
        let quantite = $('.quant', facturation);
        let prix = $('.prix', facturation);

        if ((quantite.val() != '' && !isNaN(quantite.val()))
            && (prix.val() != '' && !isNaN(prix.val()))) {
            let calcul = quantite.val() * prix.val();

            $('.total', facturation).val(calcul);
        }
    })
}

function totalPanier() {
    // var  elements = document.querySelectorAll('.total');
    let elements = $('.total');

    // var netAPayer = 0;
    let netAPayer = 0;

    // elements.forEach(function (element) {
    //     if (element.value != '' && !isNaN(element.value)) {
    //         netAPayer += element.value * 1;
    //
    //         document.querySelector('.totalPanier').value = netAPayer;
    //     }
    // })
    $.each(elements, function (index, element) {
        if ($(element).val() != '' && !isNaN($(element).val())) {
            netAPayer += $(element).val() * 1;
        }
    })
    $('.totalPanier').val(netAPayer);
}