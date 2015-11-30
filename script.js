$(function(){

  console.log("main js loaded.");

  // alert("Let the games begin");
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
  var steph = new Player(0.68, 0.57, 0.45, 0.51, 0.80);

  var lebron = new Player(0.72, 0.49, 0.50, 0.40, 0.95);

  var durant = new Player(0.65, 0.48, 0.45, 0.45, 0.80);

  //Kobe 12-13 numbers below, via Kirk Goldsberry shot charts
  var kobe = new Player (0.60, 0.40, 0.32, 0.32, 0.60);

  //Create jQuery click events for (1.) clicking on player,
  //storing as variable (2.) choosing shot,
  //and using Math.random to determine points total + counting score


  //Selecting your player, storing that variable
  $('#playerSelect1').click(function() {
    playerOne = $("#playersToChoose").val();
    //temporary alerts for testing
    alert("Player 1 chose " + playerOne);
    displayMessage("Player 2, your turn to pick a player");
    $('#player1 h2').text(playerOne);

  });

  $('#playerSelect2').click(function() {
    playerTwo = $("#playersToChoose").val();
    alert("Player 2 chose " + playerTwo);
    $('#player2 h2').text(playerTwo);
    displayMessage("Game on!");
  });


  //Selecting your shot, running the probabilities, adding to count

  $('#shoot1').click(function() {
    //case #1: dunk. it's either 0 or 2
    alert("Shots fired!");
    if($('#player1Shot').val() == 'dunk') {
      //calculate probability: Math.random(dunk), 0 or 2
      //math.ceil rounds up, math.random is 0 or 1, dunk is dunk probab.
      player1Points =  Math.ceil(Math.random() * this.dunk * 2);
        if(player1Points > 0 ) {
         alert("Player 1 scored " + player1Points + " points");
         //display the div for a MAKE: append and show
        $('#gifCentral').append('<img id="made" src="http://24.media.tumblr.com/bc5d571f93d62e8ca19aabca7bcff00b/tumblr_mf6j7pgcGV1qbjsl3o1_500.gif"/>');
        $('#made').show();
         //if it's 0 or 2, add it to the player1Count
         player1Count = player1Count + player1Points;

         //try returning your values so they can be accessed by alert
        }
        else {
            player1Points = 0;
            //display div for a MISS: append and show
        $('#gifCentral').append('<img id = "missed" src = "http://cdn0.sbnation.com/assets/3931087/parkerft.gif"/>');
        $('#missed').show();
        }
        alert("Player 1 scored " + player1Points + " points");
    //display the score in the div at bottom of player1
    $('#player1Score').text(player1Count);
    changeTurn();
    }
    //case #2: long 2. it's either 0 or 2.
    if($('#player1Shot').val() == 'long2') {
      player1Points = Math.ceil(Math.random() * this.long2 * 2);
        if(player1Points >=2) {
          player1Count += player1Points;
        }
        else {
          player1Points = 0;
        }
    changeTurn();
    }
    //case #3: corner 3. it's either 0 or 3.
    if($('#player1Shot').val() == 'corner3') {
      player1Points = Math.ceil(2*Math.random() * this.corner3 * 3);
        if(player1Points >=3) {
          //if it's 3 or 0, add it to player1Count
          player1Count += player1Points;
        }
        else {
          player1Points = 0;
        }
    changeTurn();
    }
    //case #4: long 3. it's either 0 or 3.
    if($('#player1Shot').val() == 'long3') {
      player1Points = Math.ceil(2*Math.random() * this.long3 * 3);
        if(player1Points >=3) {
          player1Count += player1Points;
        }
        else {
          player1Points = 0;
        }
    changeTurn();
    }
    alert("Player 1 scored " + player1Points + " points");
    //display the score in the div at bottom of player1
    $('#player1Score').text(player1Count);
    changeTurn();
  });


  //Now for player 2 - re-factor this, eventually

$('#shoot2').click(function() {
    //case #1: dunk. it's either 0 or 2
    alert("Shots fired!");
    if($('#player2Shot').val() == 'dunk') {
      //calculate probability: Math.random(dunk), 0 or 2
      //math.ceil rounds up, math.random is 0 or 1, dunk is dunk probab.
      player2Points =  Math.ceil(Math.random() * this.dunk * 2);
        if(player2Points > 0 ) {
         alert("Player 2 scored " + player2Points + " points");
         //display the div for a MAKE: append and show
        $('#gifCentral').append('<img id="made" src="http://24.media.tumblr.com/bc5d571f93d62e8ca19aabca7bcff00b/tumblr_mf6j7pgcGV1qbjsl3o1_500.gif"/>');
        $('#made').show();
         //if it's 0 or 2, add it to the player1Count
         player2Count = player2Count + player2Points;

         //try returning your values so they can be accessed by alert
        }
        else {
            player2Points = 0;
            //display div for a MISS: append and show
        $('#gifCentral').append('<img id = "missed" src = "http://cdn0.sbnation.com/assets/3931087/parkerft.gif"/>');
        $('#missed').show();
        }
        alert("Player 2 scored " + player2Points + " points");
    //display the score in the div at bottom of player1
    $('#player2Score').text(player2Count);
    changeTurn();
    }
    //case #2: long 2. it's either 0 or 2.
    if($('#player2Shot').val() == 'long2') {
      player2Points = Math.ceil(Math.random() * this.long2 * 2);
        if(player2Points >=2) {
          player2Count += player2Points;
        }
        else {
          player2Points = 0;
        }
    changeTurn();
    }
    //case #3: corner 3. it's either 0 or 3.
    if($('#player2Shot').val() == 'corner3') {
      player2Points = Math.ceil(2*Math.random() * this.corner3 * 3);
        if(player2Points >=3) {
          //if it's 3 or 0, add it to player1Count
          player2Count += player2Points;
        }
        else {
          player2Points = 0;
        }
    changeTurn();
    }
    //case #4: long 3. it's either 0 or 3.
    if($('#player2Shot').val() == 'long3') {
      player2Points = Math.ceil(2*Math.random() * this.long3 * 3);
        if(player2Points >=3) {
          player2Count += player2Points;
        }
        else {
          player2Points = 0;
        }
    changeTurn();
    }
    alert("Player 2 scored " + player2Points + " points");
    //display the score in the div at bottom of player1
    $('#player2Score').text(player2Count);
    changeTurn();
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
    // if(winresult = true) {
    //   displayMessage("Congrats, " + turn + ", you won!");
    //   winner = turn;
    // }
    if(turn === "player1") {
      turn = "player2";
      displayMessage("It's " + turn + "'s turn to shoot!");
    }
    else {
      turn = "player1";
      displayMessage("It's " + turn + "'s turn to shoot!");
    }
  }


  //Checking for a winner if count >=21,
  //this is called back in changeturn to see if a win has occurred.

  function checkForWinner(player1Count, player2Count) {
    winresult = false;
    if(player1Count || player2Count >= 21) {
      winresult = true;
      return true;
    }
  }


});
