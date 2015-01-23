'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("welcome all");
		$("#testjs").text("Please wait...");
		$(".jumbotron p").toggleClass("active");

	});
	$("a.thumbnail").click(projectClick);

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	
	$("#submitBtn").click(updateProject); 

  }

function updateProject(e) {
   var projectID = $('#project').val();
   $(projectID).animate({
      width: $('#width').val()
   });

   var newText = $('#description').val();
   $(projectID + ".project-description").text(newText);
}

function projectClick(e) { 

    // prevent the page from reloading 
    e.preventDefault();
    // In an event handler, $(this) refers to 
    // the object that triggered the event 

    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $("#jumbotron h1");
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);
    console.log("Number of Matching items:" + jumbotronHeader.length);

var containingProject = $(this).closest(".project"); 
    var description = $(containingProject).find(".project-description");
    
    if (description.length == 0) { 
       $(containingProject).append(
       	"<div class='project-description' id=description><p>Description of the project.</p></div>"); 

} else { 
    	
    	$(description).fadeToggle();
    }
}

