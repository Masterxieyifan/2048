function getPosTop(i,j){
	return 20 + i*120;
}

function getPosLeft(i,j){
	return 20 + j*120;
}

function getNumberBackgroundColor(number){
	switch (number){
		case 2 :return "#eee4da";
		break;
		case 4 :return "#ede08a";
		break;
		case 8 :return "#f2b179";
		break;
		case 16 :return "#f59563";
		break;
		case 32 :return "#f67c5f";
		break;
		case 64 :return "#f65e3b";
		break;
		case 128 :return "#edcc61";
		break;
		case 256 :return "#9c0";
		break;
		case 512 :return "#33b5e5";
		break;
		case 1024 :return "#09c";
		break;
		case 2048 :return "#a6c";
		break;
		case 4096 :return "#93c";
		break;
		case 8192 :return "#94c";
		break;

	}
}

function getNumberColor(number){
	if(number<=4){
		return "#776e65"
	}
	return "white";
}

function canMoveLeft(board){
	for (var i = 0; i < 4; i++) {
		for (var j = 1; j < 4; j++) {
			if(board[i][j]!=0){//遍历所有数字格，最左边不用遍历，反正也移不动
				//当前数字格左边数字格数值为0
				//或者与左边数字格数值相等时就判断是可以移动的 
				if(board[i][j-1]==0 || board[i][j-1]==board[i][j]){
					return true;
				}
			}
		}
	}
	return false;
}
	


function noBlokHorizontalColLeft(row,col1,col2,board){
	for(var i=col1+1;i<col2;i++){
		if(board[row][i]!=0){
			return false;
		}
	}
	return true;
}

function canMoveRight(board){
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 3; j++) {
			if(board[i][j]!=0){//遍历所有数字格，最右边不用遍历，反正也移不动
				//当前数字格右边数字格数值为0
				//或者与右边数字格数值相等时就判断是可以移动的 
				if(board[i][j+1]==0 || board[i][j+1]==board[i][j]){
					return true;
				}
			}
		}
	}
	return false;
}

function noBlokHorizontalColRight(row,col1,col2,board){
	for(var i=col2+1;i<col1;i++){
		if(board[row][i]!=0){
			return false;
		}
	}
	return true;
}

function canMoveUp(board){
	for(var i=1;i<4;i++){
		for(var j=0;j<4;j++){
			if(board[i][j]!=0){
				if(board[i-1][j]==0||board[i-1][j]==board[i][j]){
					return true;
				}
			}
		}
	}
	return false;
}
function noBlokHorizontalColUp(col,row1,row2,board){
	for(var i=row2+1;i<row1;i++){
		if(board[i][col]!=0){
			return false;
		}
	}
	return true;
}

function canMoveDown(board){
	for(var i=0;i<3;i++){
		for(var j=0;j<4;j++){
			if(board[i][j]!=0){
				if(board[i+1][j]==0||board[i+1][j]==board[i][j]){
					return true;
				}
			}
		}
	}
	return false;
}

function noBlokHorizontalColDown(col,row1,row2,board){
		for(var i=row1+1;i<row2;i++){
			if(board[i][col]!=0){
				return false;
			}
		}
		return true;
}

function nospace(board){
	for(var i = 0 ;i < 4 ; i ++){
		for(var j = 0 ; j < 4 ; j ++){
			if(board[i][j]==0){
				return false;
			}
		}
	}  
	return true;
}

function nomove(board){
	if(canMoveLeft(board)||canMoveUp(board)||canMoveRight(board)||canMoveDown(board)){
		return false;
	}
	return true;
}