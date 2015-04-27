//Development script, remember to convert to production, but create a copy first
var init = function(){//Starting blocks of code
    game.container.style.backgroundImage = "bin/bert_1.png";
};
var shootButton = {
  container : document.getElementById("attack"),
  fire : function(){
    //Shows it on the display
  }
};
var game = {
  container : document.getElementById('game'),
  context : document.getElementById('game').getContext("2d"),
  width : window.innerwidth,
  height : window.innerheight,
};
var press = function(button){
  if(button === "left"){
    console.log("Left button pressed");
  }else if(button === "right"){
    console.log("Right button pressed");
  }else if(button === "SHOOT"){
    console.log("Shoot button pressed");
    shootButton.fire();
  }
};
/*On two occasions I have been asked, ‘Pray, Mr. Babbage, if
you put into the machine wrong figures, will the right answers
come out?’ […] I am not able rightly to apprehend the kind of
confusion of ideas that could provoke such a question.”
—Charles Babbage, Passages from the Life of a Philosopher
(1864)*/