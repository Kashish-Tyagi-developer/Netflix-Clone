$(document).ready(function(){
    $("#Q-1").click(function(){
        // SLider-animation
        $("#ans-1").slideToggle("fast");
        $("#ans-2").slideUp("fast");
        $("#ans-3").slideUp("fast");
        $("#ans-4").slideUp("fast");
        $("#ans-5").slideUp("fast");
        $("#ans-6").slideUp("fast");
        // cross-animation
        $("#icon-1").toggleClass("ques-icon-new");
        $("#icon-2").removeClass("ques-icon-new");
        $("#icon-3").removeClass("ques-icon-new");
        $("#icon-4").removeClass("ques-icon-new");
        $("#icon-5").removeClass("ques-icon-new");
        $("#icon-6").removeClass("ques-icon-new");

    });
    $("#Q-2").click(function(){
        // slider-animation
        $("#ans-2").slideToggle("fast");
        $("#ans-1").slideUp("fast");
        $("#ans-3").slideUp("fast");
        $("#ans-4").slideUp("fast");
        $("#ans-5").slideUp("fast");
        $("#ans-6").slideUp("fast");
        // cross-animation
        $("#icon-2").toggleClass("ques-icon-new");
        $("#icon-1").removeClass("ques-icon-new");
        $("#icon-3").removeClass("ques-icon-new");
        $("#icon-4").removeClass("ques-icon-new");
        $("#icon-5").removeClass("ques-icon-new");
        $("#icon-6").removeClass("ques-icon-new");
    });
    $("#Q-3").click(function(){
        // slider-animation
        $("#ans-3").slideToggle("fast");
        $("#ans-1").slideUp("fast");
        $("#ans-2").slideUp("fast");
        $("#ans-4").slideUp("fast");
        $("#ans-5").slideUp("fast");
        $("#ans-6").slideUp("fast");
        // cross-animation
        $("#icon-3").toggleClass("ques-icon-new");
        $("#icon-1").removeClass("ques-icon-new");
        $("#icon-2").removeClass("ques-icon-new");
        $("#icon-4").removeClass("ques-icon-new");
        $("#icon-5").removeClass("ques-icon-new");
        $("#icon-6").removeClass("ques-icon-new");
    });
    $("#Q-4").click(function(){
        // slider-animation
        $("#ans-4").slideToggle("fast");
        $("#ans-1").slideUp("fast");
        $("#ans-2").slideUp("fast");
        $("#ans-3").slideUp("fast");
        $("#ans-5").slideUp("fast");
        $("#ans-6").slideUp("fast");
        // cross-animation
        $("#icon-4").toggleClass("ques-icon-new");
        $("#icon-1").removeClass("ques-icon-new");
        $("#icon-2").removeClass("ques-icon-new");
        $("#icon-3").removeClass("ques-icon-new");
        $("#icon-5").removeClass("ques-icon-new");
        $("#icon-6").removeClass("ques-icon-new");
    });
    $("#Q-5").click(function(){
        // slider-animation
        $("#ans-5").slideToggle("fast");
        $("#ans-1").slideUp("fast");
        $("#ans-2").slideUp("fast");
        $("#ans-3").slideUp("fast");
        $("#ans-4").slideUp("fast");
        $("#ans-6").slideUp("fast");
        // cross-animation
        $("#icon-5").toggleClass("ques-icon-new");
        $("#icon-1").removeClass("ques-icon-new");
        $("#icon-2").removeClass("ques-icon-new");
        $("#icon-3").removeClass("ques-icon-new");
        $("#icon-4").removeClass("ques-icon-new");
        $("#icon-6").removeClass("ques-icon-new");
    });
    $("#Q-6").click(function(){
        // slider-aniamtion
        $("#ans-6").slideToggle("fast");
        $("#ans-1").slideUp("fast");
        $("#ans-2").slideUp("fast");
        $("#ans-3").slideUp("fast");
        $("#ans-4").slideUp("fast");
        $("#ans-5").slideUp("fast");
        // cross-animation
        $("#icon-6").toggleClass("ques-icon-new");
        $("#icon-1").removeClass("ques-icon-new");
        $("#icon-2").removeClass("ques-icon-new");
        $("#icon-3").removeClass("ques-icon-new");
        $("#icon-4").removeClass("ques-icon-new");
        $("#icon-5").removeClass("ques-icon-new");
    });
});