//keydown表示键盘被按下
$(document).keydown(function (event){ //event是keydown事件自带的
    switch (event.keyCode){
    	case 37://left
    	/*
    	 moveLeft()方法
    	     *完成向左移动的逻辑
    	     *返回值是Boolean类型，判断是否可以移动
    	 */
    	if(moveLeft()){
    		
    		//重新地随机生成两个数字
    		generateOneNumber();
    		
    		//判断当这次移动完成后游戏是否结束
    		isgameover();
    	}
    	break;

    	
    	case 38://up
    	if(moveUp()){
    		//重新地随机生成两个数字
    		generateOneNumber();
    		
    		//判断当这次移动完成后游戏是否结束
    		isgameover();
    	}
    	break;

    	case 39://right
    	if(moveRight()){
    		//重新地随机生成两个数字
    		generateOneNumber();
    		
    		//判断当这次移动完成后游戏是否结束
    		isgameover();
    	}
    	break;

    	case 40://down
    	if(moveDown()){  		
    		//重新地随机生成两个数字
    		generateOneNumber();
    		
    		//判断当这次移动完成后游戏是否结束
    		isgameover();
    	}
    	break;

    	default:
    	break;
    }
});

function moveLeft(){
	//返回值是Booleab类型，判断是否可以移动
	if(!canMoveLeft(board)){
		//当前的格子无法移动
		return false;
	} 
	//完成向左移动的逻辑
	for(var i=0;i<4;i++){
		for(var j=1;j<4;j++){ //最左的一列是无法移动的
			if(board[i][j]!=0){//如果可以向左移动的话，第一步，遍历数字格，判断除第一列外有哪些数字格的值是不为0的。
				for(var k=0;k<j;k++){//第二步，遍历当前值不为0的数字格左边数字格。
					if(board[i][k]==0 && noBlokHorizontalColLeft(i,k,j,board)){
						//才能向左移动
						showMoveAnimation(i,j,i,k);
						board[i][k]=board[i][j];
						board[i][j]=0;
						continue;
					}else if(board[i][k]==board[i][j] && noBlokHorizontalColLeft(i,k,j,board)){
						//才能向左移动
						showMoveAnimation(i,j,i,k);
						board[i][k]+=board[i][j];
						board[i][j]=0;
						//addscore
						score+=board[i][k];
						updateScore(score);
						continue;
					}
				}
			}
		}
	}
	//updateBoardView();
	setTimeout('updateBoardView()',200);
	
	return true;
}

function moveRight(){
	//返回值是Booleab类型，判断是否可以移动
	if(!canMoveRight(board)){
		//当前的格子无法移动
		return false;
	} 
	//完成向右移动的逻辑
	for(var i=0;i<4;i++){
		for(var j=0;j<3;j++){ 
			if(board[i][j]!=0){//如果可以向右移动的话，第一步，遍历数字格，判断除第一行外有哪些数字格的值是不为0的。
				for(var k=4;k>j;k--){//第二步，遍历当前值不为0的数字格右边数字格。
					if(board[i][k]==0 && noBlokHorizontalColRight(i,k,j,board)){
						//才能向右移动
						showMoveAnimation(i,j,i,k);
						board[i][k]=board[i][j];
						board[i][j]=0;
						continue;
					}else if(board[i][k]==board[i][j] && noBlokHorizontalColRight(i,k,j,board)){
						//才能向左移动
						showMoveAnimation(i,j,i,k);
						board[i][k]+=board[i][j];
						board[i][j]=0;
						//addscore
						score+=board[i][k];
						updateScore(score);
						continue;
					}
				}
			}
		}
	}
	//updateBoardView();
	setTimeout('updateBoardView()',200);
	
	return true;
}

function moveUp(){
	//返回值是Booleab类型，判断是否可以向上移动
	if(!canMoveUp(board)){
		//当前的格子无法移动
		return false;
	} 
	//完成向上的逻辑
	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			if(board[i][j]!=0){
				for(var k=0;k<i;k++){
					if(board[k][j]==0 && noBlokHorizontalColUp(j,i,k,board)){
						//才能向上移动
						showMoveAnimation(i,j,k,j);
						board[k][j]=board[i][j];
						board[i][j]=0;
						continue;
					}else if(board[k][j]==board[i][j] && noBlokHorizontalColUp(j,i,k,board)){
						showMoveAnimation(i,j,k,j);
						board[k][j]+=board[i][j];
						board[i][j]=0;
						//addscore
						score+=board[k][j];
						updateScore(score);
						continue;
					}
				}
			}
		}
	}
	//updateBoardView();
	setTimeout('updateBoardView()',200);
	
	return true;
}

function moveDown(){
	if(!canMoveDown(board)){
		//当前的格子无法移动
		return false;
	} 
	//完成向下的逻辑
	for(var i=2;i>=0;i--){
		for(var j=0;j<4;j++){
			if(board[i][j]!=0){
				for(var k=3;k>i;k--){
					if(board[k][j]==0 && noBlokHorizontalColDown(j,i,k,board)){
						//才能向下移动
						showMoveAnimation(i,j,k,j);
						board[k][j]=board[i][j];
						board[i][j]=0;
						continue;
						
					}else if(board[k][j]==board[i][j] && noBlokHorizontalColDown(j,i,k,board)){
						//才能向下移动
						showMoveAnimation(i,j,k,j);
						board[k][j]+=board[i][j];
						board[i][j]=0;
						//addscore
						score+=board[k][j];
						updateScore(score);
						continue;
					}
				}
			}
		}
	}
	//updateBoardView();
	setTimeout('updateBoardView()',200);
	
	return true;
}

function isgameover(){
	if(nospace(board) && nomove(board)){
		gameover();
	
	}

}

function gameover(){
	
	$("#grid-container").append("<div id='gameover' class='gameover'><p>本次得分</p><span>"+score+"</span><a href='javascript:restartgame();' id='restartgamebutton'>Restart</a></div>");
		var gameover = $("#gameover");
		gameover.css("width","500px");
		gameover.css("height","500px");
		gameover.css("background-color", "rgba(0, 0, 0, 0.5)");
		gameover.css("z-index","50");

}