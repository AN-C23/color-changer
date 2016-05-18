/*global $*/
$( document ).ready(function() {
var colors= ["blue", "purple", "green", "yellow", "red"]
function changecolor(){
var randomIndex= Math.floor(Math.random()*colors.length);
$("body").css("background-color", colors[randomIndex]);
}
$("#change").click(changecolor);
function addcolor(){
    var newcolor = $("#newcolor").val();
    colors.push(newcolor);
    $("body").css("background-color", colors[colors.length - 1])
}
    $("#add").click(addcolor);
});
