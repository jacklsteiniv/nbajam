$(function(){

  console.log("main js loaded.");

  alert("Let the games begin");
  turn = "player1";
  winner = null;
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
  $('#playerSelect').click(function() {
    var playerOne = $("#playersToChoose").val();
    //temporary alerts for testing
    alert("Player 1 chose " + playerOne);
    displayMessage("Player 2, your turn to pick a player");
    $('#player1 h3').text(playerOne);

  });

  $('#playerSelect').click(function() {
    var playerTwo = $("#playersToChoose").val();
    alert("Player 2 chose " + playerTwo);
    $('#player2 h3').text(playerTwo);
    displayMessage("Game on!");
  });



  //Selecting your shot, running the probabilities, adding to count

  $('Shoot').click(function() {
    //case #1: dunk. it's either 0 or 2
    if($('#player1Shot').val() == 'dunk') {
      //calculate probability: Math.random(dunk), 0 or 2
      //math.ceil rounds up, math.random is 0 or 1, dunk is dunk probab.
      player1Points =  Math.ceil(Math.random() * dunk * 2);
        if(player1Points % 2 == 0) {
         //if it's 0 or 2, add it to the player1Count
         player1Count += player1Points;
        }
        else {
            player1Points = 0;
        }
        alert("Player 1 scored " + player1Points + " points");
    //display the score in the div at bottom of player1
    $('#player1Score').innerHTML += player1Count;
    changeTurn();
    }
    //case #2: long 2. it's either 0 or 2.
    if($('#player1Shot').val() == 'long2') {
      player1Points = Math.ceil(Math.random() * long2 * 2);
        if(player1Points %2 == 0) {
          player1Count += player1Points;
        }
        else {
          player1Points = 0;
        }
        alert("Player 1 scored " + player1Points + " points");
    //display the score in the div at bottom of player1
    $('#player1Score').innerHTML += player1Count;
    changeTurn();
    }
    //case #3: corner 3. it's either 0 or 3.
    if($('#player1Shot').val() == 'corner3') {
      player1Points = Math.ceil(Math.random() * corner3 * 3);
        if(player1Points %3 == 0) {
          //if it's 3 or 0, add it to player1Count
          player1Count += player1Points;
        }
        else {
          player1Points = 0;
        }
        alert("Player 1 scored " + player1Points + " points");
    //display the score in the div at bottom of player1
    $('#player1Score').innerHTML += player1Count;
    changeTurn();
    }
    //case #4: long 3. it's either 0 or 3.
    if($('#player1Shot').val() == 'long3') {
      player1Points = Math.ceil(Math.random() * long3 * 3);
        if(player1Points %3 == 0) {
          player1Count += player1Points;
        }
        else {
          player1Points = 0;
        }
        alert("Player 1 scored " + player1Points + " points");
    //display the score in the div at bottom of player1
    $('#player1Score').innerHTML += player1Count;
    changeTurn();
    }
    alert("Player 1 scored " + player1Points + " points");
    //display the score in the div at bottom of player1
    $('#player1Score').innerHTML += player1Count;
    changeTurn();
  });



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
    if(checkForWinner(turn)) {
      displayMessage("Congrats, " + turn + ", you won!");
      winner = turn;
    }
    else if(turn === "player1") {
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
    result = false;
    if(player1Count || player2Count >= 21) {
      result = true;
      return true;
    }
  }



});
