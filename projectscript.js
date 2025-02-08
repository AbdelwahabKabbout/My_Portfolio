$(document).ready(function() {
    const CurrentProject = localStorage.getItem("ProjectName");

    if(CurrentProject == "Restaurant POS (C# Windows Forms)") {
        $(".Project1").fadeIn();
    } else if(CurrentProject == "Chess Game (Web)") {
        $(".Project2").fadeIn();
    } else if(CurrentProject == "Fitness Tracking App(web)") {
        $(".Project3").fadeIn();
    } else if(CurrentProject == "Memory Game (C# Windows Forms)") {
        $(".Project4").fadeIn();
    }

    $(".Exit").click(function() {
        window.location.href = "index.html";

    });
    
    
});
