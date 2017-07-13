
//定义一个javascript的数组
var board = new Array();
var score = 0 ;

$(function(){
	newgame();
});

function newgame(){
	//初始化棋盘格
	init();
	//生成两个随机位置的随机数字
	generateOneNumber();
	generateOneNumber();
	
}

function restartgame(){
	$("#gameover").remove();
	updateScore(0);
	newgame();
}

function init(){
	for(var i=0;i<4;i++){
		//定义一个二维数组
		board[i]=new Array();
		for(var j=0;j<4;j++){
			//初始化小格子值为0
			board[i][j]=0;
			var gridCell=$("#grid-cell-" + i + "-" + j);
			//通过getPostTop()方法设置每一个格子距顶端的距离
			gridCell.css("top",getPosTop(i,j));
			//通过getPostLeft()方法设置每一个格子距左端的距离
			gridCell.css("left",getPosLeft(i,j));

		}
	}
	updateBoardView();
	score=0;
	$("#score").text(0);

}


/*16个小格子追加16个div*/
function updateBoardView(){
	//首先清空之前的数字格布局内容
	$(".number-cell").remove();
	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			$("#grid-container").append("<div class='number-cell' id='number-cell-"+i+"-"+j+"'></div>");
			var numberCell=$("#number-cell-"+i+"-"+j);
			//如果棋盘格的值为0的话,设置数字格为高宽都为0
            if (board[i][j] == 0) {
                numberCell.css("width", "0px");
                numberCell.css("height", "0px");
                numberCell.css("top", getPosTop(i, j) + 50);
                numberCell.css("left", getPosLeft(i, j) + 50);
            }
            //如果棋盘格的值不为0的话,设置数字格为高宽为75并设置背景色和前景色及数字值
            else {
                numberCell.css("width", "100px");
                numberCell.css("height", "100px");
                numberCell.css("top", getPosTop(i, j));
                numberCell.css("left", getPosLeft(i, j));
                numberCell.css("background-color", getNumberBackgroundColor(board[i][j]));
                numberCell.css("color", getNumberColor(board[i][j]));
                numberCell.text(board[i][j]);
            }
		}
	}
}

function generateOneNumber(){
	//生成一个随机位置的随机数字
	//1.生成一个随机的位置
	var randX = parseInt(Math.floor(Math.random()*4));
	var randY = parseInt(Math.floor(Math.random()*4));
	//定义一个死循环，完成生成的随机空格子
	while(true){
		//如果当前格子的值为0，满足条件
		if(board[randX][randY]==0){
			break;
		}
		//否则重新随机一个位置
	    var randX = parseInt(Math.floor(Math.random()*4));
	    var randY = parseInt(Math.floor(Math.random()*4));
	}

	
	//2.生成一个随机的数字
	var randNumber = Math.random()< 0.5 ? 2:4;
	//3.在随机的位置上生成随机的数字
		board[randX][randY]=randNumber;
		ShowNumberWithAnimation(randX,randY,randNumber);
}

