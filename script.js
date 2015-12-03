$(function(){

  console.log('main js loaded.');
  turn = 'player1';
  winresult = false;
  player1Count = 0;
  player2Count = 0;

  //Displaying messages
  function displayMessage(message) {
    document.getElementById('messages').innerHTML = message;
  }


  displayMessage('Player 1 gets to begin! Pick a player to get started!');

  //Player object constructor below with standard stats
  function Player (dunk, long2, corner3, long3, defRating) {
    this.dunk = dunk;
    this.long2 = long2;
    this.corner3 = corner3;
    this.long3 = long3;
    this.defRating = defRating;
  }

  //instances of player object below with stats, per BasketballReference
  //                     dunk  long2 corner3 long3 defRating
  steph = new Player(0.68, 0.57, 0.45, 0.51, 0.80);

  lebron = new Player(0.72, 0.49, 0.50, 0.40, 0.95);

  durant = new Player(0.65, 0.48, 0.45, 0.45, 0.80);

  //Kobe 12-13 numbers below, via Kirk Goldsberry shot charts
  kobe = new Player (0.60, 0.40, 0.32, 0.32, 0.60);

  //defRating divides the player's score each time, essentially accounting
  //for the strength of the opposing player's defense.
  //a player with a higher defRating mounts a stronger defense

  //Below are 'league averages' for those shots, using
  //mean of player group's shot averages /2 (accounting for Math.random)

  dunkAvg = 0.33;
  long2Avg = 0.24;
  corner3Avg = 0.22;
  long3Avg = 0.21;

  //Created jQuery click events for (1.) clicking on player,
  //storing as variable object (2.) choosing shot,
  //and using Math.random to determine points total + counting score

  //Selecting your player, storing that variable
  $('#playerSelect1').click(function() {

    if($('#playersToChoose').val() == 'lebron') {
      playerOne = lebron;
      $('#player1').css('background-color', '#a84551');
    }
    else if($('#playersToChoose').val() == 'steph') {
      playerOne = steph;
      $('#player1').css('background-color', 'gold');
    }
    else if($('#playersToChoose').val() == 'durant') {
      playerOne = durant;
      $('#player1').css('background-color', '#007DC3');
    }
    else if($('#playersToChoose').val() == 'kobe'){
      playerOne = kobe;
      $('#player1').css('background-color', '#b19cd9');
    }

    $(this).attr("disabled","disabled");
    displayMessage("Player 2, your turn to pick a player");
    $('#player1 h2').text($("#playersToChoose").val().toUpperCase());

  });

  $('#playerSelect2').click(function() {
    if($('#playersToChoose').val() == 'lebron') {
      playerTwo = lebron;
      $('#player2').css('background-color', '#a84551');
    }
    else if($('#playersToChoose').val() == 'steph') {
      playerTwo = steph;
      $('#player2').css('background-color', 'gold');
    }
    else if($('#playersToChoose').val() == 'durant') {
      playerTwo = durant;
      $('#player2').css('background-color', '#007DC3');
    }
    else if($('#playersToChoose').val() == 'kobe'){
      playerTwo = kobe;
      $('#player2').css('background-color', '#b19cd9');
    }

    $('#shotcharts').hide();
    $('#shotkey').hide();
    $('#player2 h2').text($('#playersToChoose').val().toUpperCase());
    $('#playerlist h2').text('First one to 21 wins the game!');
    displayMessage('Game on! Player 1, start us off.');
    $(this).attr("disabled","disabled");
    $('#playersToChoose').hide();
  });


  //Selecting your shot, running the probabilities, adding to count
  //Re-factor this to work for shoot1 and shoot2

  $('#shoot1').click(function() {
    //case #1: dunk. it's either 0 or 2
    if($('#player1Shot').val() == 'dunk') {
      //calculate probability: Math.random(dunk), 0 or 2
      // player1Points = Math.random * this.dunk;
      player1Points = Math.random() * playerOne.dunk / playerTwo.defRating;
        if(player1Points > dunkAvg ) {
          //if your percentage is greater than league avg, you make it
          //and you get 2 points.
          player1Points = 2;
         //display the div for a MAKE: visible css
          $('#made').show();
          $('#missed').hide();

           //if it's 0 or 2, add it to the player1Count
         player1Count += player1Points;
        }
        else {
            player1Points = 0;
            //display div for a MISS: append and show
            $('#missed').show();
            $('#made').hide();
        }
    }
    //case #2: long 2. it's either 0 or 2.
    if($('#player1Shot').val() == 'long2') {
      player1Points = Math.random() * playerOne.long2 / playerTwo.defRating;
        if(player1Points > long2Avg) {
          player1Points = 2;
          player1Count += player1Points;
          $('#made').show();
          $('#missed').hide();
        }
        else {
          player1Points = 0;
          $('#missed').show();
          $('#made').hide();
        }
    }
    //case #3: corner 3. it's either 0 or 3.
    if($('#player1Shot').val() == 'corner3') {
      player1Points = Math.random()* playerOne.corner3 / playerTwo.defRating;
        if(player1Points > corner3Avg) {
          //if it's 3 or 0, add it to player1Count
          player1Points = 3;
          player1Count += player1Points;
          $('#made').show();
          $('#missed').hide();
        }
        else {
          player1Points = 0;
          $('#missed').show();
          $('#made').hide();

        }
    }
    //case #4: long 3. it's either 0 or 3.
    if($('#player1Shot').val() == 'long3') {
      player1Points = Math.random() * playerOne.long3 / playerTwo.defRating;
        if(player1Points > long3Avg) {
          player1Points = 3;
          player1Count += player1Points;
          $('#made').show();
          $('#missed').hide();
        }
        else {
          player1Points = 0;
          $('#missed').show();
          $('#made').hide();
        }
    }
    $('#player1 p').text('Player 1 scored ' + player1Points + ' points');
    //display the score in the div at bottom of player1
    $('#player1Score').text(player1Count);
    checkForWinner(player1Count, player2Count);
    displayMessage("It's Player 2's turn to shoot!");
  });

  //Now for player 2 - re-factor this, eventually.
  //Think: 'Shoot' function, takes in player

$('#shoot2').click(function() {
    //case #1: dunk. it's either 0 or 2
    if($('#player2Shot').val() == 'dunk') {
      player2Points = Math.random() * playerTwo.dunk / playerOne.defRating;
      //calculate probability: Math.random(dunk), 0 or 2
        if(player2Points > dunkAvg) {
         player2Points = 2;
         player2Count += player2Points;
         $('#made').show();
         $('#missed').hide();
        }
        else {
            player2Points = 0;
            $('#missed').show();
            $('#made').hide();
        }
    }
    //case #2: long 2. it's either 0 or 2.
    if($('#player2Shot').val() == 'long2') {
      player2Points = Math.random() * playerTwo.long2 / playerOne.defRating;
        if(player2Points > long2Avg) {
          player2Points = 2;
          player2Count += player2Points;
          $('#made').show();
          $('#missed').hide();
        }
        else {
          player2Points = 0;
          $('#missed').show();
          $('#made').hide();
        }
    }
    //case #3: corner 3. it's either 0 or 3.
    if($('#player2Shot').val() == 'corner3') {
      player2Points = Math.random() * playerTwo.corner3 / playerOne.defRating;
        if(player2Points > corner3Avg) {
          //if it's 3 or 0, add it to player1Count
          player2Points = 3;
          player2Count += player2Points;
          $('#made').show();
          $('#missed').hide();
        }
        else {
          player2Points = 0;
          $('#missed').show();
          $('#made').hide();
        }
    }
    //case #4: long 3. it's either 0 or 3.
    if($('#player2Shot').val() == 'long3') {
      player2Points = Math.random() * playerTwo.long3 / playerOne.defRating;
        if(player2Points > long3Avg) {
          player2Points = 3;
          player2Count += player2Points;
          $('#made').show();
          $('#missed').hide();
        }
        else {
          player2Points = 0;
          $('#missed').show();
          $('#made').hide();
        }
    }
    $('#player2 p').text('Player 2 scored ' + player2Points + ' points');
    //display the score in the div at bottom of player1
    $('#player2Score').text(player2Count);
    checkForWinner(player1Count, player2Count);
    displayMessage("It's Player 1's turn to shoot!");
  });

  //Eventually, re-factor the code above into one function covering
  //both player 1 and 2. Then, create and call back functions for dunk,
  //long2, corner3, and long3.

  //Checking for a winner if count >=21,
  //this is called back in shot functions to see if a win has occurred.

  function checkForWinner(player1Count, player2Count) {
    if(player1Count >=21) {
      winresult = true;
      $('#playerlist h2').text('Congrats Player 1, you win!');
      $('#shoot1').hide();
      $('#shoot2').hide();
      $('#messages').hide();
      $('#made').hide();
      $('#won').show();
      // $('#player1Score').append("<img src = http://www.mapsofworld.com/pages/wp-content/uploads/sports//basketball/larry-obrien-trophy.jpg/>");
    }
    else if(player2Count >= 21) {
      winresult = true;
      // return true;
      $('#playerlist h2').text('Congrats Player 2, you win!');
      $('#shoot1').hide();
      $('#shoot2').hide();
      $('#messages').hide();
      $('#made').hide();
      $('#won').show();
      // $('#player2Score').append("<img src = http://www.mapsofworld.com/pages/wp-content/uploads/sports//basketball/larry-obrien-trophy.jpg/>");
      // ("<img src="+$img+" />")
    }
  };

});
