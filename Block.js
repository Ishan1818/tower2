class Block {
    constructor(x,y,width,height) {
      var options = {
        restitution:0.5,
        friction: 0.0,
        isStatic:false
      
        
      }
      this.visibility=250;
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      
    
    }
    display(){
       if(this.body.speed < 4){
   fill("yellow");
   var angle= this.body.angle;
   var pos = this.body.position;
   push();
   translate(pos.x,pos.y);
   rotate(angle);
   rectMode(CENTER);
   rect(0, 0, this.width, this.height);
   pop();
       }
       else{
 
              World.remove(world, this.body);
              push()
              this.visibility=this.visibility-10   
              pop()           
                       
       }
    }
  }