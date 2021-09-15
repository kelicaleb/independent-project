
$(document).ready(function(){
    $("#para1").hide();
    $('#design').click(function(){
       $('#para1').toggle();
   });
   $("#para2").hide();
   $('#development').click(function(){
       $('#para2').toggle();
   });
   $("#para3").hide();
   $('#management').click(function(){
       $('#para3').toggle();
       
   });

  })
const form = document.querySelector("#caleb");

form.addEventListener("submit", function(x){
    x.preventDefault();
    const jsform = new FormData(form);  
    console.log(jsform.get("email"));
    console.log(jsform.get("username"));
    var y = jsform.get("username");
    if(jsform.get("username") && jsform.get("email")){
        alert("Thank you for contacting us ")
    }
    else{
        alert('enter your name or email')
    }
})
