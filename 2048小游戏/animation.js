function ShowNumberWithAnimation(i,j,randNumber){
	//提取当前的数字格
	var numberCell = $("#number-cell-" + i + "-" + j);
	//设置当前的数字格的背景色及数字值
	numberCell.css("background-color",getNumberBackgroundColor(randNumber));
	numberCell.css("color",getNumberColor(randNumber));
	numberCell.text(randNumber);
	//设置当前的数字格的显示动画
	numberCell.animate({
		width:"100px",
		height:"100px",
		top:getPosTop(i,j),
		left:getPosLeft(i,j)
	},50);


}

function showMoveAnimation(fromX,fromY,toX,toY){
	//获取大当前的数字格元素
	var numberCell=$("#number-cell-" + fromX + "-" + fromY);
	numberCell.animate({
		top:getPosTop(toX,toY),
		left:getPosLeft(toX,toY)
	},200);
}

function updateScore(score){
	$("#score").text(score);
}