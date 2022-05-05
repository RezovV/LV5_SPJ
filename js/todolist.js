$("#btnUnos").click(function(){
    var a = $("#unos").val();
    $("#lista").append("<li>"+a+"<button id='brisi' class='fa fa-trash'></button>"+"</li>");
})



$(document).on('click', "#brisi", function(e){
    var entry = $(this).parent(); 
    entry.remove(); 
})