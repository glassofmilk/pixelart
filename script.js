$(document).ready(function() {
	//This will create the canvas
	for (var i = 1; i <= 2500; i++) {
		$("#extraBorder").append("<div class='pixel'></div>");
		if (i % 50 === 0) {
			$("#extraBorder").append("<br/>");
		}
	}
	
	$(".colorBox").each(function() {
		$(this).css("background-color", $(this).attr("id"));
	});
	
	var fillColor = "blue";
    var dragging = false;
	
	var cw = Raphael.colorwheel($("#colorwheel"), 75);
	cw.color("#0000ff");
	
	$("#colorDisplay").toggleClass("selected");
	var selected = $("#colorDisplay");
	
	cw.onchange(function(colorObject) {
		$("#colorDisplay").css("background-color", colorObject.hex);
		fillColor = colorObject.hex;
		if (!($("#colorDisplay").hasClass("selected"))) {
			selected.toggleClass("selected");
			$("#colorDisplay").toggleClass("selected");
			selected = $("#colorDisplay");
		}
	});
	
	$(".colorBox").click(function() {
		var value = $(this).css("background-color");
		fillColor = value;
		selected.toggleClass("selected");
		$(this).toggleClass("selected");
		selected = $(this);
	});
	
	$(".pixel").click(function() {
		$(this).css("background-color", fillColor);
	});
    
    $(document).mousedown(function() {
        dragging = true;
        console.log("dragging on");
    });
    
    $(document).mouseup(function() {
        dragging = false;
        console.log("dragging off");
    });
    
    $(".pixel").mouseenter(function() {
        if (dragging) {
            $(this).css("background-color", fillColor);
        }
    });
});