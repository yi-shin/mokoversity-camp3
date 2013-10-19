
var gameModule = (function (){
	var timeoutVar,
		counter = 0;
	function start(){
		var canvas = document.getElementById('game'),
			ctx = canvas.getContext('2d'),
			ballX = Math.floor(Math.random()*300),
			ballY = Math.floor(Math.random()*500),
			ballR = Math.floor(Math.random()*100);
		
		canvas.width = 480;
		canvas.height = 320;
		ctx.fillStyle ='DeepSkyBlue ';
		ctx.beginPath();
		ctx.arc(ballX,ballY,ballR,0,Math.PI*2,true);
		ctx.fill();
		ctx.font="40px Arial";
		ctx.fillStyle = 'Tomato ';
  		ctx.fillText("Hello ",10,50);

		if(counter>=10)
		{
			console.log("END");
		}
		else
		{
			timeoutVar = setTimeout(start,1000);
			counter++;
			//console.log("Counter = "+counter);
			print();
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