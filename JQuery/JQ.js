/**
 * Created by KB on 6/18/2016.
 */
$(document).ready(function(){
$("p").click(function(){
        $(this).hide();
    });
    $("p2").dblclick(function(){
        $(this).hide();
    });
    $("p1").mouseenter(function(){
       alert("Assalam u Alikum");
    });
    $("p3").hover(function() {
        alert("You Entered P1");
    },
        function(){
            alert("Bye");
        });
$("#hide").click(function(){
$("P4").hide()});
    $("#show").click(function(){
        $("P4").show()});
    })
