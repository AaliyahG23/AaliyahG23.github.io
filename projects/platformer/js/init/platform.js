(function (window) {
  "use strict";
  window.opspark = window.opspark || {};
  window.opspark.platform = window.opspark.platform || {};

  let platform = window.opspark.platform;

  /**
   * init: This function initializes the platforms for the level.
   *
   * GOAL: Add as many platforms necessary to make your level challenging.
   *
   * Use the createPlatform Function to create platforms for the level.
   *
   * createPlatform() takes these arguments:
   *
   *      createPlatform(x, y, scaleX, scaleY);
   *
   *      x: The x coordineate for the platform.
   *      y: The y coordineate for the platform.
   *      scaleX: OPTIONAL The scale factor on the x-axis, this value will
   *              stretch the platform in width.
   *      scaleY: OPTIONAL The scale factor on the y-axis, this value will
   *              stretch the platform in height.
   */
  function init(game) {
    let createPlatform = platform.create;

    ////////////////////////////////////////////////////////////////////////
    // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////

    /*
     * ground : here, we create a floor. Given the width of of the platform
     * asset, giving it a scaleX and scaleY of 2 will stretch it across the
     * bottom of the game.
     */
    createPlatform(0, game.world.height - 32, 3, 2); // DO NOT DELETE

    // example:
    createPlatform(300, 300, .30, 2.45);
    createPlatform(120, 600, .15, .3);
    createPlatform(300, 525, .15, .3);
    createPlatform(465, 470, .3, .3);
    createPlatform(520, 380, .3, .3);
    createPlatform(750, 525, .4, 1.5);
    //barrier
    createPlatform(707, 280, .02, 7);
    //barrier
    createPlatform(575, 275, .35, .3);
    createPlatform(707, 425, .2, .3);
    createPlatform(820, 340, .2, .3);
    createPlatform(460, 56, .02, 4);
    createPlatform(380, 175, .2, .3);
    createPlatform(465, 175, .2, .3);
    createPlatform(0, 230, .6, .5);
    

    // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
  }
  platform.init = init;
})(window);
