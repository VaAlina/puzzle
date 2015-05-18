$(document).ready(function(){
//Don`t set cellSize to zero!
var cellSize = 50, 
    imgSize = 500,
	rowAmountConst = imgSize/cellSize, //Row amount will be equal to column amount.
	rowAmount = 0,//Row amount for counter. It will help me to avoid changing the main variable.
	currentRow = 0,
	cellAmount = rowAmountConst*10, //General cell amount.
	horizontalIndent = 0,
	verticalIndent = 0;
	
 $("body").append("<div id='pazzleHolder'>");//Open div that contains all puzzle..
    for(var currentCell=0; currentCell<cellAmount; currentCell++){//While current cell is less then general cell amount.
	    $("div#pazzleHolder").append("<div id="+currentCell+" class='pazzlePartHolder draggable'></div>");//Adds div that contains the part of puzzle..
        $("div#"+currentCell).append("<img src='wallpaper.jpg' class='"+"block"+currentCell+"' alt='img' />");//Let`s add img and the unique class "block"+i+.
		if(currentCell==0){//If there is the first cell, then it will have zero top indent.
		    $(".block"+currentCell).css({'position': 'absolute','top' : 0+"px",'left' : 0+"px", 'padding':'0px'});
		}else if(currentCell==cellAmount)break;//If the is the last iteration, then break.
		if(currentCell==rowAmount){
		    rowAmount+=rowAmountConst;//If current cell equals the end of row, then let`s increment it to row amount in the row. So, we will compare it to extreme numbers, such as 3, 6, 9, 12, 16.
			horizontalIndent=horizontalIndent-cellSize;//Move horizontal indent position.
			verticalIndent = 0;//...and top. Let`s move the position to the begin of the next columt.
			$(currentCell).addClass("topOfTheRow");//Edds class to current element. That`s why we will be able to add display: inline-block; in .css for current class.
		}
		$(".block"+currentCell).css({'position': 'relative','top' : verticalIndent+"px",'left' : horizontalIndent+"px"});//Set the unique position to current element.
		verticalIndent = verticalIndent-cellSize;
	}
	$("body").append("</div>");

	
});

    $(document).ready(function(){//Make all puzzle pieces draggable.
	$( ".draggable" ).draggable();
    });
