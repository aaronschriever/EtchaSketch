var number_of_squares = 600;
var canvas_size = 600;
var trail_type = 1;
function default_boxes()
{
	change_boxes();
	set_Color();
}
function tint_boxes()
{
change_boxes();
lighten_squares();
}
function change_boxes(){

	number_of_squares = prompt("how Many squares per side?");
	if (number_of_squares < 150){
	number_of_squares = number_of_squares * number_of_squares;
	$("#container").empty();
	make_squares(number_of_squares);
	
}
else
{
alert("please enter a number under 150");
change_boxes();
}
}

function make_squares(_number_of_squares)
{
var size =  canvas_size / Math.sqrt(number_of_squares);

for (i = 0; i < _number_of_squares; i++)
{ 
$("#container").append("<div class = \"block\"></div>");

}
$('.block').css('width', size-1);
$('.block').css('height', size-1);
$('.block').css('background-color', "#ccc");
$('.block').css('margin', '0.5px');
$('.block').css('float', 'left');
}
function set_Color()
{
$('.block').mouseover(function(){
var current_color = $(this).css("background-color");
$(this).css('background-color', "#FF4136");
$(this).addClass('red');

	});
	
}

function lighten_squares()
{
	$('.block').css('background-color', "#fff");
	$("#container").css('background-color', "#000");
$('.block').mouseover(function(){
var current_color = $(this).css("opacity");
	if (current_color > 0)
	{
		$(this).css('opacity',current_color - 0.1);

	}});

}

$(document).ready(function(){
make_squares(number_of_squares);
set_Color();
});



