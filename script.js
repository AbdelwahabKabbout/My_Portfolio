$(document).ready(function() {
    $('#Project').click(function() {
      $('.glyphicon').toggleClass('glyphicon-thumbs-up glyphicon-thumbs-down'); 
      $('#dropdown').stop(true, true).slideToggle(500); // Smooth dropdown effect
    });
 
    /*$('#dropdown').mouseleave(function() {
       $('#dropdown').stop(true, true).slideToggle(500); // Smooth slide-up effect
       $('.glyphicon').toggleClass('glyphicon-thumbs-up glyphicon-thumbs-down');   
    });*/
     $('.dropdown-content').click(function(){
        const ProjectName = $(this).text();       
        localStorage.setItem("ProjectName", ProjectName); 
        window.location.href = "Projects/Project.html";
     });
     $('#HomePage').click(function(){
         $('.HomePage').show();
         $('.AboutPage').hide();
        $('.ContactPage').hide();
     });
     $('#AboutPage').click(function(){
      $('.HomePage').hide();
      $('.AboutPage').show();
        $('.ContactPage').hide();
     });
     $('.Contact').click(function(){
      $('.HomePage').hide();
      $('.AboutPage').hide();
      $('.ContactPage').show();
     });
 });
 