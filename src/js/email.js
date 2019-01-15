//-- Form massage textarea --
var commentField = document.getElementById('textareaContainer');
var showTextarea = document.getElementById('showTextarea');
var btnComm = document.getElementById('bgTransparent');

function ShowHide(e){  
    
    if(commentField.style.display === "none"){
        
        commentField.style.display = "block";
        
        btnComm.classList.remove('showTextarea_passive');
        btnComm.classList.add('showTextarea_active');
        
        console.log(commentField.style.display);
        e.stopImmediatePropagation();
    } else {
		commentField.style.display = "none";
            
		btnComm.classList.remove('showTextarea_active');
		btnComm.classList.add('showTextarea_passive');

		console.log(commentField.style.display); 
		e.stopImmediatePropagation();
	}   
}

showTextarea.addEventListener("click", ShowHide);
//-- End form massage textarea --





















