/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("document").ready(function() {
    $(".practice").css("background-color", "cyan");
    $('p:last').css({"background-color": "green", "color": "white"});
    $('a').css({"background-color": "black", "color": "white"});
    $("#carter").bind('click',alertButtonClick);
    $("h1").bind('click', mouseClick);
    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    $("#cj").bind('click', replaceWText);
    $("#apple").bind('click', removeAPara);
    $("#cool").bind('click', addAPara)
});


function alertButtonClick() {
    alert("there was a button clicked");
}

function mouseOverMe() {
    $('h1').html('carter');
}

function mouseOutMe() {
    $('h1').html('hello');
}

function mouseClick() {
    $('p').html('clicked');
}

function replaceWText() {
    $('h3').html('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
}

function removeAPara() {
    $('#apple p:last').remove();
}

function addAPara() {
    $('#cool').append('<p>another paragraph</p>');
}
