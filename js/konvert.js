
function pretvori ()
{
    var unos = $("#unos").val();
    if($('#valuta1 option').filter(':selected').text() == "Euro" && $('#valuta2 option').filter(':selected').text() == "Dolar")
    {
        rezultat = parseFloat(unos) * 1.06;
    }
    if($('#valuta1 option').filter(':selected').text() == "Euro" && $('#valuta2 option').filter(':selected').text() == "Kuna")
    {
        rezultat = parseFloat(unos) * 7.54;
    }
    if($('#valuta1 option').filter(':selected').text() == "Euro" && $('#valuta2 option').filter(':selected').text() == "Dinar")
    {
        rezultat = parseFloat(unos) * 117.64;
    }
    if($('#valuta1 option').filter(':selected').text() == "Euro" && $('#valuta2 option').filter(':selected').text() == "Yen")
    {
        rezultat = parseFloat(unos) * 137.41;
    }
    if($('#valuta1 option').filter(':selected').text() == "Euro" && $('#valuta2 option').filter(':selected').text() == "Euro")
    {
        rezultat = unos * 1;
    }


    if($('#valuta1 option').filter(':selected').text() == "Dolar" && $('#valuta2 option').filter(':selected').text() == "Euro")
    {
        rezultat = unos * 0.94;
    }
    if($('#valuta1 option').filter(':selected').text() == "Dolar" && $('#valuta2 option').filter(':selected').text() == "Kuna")
    {
        rezultat = unos * 7.12;
    }
    if($('#valuta1 option').filter(':selected').text() == "Dolar" && $('#valuta2 option').filter(':selected').text() == "Dinar")
    {
        rezultat = unos * 111.06;
    }
    if($('#valuta1 option').filter(':selected').text() == "Dolar" && $('#valuta2 option').filter(':selected').text() == "Yen")
    {
        rezultat = unos * 129.63;
    }
    if($('#valuta1 option').filter(':selected').text() == "Dolar" && $('#valuta2 option').filter(':selected').text() == "Dolar")
    {
        rezultat = unos * 1;
    }


    if($('#valuta1 option').filter(':selected').text() == "Kuna" && $('#valuta2 option').filter(':selected').text() == "Euro")
    {
        rezultat = unos * 0.13;
    }
    if($('#valuta1 option').filter(':selected').text() == "Kuna" && $('#valuta2 option').filter(':selected').text() == "Dolar")
    {
        rezultat = unos * 0.14;
    }
    if($('#valuta1 option').filter(':selected').text() == "Kuna" && $('#valuta2 option').filter(':selected').text() == "Dinar")
    {
        rezultat = unos * 15.6;
    }
    if($('#valuta1 option').filter(':selected').text() == "Kuna" && $('#valuta2 option').filter(':selected').text() == "Yen")
    {
        rezultat = unos * 18.19;
    }
    if($('#valuta1 option').filter(':selected').text() == "Kuna" && $('#valuta2 option').filter(':selected').text() == "Kuna")
    {
        rezultat = unos * 1;
    }


    if($('#valuta1 option').filter(':selected').text() == "Dinar" && $('#valuta2 option').filter(':selected').text() == "Euro")
    {
        rezultat = unos * 0.0085;
    }
    if($('#valuta1 option').filter(':selected').text() == "Dinar" && $('#valuta2 option').filter(':selected').text() == "Dolar")
    {
        rezultat = unos * 0.00090;
    }
    if($('#valuta1 option').filter(':selected').text() == "Dinar" && $('#valuta2 option').filter(':selected').text() == "Kuna")
    {
        rezultat = unos * 0.064;
    }
    if($('#valuta1 option').filter(':selected').text() == "Dinar" && $('#valuta2 option').filter(':selected').text() == "Dinar")
    {
        rezultat = unos * 1;
    }
    if($('#valuta1 option').filter(':selected').text() == "Dinar" && $('#valuta2 option').filter(':selected').text() == "Yen")
    {
        rezultat = unos * 1.17;
    }


    if($('#valuta1 option').filter(':selected').text() == "Yen" && $('#valuta2 option').filter(':selected').text() == "Euro")
    {
        rezultat = unos * 0.0073;
    }
    if($('#valuta1 option').filter(':selected').text() == "Yen" && $('#valuta2 option').filter(':selected').text() == "Dolar")
    {
        rezultat = unos * 0.0077;
    }
    if($('#valuta1 option').filter(':selected').text() == "Yen" && $('#valuta2 option').filter(':selected').text() == "Kuna")
    {
        rezultat = unos * 0.055;
    }
    if($('#valuta1 option').filter(':selected').text() == "Yen" && $('#valuta2 option').filter(':selected').text() == "Dinar")
    {
        rezultat = unos * 0.86;
    }
    if($('#valuta1 option').filter(':selected').text() == "Yen" && $('#valuta2 option').filter(':selected').text() == "Yen")
    {
        rezultat = unos * 1;
    }

    $("#rezultat").val(rezultat);
    console.log(rezultat);
}

    
