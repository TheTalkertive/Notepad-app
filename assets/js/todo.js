init();
deleteTab();
todoLimit();


$("input[type='text']").keypress(function(event){
 if(event.which === 13){
  let toDo = $(this).val();
  $(this).val("");
  $("ul").append( "<li><span><i class='fa fal fa-trash'></i></span> " + toDo + "</li>");
   
   init();
   deleteTab();

    }
});

function deleteTab(){
    $("span").click(function(event){
        $(this).parent().fadeOut(500, function(){
            $(this).remove();
        });
        event.stopPropagation();
    });
                    }

function init(){
    $("li").click(function(){
        $(this).toggleClass("completed");
     });
     
}

$(".fa-marker").click(function(){
    $("input[type='text']").fadeToggle();

});

function todoLimit() {
    let todos = $("li").size();
    if (todos == 10) {
        console.log("You have reached the limit");
    }


}

console.log( $(li).size() );
