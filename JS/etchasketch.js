var number_of_squares = 960;
var canvas_size = 960;

function clear(){
alert("it works!");
	number_of_squares = prompt("how Many squares?");
}

function make_squares(_number_of_squares)
{
var size =  canvas_size / Math.sqrt(number_of_squares);

for (i = 0; i < _number_of_squares; i++)
{ 
$("#container").append("<div class = \"block\"></div>");

}
$('.block').css('width', size-2);
$('.block').css('height', size-2);
$('.block').css('background-color', "#ccc");
$('.block').css('margin', '1px');
$('.block').css('float', 'left');
}

$(document).ready(function(){
make_squares(number_of_squares);
$('.block').hover(function(){

$(this).css('background-color', "#FF4136");
$(this).addClass('red');
	});
});




