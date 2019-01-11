var ru = document.getElementById('ru').textContent;
var en = document.getElementById('en').textContent;
var Ru = document.getElementById('ru');
var En = document.getElementById('en');

function ruLangToUp() {
    Ru.innerHTML = ru.toUpperCase();
    En.innerHTML = en.toLowerCase();
}

function enLangToUp() {
    En.innerHTML = en.toUpperCase(); 
    Ru.innerHTML = ru.toLowerCase();
}

$(function() {                      
  $("#ru").click(function() {  
             
    $("#en").removeClass("active_lang"); 
    $("#en").addClass("disabled_lang"); 
    $(this).removeClass("disabled_lang");
    $(this).addClass("active_lang");
      
  });
});

$(function() {                      
  $("#en").click(function() {  
            
    $("#ru").removeClass("active_lang"); 
    $("#ru").addClass("disabled_lang"); 
    $(this).removeClass("disabled_lang"); 
    $(this).addClass("active_lang"); 
  });
});