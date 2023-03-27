let ctx;
function setup() { 
	createCanvas(800, 500); 
	background(100); 
	ctx = canvas.getContext('2d'); 
	ctx.lineWidth = 80;
	ctx.lineCap = 'round'
	gradientLine(ctx, 60, 60, 300, 380, 'lightblue', 'purple') 
	gradientLine(ctx, 720, 120, 80, 300, 'orange', 'white') 
	gradientLine(ctx, 520, 70, 500, 440, 'lightgreen', 'pink') 
}

function draw() { 

}

function gradientLine(ctx, x1, y1, x2, y2, c1, c2) {
  const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
  gradient.addColorStop(0, c1);
  gradient.addColorStop(1, c2);
  ctx.strokeStyle = gradient;

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}