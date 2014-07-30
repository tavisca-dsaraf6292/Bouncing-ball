
var minXCoord = 0;  
var maxXCoord= window.innerWidth-55;  
var minYCoord= 0;  
var maxYCoord=window.innerHeight-55; 
var addBall=document.getElementById("add");
var count=1;

function ball_animation(ball)
{

  this.obj=ball;
  this.xCoord=Math.floor((Math.random() * window.innerWidth) + 1);
  this.yCoord=Math.floor((Math.random() * window.innerHeight) + 1);
  this.ballDx=20;  
  this.ballDy=20;
  this.div=ball;

  this.ballAnimation=function()
  {
    this.xCoord= parseInt(this.div.style.left);
    this.yCoord= parseInt(this.div.style.top); 
    this.xCoord +=this.ballDx;
    this.yCoord += this.ballDy;
    this.boundaryCondition();
    this.div.style.left = this.xCoord + "px";
    this.div.style.top = this.yCoord + "px";
  }

  this.boundaryCondition=function()
  {
    if(this.xCoord>maxXCoord || this.xCoord<minXCoord)
      this.ballDx =- this.ballDx;   
    if(this.yCoord>maxYCoord || this.yCoord<minYCoord)
      this.ballDy =- this.ballDy;   
  }
}

addBall.onclick=function(){
   var ballDiv=createBall();
   var result=new ball_animation(ballDiv);
   window.setInterval(function (){ result.ballAnimation() },30);
}

function createBall()
{
   var div = document.createElement("div");
   div.id = "div" + count ;
   count+=1;
   div.style.position= 'absolute'; 
   div.style.left = Math.floor((Math.random() * window.innerWidth) + 1)+ "px";
   div.style.top=Math.floor((Math.random() * window.innerHeight) + 1) + "px";
   div.style.width='20px';
   div.style.height='20px';
   div.style.borderRadius = '50px';
   div.style.backgroundColor='#000000';       
   document.body.appendChild(div);
   return div;
}