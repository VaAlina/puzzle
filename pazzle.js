$(document).ready(function(){
//Переменную cellSize не менять!!! Не присваивать ей ноль.
var cellSize = 50, //Размер ячейки.
    imgSize = 500, //Размер изображения.
	rowAmountConst = imgSize/cellSize, //Количество колонок. Будет задано одинаковое количество колонок и рядов.
	rowAmount = 0,//Количество колонок для счётчика, чтоб не менять основную переменную.
	currentRow = 0,//Текущий ряд.
	cellAmount = rowAmountConst*10, //Общее количество ячеек.
	horizontalIndent = 0,//Горизонтальный отступ.
	verticalIndent = 0;//Вертикальный отступ.
	//$(".pazzlePartHolder").css({"width":cellSize+"px", "height":cellSize+"px"});//Функция работает некорректно.
    $("body").append("<div id='pazzleHolder'>");//Открыть div, содержащий весь пазл.
    for(var currentCell=0; currentCell<cellAmount; currentCell++){//Пока, текущая ячейка меньше общего количества ячеек.
	    $("div#pazzleHolder").append("<div id="+currentCell+" class='pazzlePartHolder draggable'></div>");//Добавить блок, содержащий часть пазла.
        $("div#"+currentCell).append("<img src='wallpaper.jpg' class='"+"block"+currentCell+"' alt='img' />");//В этот блок добавить img и присвоить уникальный класс "block"+i+.
		if(currentCell==0){//Если отображается первая ячейка, то задать ей нулевое смещение вверх. 
		    $(".block"+currentCell).css({'position': 'relative','top' : 0+"px",'left' : 0+"px", 'padding':'0px'});
		}else if(currentCell==cellAmount)break;//Если цикл добрался до последней ячейки - завершить итерации.
		if(currentCell==rowAmount){
		    rowAmount+=rowAmountConst;//Если текущая ячейка равна концу ряда, то увеличить её на количество ячеек в ряду. Чтоб можно было сравнивать с крайними числами (например: 3, 6, 9, 12, 16).
			horizontalIndent=horizontalIndent-cellSize;//Сдвинуть координаты отступа (смещения) left.
			verticalIndent = 0;//...и top. Сдвинуть координаты в начало следующего столбца.
			$(currentCell).addClass("topOfTheRow");//Присвоить класс текущему элементу, благодаря чему, в стилях можно будет задать display: inline-block;, для данного класса.
		}
		$(".block"+currentCell).css({'position': 'relative','top' : verticalIndent+"px",'left' : horizontalIndent+"px"});//Присвоить текущему элементу уникальную позицию.
		$(".block"+currentCell).offset({ top: getYPositionOfElement(), left: getXPositionOfElement() });
		verticalIndent = verticalIndent-cellSize;
	}
	$("body").append("</div>");

	
});

    $(document).ready(function(){//Сделать все блоки перемещаемыми.
	$( ".draggable" ).draggable();
    });
	
	function getXPositionOfElement() {//Получить случайные координаты x окна браузера.
        var x_position = Math.floor(Math.random() * window.innerWidth);
	    return x_position;
    }
	
	function getYPositionOfElement() {//Получить случайные координаты y окна браузера.
        var y_position = Math.floor(Math.random() * window.innerHeight);
	    return y_position;
    }
	
