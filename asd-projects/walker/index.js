/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    "LEFT": 37,
    "UP": 38,
    "RIGHT": 39,
    "DOWN": 40, 
    "W": 87, 
    'A': 65, 
    'S': 83, 
    'D': 68
  }
  var boardHeight = 440 // the height of #board
  var boardWidth = 440 // the width of #board
  var positionX = 0
  var positionY = 0
  var speedX = 0
  var speedY = 0
  var player2PositionX = boardWidth
  var player2PositionY = boardHeight
  var player2SpeedX = 0
  var player2SpeedY = 0
  var walkerEdge = positionX + 50 //50: the width/height of walker; same line of code for the bottom edge, so it can be omitted
  // Game Item Objects
  //edge value for testing collision
  var bottomEdge = positionY + 50


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);
  //$(itRandomizer()).addClass('it')


  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    if (positionX < 0 || positionX > (boardWidth - walkerEdge)) {
      positionX = 0
    }
    if (positionY < 0 || positionY > (boardHeight - walkerEdge)) {
      positionY = 0
    }
    if (player2PositionX < 0 || player2PositionX > (boardWidth - walkerEdge)) {
      player2PositionX = boardWidth - walkerEdge
    }

    if (player2PositionY < 0 || player2PositionY > (boardHeight - walkerEdge)) {
      player2PositionY = boardHeight - walkerEdge
    }

    //collision()
    //if (collision() === true) {
      //if (it === "walker2") {
       // $(it).removeClass("it")
       // it = "walker"
     // } else {
        //it = 'walker 2'
     // }
   // }

    repositionGameItems()
    redrawGameItems()

  }

  function collision() {
    if (positionX <= player2PositionX && player2PositionX <= walkerEdge) {
      if (positionY <= player2PositionY && player2PositionY <= bottomEdge) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
      if (event.which === KEY.LEFT) {
        console.log("left pressed")
        speedX = -5
      }
      if (event.which === KEY.UP) {
        console.log("up pressed")
        speedY = -5
      }
      if (event.which === KEY.RIGHT) {
        console.log("right pressed")
        speedX = 5
      }
      if (event.which === KEY.DOWN) {
        console.log("down pressed")
        speedY = 5
      }
      if (event.which === KEY.W) {
        console.log("w pressed")
        player2SpeedY = -5
      }
      if (event.which === KEY.A) {
        console.log("a pressed")
        player2SpeedX = -5
      }
      if (event.which === KEY.S) {
        console.log("s pressed")
        player2SpeedY = 5
      }
      if (event.which === KEY.D) {
        console.log("d pressed")
        player2SpeedX = 5
      }
  }
  function handleKeyUp(event) {
    if (event.which === KEY.LEFT || event.which === KEY.RIGHT) {
      speedX = 0
    }
    if (event.which === KEY.UP || event.which === KEY.DOWN) {
      speedY = 0
    }
    if (event.which === KEY.W || event.which === KEY.S) {
      player2SpeedY = 0
    }
    if (event.which === KEY.A || event.which === KEY.D) {
      player2SpeedX = 0
    }

  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

  function repositionGameItems() {
      positionX += speedX;
      positionY += speedY;
      player2PositionX += player2SpeedX;
      player2PositionY += player2SpeedY;
  }

  function redrawGameItems() {
    $("#walker").css("left", positionX);
    $('#walker').css("top", positionY);
    $("#walker2").css("left", player2PositionX);
    $('#walker2').css("top", player2PositionY);
  }
  
  function itRandomizer() {
    var idNum = Math.ceil(Math.random() * 2)
    if (idNum === 2) {
      return '#walker2'
    } 
    if (idNum === 1) {
      return '#walker'
    }
  }
}
