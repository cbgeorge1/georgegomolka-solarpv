$(document).ready(function(){
    $("#search_input").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myList li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });





//var search_input = document.querySelector("#search_input");

//search_input.addEventListener("keyup", function(e){
    //var search_item = e.target.value.toLowerCase();
    //var span_items = document.querySelectorAll(".table_body .holder span")
    
    //span_items.forEach(function(item){
        //if(item.textContent.toLowerCase().indexOf(search_item) != -1){
            //item.closest("li").style.display = "block";
        //}
        //else{
            //item.closest("li").style.display = "none";
        //}
    //})
//})