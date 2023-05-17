/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;

  // Regular Variables
  var player1Points = 0
  var player2Points = 0
  // Game Item Objects
  var paddleLeft = {
    id: "#leftPaddle", 
    y: 240,
    x: 25,
    speedY: 0
  }

  var paddleRight = {
    id: "#rightPaddle", 
    y: 240,
    x: 750,
    speedY: 0
  }

  var ball = {
    id: "#ball",
    x: 390,
    y: 290,
    speedX: 4,
    speedY: 4
  }

  var gameBoard = {
    width: 800,
    height: 600,

  }

  var KEYS = {
    UP: 38,
    DOWN: 40,
    W: 87,
    S: 83, 
  }

  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    updatePosition(ball)
    Bounds(ball)
    updatePosition(paddleLeft)
    Bounds(paddleLeft)
    updatePosition(paddleRight)
    Bounds(paddleRight)

    if (player1Points === 10 || player2Points === 10) {
      endGame()
    }
  }
  
  /* 
  Called in response to events.
  */
  function updatePosition(gameItem) {
    gameItem.y += gameItem.speedY
    $(gameItem.id).css('top', gameItem.y);
    if (gameItem === ball) {
      gameItem.x += gameItem.speedX
      $(gameItem.id).css('left', gameItem.x);
    }
    
  }
  
  function points() {
    if (ball.x > (gameBoard.width - $(ball.id).width())) {
      player1Points += 1
      ball.x = 390
      ball.y = 290
    }
    if (ball.x < 0) {
      player2Points += 1
      ball.x = 390
      ball.y = 290
    }
  }

  function ballPaddleCollision(paddle) {
      
  }

  function Bounds(gameItem) {
    if (gameItem.y > (gameBoard.height - $(gameItem.id).height()) || gameItem.y < 0) {
      gameItem.speedY *= -1
    }
    if (gameItem === ball) {
      points()
      ballPaddleCollision()
    }
  }

  function handleKeyUp(event) {
    if (event.which === KEYS.UP || event.which === KEYS.DOWN) {
      paddleRight.speedY = 0
    }
    if (event.which === KEYS.W || event.which === KEYS.S) {
      paddleLeft.speedY = 0
    }
  }

  function handleKeyDown(event) {
    if (event.which === KEYS.UP) {
      paddleRight.speedY = -5
      console.log("up is being pressed")
    }
    if (event.which === KEYS.DOWN) {
      paddleRight.speedY = 5
      console.log("down is being pressed")
    }
    if (event.which === KEYS.W) {
      paddleLeft.speedY = -5
      console.log("w is being pressed")
    }
    if (event.which === KEYS.S) {
      paddleLeft.speedY = 5
      console.log("s is being pressed")
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
}
