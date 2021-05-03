var menu_list_array=[];

function add_item() {
    var htmlcards;
    var card=document.getElementById("add_item").value;
    console.log("card: " + card);
    menu_list_array.push(card);
    menu_list_array.sort();
    htmlcards="<section class='cards'>";
    for(var counter_variable=0; counter_variable<menu_list_array.length; counter_variable++){
        htmlcards=htmlcards+"<div class='card'>" + "<img src='pizzaImg.png'/>" + menu_list_array[counter_variable] + "</div>";
    }
    htmlcards=htmlcards+"</section>";
    document.getElementById("display_addedmenu").innerHTML=htmlcards;
}
function getmenu() {
    var htmldata;
    htmldata="<ol class='menulist'>";
    menu_list_array.sort();
    for(var i=0; i<menu_list_array.length;i++) {
        htmldata=htmldata + '<li>' + menu_list_array[i] + '</li>'
    }
    htmldata=htmldata + "</ol>"
    document.getElementById("display_menu_div").innerHTML=htmldata;
}