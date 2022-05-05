$(document).ready(function()
{
    var oBtn = $("#btnOWP");
    var oNaslov1 = $(".owp1");
    var oNaslov2 = $(".owp2");
    oBtn.click(function()
    {
        oNaslov1.toggle();
        oNaslov2.toggle();
        oNaslov3.hide();
        oNaslov4.hide();
        oNaslov5.hide();
        oNaslov6.hide();
        $('img').attr("style","display: none;");
        
    })

    var prov = false;

    
    var owp1 = $(".owp1");
    var slika1 = $("#owp1");
    owp1.click(function()
    {
        if(prov == true)
        {
            $('img').attr("style","display: none;");
            slika1.toggle();
        }
        else
        {
            slika1.toggle();
            prov = true;
        }
    })

    var owp2 = $(".owp2");
    var slika2 = $("#owp2");
    owp2.click(function()
    {
        $('img').attr("style","display: none;");
        if(prov == true)
        {
            $('img').attr("style","display: none;");
            slika2.toggle();
        }
        else
        {
            slika2.toggle();
            prov = true;
        }
    })

    var oBtn1 = $("#btnSPJ");
    var oNaslov3 = $(".spj1");
    var oNaslov4 = $(".spj2");
    oBtn1.click(function()
    {
        oNaslov1.hide();
        oNaslov2.hide();
        oNaslov3.toggle();
        oNaslov4.toggle();
        oNaslov5.hide();
        oNaslov6.hide();
        $('img').attr("style","display: none;");
        
    })

    var spj1 = $(".spj1");
    var slika3 = $("#spj1");
    spj1.click(function()
    {
        if(prov == true)
        {
            $('img').attr("style","display: none;");
            slika3.toggle();
        }
        else
        {
            slika3.toggle();
            prov = true;
        }
    })

    var spj2 = $(".spj2");
    var slika4 = $("#spj2");
    spj2.click(function()
    {
        $('img').attr("style","display: none;");
        if(prov == true)
        {
            $('img').attr("style","display: none;");
            slika4.toggle();
        }
        else
        {
            slika4.toggle();
            prov = true;
        }
    })



    var oBtn2 = $("#btnWPSP");
    var oNaslov5 = $(".wpsp1");
    var oNaslov6 = $(".wpsp2");
    oBtn2.click(function()
    {
        oNaslov1.hide();
        oNaslov2.hide();
        oNaslov3.hide();
        oNaslov4.hide();
        oNaslov5.toggle();
        oNaslov6.toggle();
        $('img').attr("style","display: none;");
        
    })

    var wpsp1 = $(".wpsp1");
    var slika5 = $("#wpsp1");
    wpsp1.click(function()
    {
        if(prov == true)
        {
            $('img').attr("style","display: none;");
            slika5.toggle();
        }
        else
        {
            slika5.toggle();
            prov = true;
        }
    })

    var wpsp2 = $(".wpsp2");
    var slika6 = $("#wpsp2");
    wpsp2.click(function()
    {
        $('img').attr("style","display: none;");
        if(prov == true)
        {
            $('img').attr("style","display: none;");
            slika6.toggle();
        }
        else
        {
            slika6.toggle();
            prov = true;
        }
    })










})