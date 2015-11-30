$(function(){

  console.log("main js loaded.");

  turn = "player1";
  winner = null;
  winresult = false;
  player1Count = 0;
  player2Count = 0;

  //Displaying messages
  function displayMessage(message) {
    document.getElementById("messages").innerHTML = message;
  }

  displayMessage("Player 1 gets to begin! Pick a player to get started!");

  //Player object constructor below with standard stats
  function Player (dunk, long2, corner3, long3, defRating) {
    this.dunk = dunk;
    this.long2 = long2;
    this.corner3 = corner3;
    this.long3 = long3;
    this.defRating = defRating;
  }

  //instances of player object below with stats
  //                     dunk  long2 corner3 long3 defRating
  steph = new Player(0.68, 0.57, 0.45, 0.51, 0.80);

  lebron = new Player(0.72, 0.49, 0.50, 0.40, 0.95);

  durant = new Player(0.65, 0.48, 0.45, 0.45, 0.80);

  //Kobe 12-13 numbers below, via Kirk Goldsberry shot charts
  kobe = new Player (0.60, 0.40, 0.32, 0.32, 0.60);

  //these are league averages for those shots, using
  //mean of player group's shot averages /2 (accounting for Math.random)

  dunkAvg = 0.33;
  long2Avg = 0.24;
  corner3Avg = 0.22;
  long3Avg = 0.21;

  //Create jQuery click events for (1.) clicking on player,
  //storing as variable (2.) choosing shot,
  //and using Math.random to determine points total + counting score


  //Selecting your player, storing that variable
  $('#playerSelect1').click(function() {
    //testing here by hard-coding LeBron
    //if you select lebron, set playerOne equal.
    if($("#playersToChoose").val() == "lebron") {
      playerOne = lebron;
      $('#player1').css('background-color', '#a84551');
    }
    else if($("#playersToChoose").val() == "steph") {
      playerOne = steph;
      $('#player1').css('background-color', 'gold');
    }
    else if($("#playersToChoose").val() == "durant") {
      playerOne = durant;
      $('#player1').css('background-color', 'white');
    }
    else if($("#playersToChoose").val() == "kobe"){
      playerOne = kobe;
      $('#player1').css('background-color', '#b19cd9');
    }

    // playerOne = $("#playersToChoose").val();
    $(this).attr("disabled","disabled");
    //temporary alerts for testing
    alert("Player 1 chose " + $("#playersToChoose").val());
    displayMessage("Player 2, your turn to pick a player");
    $('#player1 h2').text($("#playersToChoose").val().toUpperCase());

  });

  $('#playerSelect2').click(function() {
    if($("#playersToChoose").val() == "lebron") {
      playerTwo = lebron;
      $('#player2').css('background-color', '#a84551');

    }
    else if($("#playersToChoose").val() == "steph") {
      playerTwo = steph;
      $('#player2').css('background-color', 'gold');
    }
    else if($("#playersToChoose").val() == "durant") {
      playerTwo = durant;
      $('#player2').css('background-color', 'white');
    }
    else if($("#playersToChoose").val() == "kobe"){
      playerTwo = kobe;
      $('#player2').css('background-color', '#b19cd9');
    }
    $(this).attr("disabled","disabled");
    alert("Player 2 chose " + $("#playersToChoose").val());
    $('#player2 h2').text($("#playersToChoose").val().toUpperCase());
    $('#playerlist h2').text("First one to 21 wins the game!");
    displayMessage("Game on! Player 1, start us off.");
  });


  //Selecting your shot, running the probabilities, adding to count
  //re-factor this.

  $('#shoot1').click(function() {
    //case #1: dunk. it's either 0 or 2
    if($('#player1Shot').val() == 'dunk') {
      //calculate probability: Math.random(dunk), 0 or 2
      // player1Points = Math.random * this.dunk;
      //NOTE: dunk hard coded as 2 below, for testing purposes.
      player1Points = Math.random() * playerOne.dunk;
        if(player1Points > dunkAvg ) {
          //if your percentage is greater than league avg, you make it
          //and you get 2 points.
          player1Points = 2;
         //display the div for a MAKE: visible css
        // $('#made').css('visibility', 'visible')
         //if it's 0 or 2, add it to the player1Count
         player1Count = player1Count + player1Points;
         //try returning your values so they can be accessed by alert
        }
        else {
            player1Points = 0;
            //display div for a MISS: append and show
        // $('#missed').css('visibility', 'visible')
        }
        // alert("Player 1 scored " + player1Points + " points");
    //display the score in the div at bottom of player1
    $('#player1Score').text(player1Count);
    // changeTurn();
    }
    //case #2: long 2. it's either 0 or 2.
    if($('#player1Shot').val() == 'long2') {
      player1Points = Math.random() * playerOne.long2;
        if(player1Points > long2Avg) {
          player1Points = 2;
          player1Count += player1Points;
        }
        else {
          player1Points = 0;
        }
    // changeTurn();
    }
    //case #3: corner 3. it's either 0 or 3.
    if($('#player1Shot').val() == 'corner3') {
      player1Points = Math.random()* playerOne.corner3;
        if(player1Points > corner3Avg) {
          //if it's 3 or 0, add it to player1Count
          player1Points = 3;
          player1Count += player1Points;
        }
        else {
          player1Points = 0;
        }
    // changeTurn();
    }
    //case #4: long 3. it's either 0 or 3.
    if($('#player1Shot').val() == 'long3') {
      player1Points = Math.random() * playerOne.long3;
        if(player1Points > long3Avg) {
          player1Points = 3;
          player1Count += player1Points;
        }
        else {
          player1Points = 0;
        }
    // changeTurn();
    }
    alert("Player 1 scored " + player1Points + " points");
    //display the score in the div at bottom of player1
    $('#player1Score').text(player1Count);
    //hard-coded turn switch below
    changeTurn();
    checkForWinner(player1Count, player2Count);
    displayMessage("It's Player 2's turn to shoot!");
  });


  //Now for player 2 - re-factor this, eventually

$('#shoot2').click(function() {
    //case #1: dunk. it's either 0 or 2
    if($('#player2Shot').val() == 'dunk') {
      player2Points = Math.random() * playerTwo.dunk;
      //calculate probability: Math.random(dunk), 0 or 2
        if(player2Points > dunkAvg) {
         //display the div for a MAKE: append and show
        // $('#gifCentral').append('<img id="made" src="http://24.media.tumblr.com/bc5d571f93d62e8ca19aabca7bcff00b/tumblr_mf6j7pgcGV1qbjsl3o1_500.gif"/>');
        // $('#missed').hide();
        // $('#made').toggle();
         //if it's 0 or 2, add it to the player1Count
         player2Points = 2;
         player2Count = player2Count + player2Points;

         //try returning your values so they can be accessed by alert
        }
        else {
            player2Points = 0;
            //display div for a MISS: append and show
        // $('#gifCentral').append('<img id = "missed" src = "http://cdn0.sbnation.com/assets/3931087/parkerft.gif"/>');
        // $('#missed').toggle();
        // $('#made').hide();
        }

    //display the score in the div at bottom of player1
    $('#player2Score').text(player2Count);
    // changeTurn();

    }
    //case #2: long 2. it's either 0 or 2.
    if($('#player2Shot').val() == 'long2') {
      player2Points = Math.random() * playerTwo.long2;
        if(player2Points > long2Avg) {
          player2Points = 2;
          player2Count += player2Points;
        }
        else {
          player2Points = 0;
        }
    // changeTurn();
    }
    //case #3: corner 3. it's either 0 or 3.
    if($('#player2Shot').val() == 'corner3') {
      player2Points = Math.random() * playerTwo.corner3;
        if(player2Points > corner3Avg) {
          //if it's 3 or 0, add it to player1Count
          player2Points = 3;
          player2Count += player2Points;
        }
        else {
          player2Points = 0;
        }
    // changeTurn();
    }
    //case #4: long 3. it's either 0 or 3.
    if($('#player2Shot').val() == 'long3') {
      player2Points = Math.random() * playerTwo.long3;
        if(player2Points > long3Avg) {
          player2Points = 3;
          player2Count += player2Points;
        }
        else {
          player2Points = 0;
        }
    // changeTurn();
    }
    alert("Player 2 scored " + player2Points + " points");
    //display the score in the div at bottom of player1
    $('#player2Score').text(player2Count);
    changeTurn();
    checkForWinner(player1Count, player2Count);
    displayMessage("It's Player 1's turn to shoot!");

  });


  //Eventually, re-factor the code above into one function covering
  //both player 1 and 2. Then, create and call back functions for dunk,
  //long2, corner3, and long3.

  //Making another shot selection

  function nextMove() {

      if(winner !== null) {
        displayMessage(winner + " already won the game");
      } else {
          changeTurn();
      }

  };

  //Changing turns

  function changeTurn() {
    winresult = false;
    if(winresult = true) {
      displayMessage("Congrats, " + turn + ", you won!");
      winner = turn;
    }
    if(turn === "player1") {
      turn === "player2";
      displayMessage("It's " + turn + "'s turn to shoot!");
    }
    else {
      turn === "player1";
      displayMessage("It's " + turn + "'s turn to shoot!");
    }
  };


  //Checking for a winner if count >=21,
  //this is called back in changeturn to see if a win has occurred.

  function checkForWinner(player1Count, player2Count) {
    if(player1Count || player2Count >= 6) {
      winresult = true;
      return true;
    }
  };


});
