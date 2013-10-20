
var gameModule = (function (){
	var timeoutVar,
		counter = 0;
	/*var canvas = document.getElementById('game'),
			ctx = canvas.getContext('2d');
			canvas.width = 480;
			canvas.height = 320;*/
	function touchEvent(evt){
		var x = evt.clientX,
			y = evt.clientY;
		console.log("Clienked: "+x+","+y);
	}
	function start(){
		document.getElementById('main').addEventListener("click",touchEvent,false);
		startGame();
	}
	function startGame(){
		var canvas = document.getElementById('game'),
			ctx = canvas.getContext('2d');
		var	ballX = Math.floor(Math.random()*400),
			ballY = Math.floor(Math.random()*500),
			ballR = Math.floor(Math.random()*100),
			a = Math.floor(Math.random()*255),
			b = Math.floor(Math.random()*255),
			c = Math.floor(Math.random()*255);
			canvas.width = 480;
			canvas.height = 320;
		
		ctx.fillStyle ="rgb("+a+","+b+","+c+")";
		ctx.beginPath();
		ctx.arc(ballX,ballY,ballR,0,Math.PI*2,true);
		ctx.fill();
		ctx.font="40px Arial";
		ctx.fillStyle = 'Tomato ';
  		ctx.fillText("炘 ",420,300);

		if(counter>=10)
		{
			print();
		}
		else
		{
			timeoutVar = setTimeout(start,1000);
			counter++;
			//console.log("Counter = "+counter);
		}
	}
	
	function print(){
		console.log("Counter = "+counter);
	}
	return {
		start:start
	//	print:print
	}
})();

gameModule.start();
//gameModule.print();