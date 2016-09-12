var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});



//cone

  r.triangle(350, 580, 420, 780, 450, 550)
    .fill(0)   
    .stroke(0)
    .strokeWidth(2)
    .rotate(-5);
   

// //balls

var allBalls = 5;

 for (var i = 0; i<allBalls ; i++) {
  r.ellipse(400-i*(Math.random()*40+20), 500-i*50, 150+1*(Math.random()*10+1), 150+i*(Math.random()*2+1))
     .fill(255)
     .stroke(0)
     .strokeWidth(1+i*0.7)
     .rotate(-3)

}



//sprinkle rain

 for (var i = 0; i<200 ; i++){

 r.rect(700-i*(Math.random()*2+1), 100-i*(Math.random()*3+1), 1, 10)
    .fill(0)
    .stroke(0)


// white sprinkles
// for (var i = 0; i<250 ; i++){
//  r.rect(700-i*(Math.random()*2+1)+100, 200-i*(Math.random()*3+1)+100, 1, 10)
//     .fill(255)
//     .stroke(255)


    .rotate(Math.random() * (60) + 1)

    }








r.draw();