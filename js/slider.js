
function Prev()
{

    
    var sad = $("#slika").attr("data-slika-id");
    sljedeca = Number(sad) - 1;
    if(sljedeca < 1)
    {
        sljedeca = 5;
    }
    
    
    console.log(sljedeca);

    $("#slika").attr("src","img/slider_"+sljedeca+".jpg");
    $("#slika").attr("data-slika-id",sljedeca);


    
}

function Next()
{
    var sad = $("#slika").attr("data-slika-id");
    sljedeca = Number(sad) + 1;
    if(sljedeca > 5)
    {
        sljedeca = 1;
    }
    
    
    console.log(sljedeca);

    $("#slika").attr("src","img/slider_"+sljedeca+".jpg");
    $("#slika").attr("data-slika-id",sljedeca);
}

