// Development script, remember to convert to production, but create a copy first
// Starting blocks of code
var init = function() { 
    game.container.style.backgroundImage = "bin/bert_1.png";
};

// On-screen shoot button
var shootButton = {
  container : document.getElementById("attack"),
  fire : function() {
    //Shows it on the display
  }
};

// Define the game
var game = {
  container : document.getElementById("game"),
  context : document.getElementById("game").getContext("2d"),
  width : window.innerwidth,
  height : window.innerheight,
};

// Press
var press = function (button) {
  var key = event.charCode;
  if(button === "left" || key === 65 || key === 37) {
    console.log("Left button pressed");
  } else if(button === "right" || key === 68 || key === 39) {
    console.log("Right button pressed");
  } else if(button === "SHOOT" || key === 13 || key === 32 ) {
    console.log("Shoot button pressed");
    shootButton.fire();
  }
};

/* On two occasions I have been asked, ‘Pray, Mr. Babbage, if
you put into the machine wrong figures, will the right answers
come out?’ […] I am not able rightly to apprehend the kind of
confusion of ideas that could provoke such a question.”
—Charles Babbage, Passages from the Life of a Philosopher
(1864) */