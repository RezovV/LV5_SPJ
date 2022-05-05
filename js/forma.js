function Dodaj()
{
	var ime = $("#ime").val();
    var prez = $("#prez").val();
    var jmbag = $("#jmbag").val();
    var oib = $("#oib").val();
    var datum = $("#datum").val();
    var adresa = $("#adres").val();
    var posta = $("#posta").val();
    var grad = $("#grad").val();


    if(ime != "",prez !="",jmbag!="",oib!="",datum!="",adresa!="",posta!="",grad!="")
    {
        var Student =
        {
            Ime:ime,
            Prez:prez,
            Jmbag:jmbag,
            Oib:oib,
            Datum:datum,
            Adresa:adresa,
            Posta:posta,
            Grad:grad
        }
        console.log(Student);
    }
    else
    {
        alert ("Nisu sva polja popunjena");
    }
}