$(document).ready(function(){

    $("#nft-sale").click(function(){
        $("body").load("/collat-details.html");
    });
  

    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
    }

});