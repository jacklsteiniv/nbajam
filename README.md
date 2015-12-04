# Project 1: NBA Jam - GA Edition

#Introduction

The NBA game has changed enormously in the last five years, with an increased
emphasis on sabermetrics and 3-point shooting. I set out to build a 1-on-1 basketball game that reflected the diverse skill sets and the probability/statistics involved in 
shot selection and shot proficiency to investigate these trends. 
Different players have their own inherent strengths and weaknesses, 
and while this certainly impacts the on-court results in the NBA when 
playing 5-on-5, I wanted to hone in on these differences in a 
1-on-1 fashion to examine them at an individual level.

I have always been fascinated with the theoretical "Would X beat Y
in 1-on-1?" question, and decided to test my own hypothesis (i.e.
Steph Curry would beat anyone) by using players' statistics and an
element of randomness inherent in any game. Major takeaways were that
(1.) it's generally better to shoot 3-pointers, even at a slightly lower percentage
than 2-pointers, because of the added value of an extra point (2.) player 
defense plays an enormous role in success, despite our difficulties in 
quantifying what great defense actually is.

#Synopsis

The end users have the option of selecting one of four players: LeBron
James, Steph Curry, Kevin Durant, and, in an homage to a retiring
legend, Kobe Bryant. The user is able to hover over each player's
shot chart (courtesy of the great graphic visualization work done 
by Kirk Goldsberry, formerly of Grantland) to see each player's
efficiencies per area of the court. Although it is not visible,
each player has a defensive rating hard-coded in as well.

Upon selecting players, the two users take turns selecting which
shots to take with his or her respective player. I used Goldsberry's
shot charts to determine their shooting percentages (represented
as decimals) for dunks, long 2-point shots, corner 3-pointers, and long
3-pointers (3-pointers not taken in the corner.) Since the NBA
does not yet record shooting percentages for specific areas of the court
(aside from the generic 2-pointer and 3-pointer) as an official 
statistic, I used Goldsberry's shot charts for a higher degree of specificity. 
The players trade shots until one reaches 21, upon which a winner is 
declared and the game ends. I used hidden GIFs to illustrate a made or missed shot,
and to simulate the visuals of a basketball game.

#Calculations

Upon 'shooting', each player's shot is either made or missed depending
on the following algorithm:

Math.random() * player shot percentage / opposing player's defensive rating

The shot percentages range from 0 to 1, as do the defensive ratings
of the opposing player. The higher an opposing player's defensive
rating, the less likely a player is to make a shot. This is an attempt
to model the impact that man-on-man defense plays in the NBA.

If the total 'score' for that player's shot probability surpasses
the 'league average' threshold (set as the mean of all four players'
averages for that category), the shot is made, and 2 or 3 points are
added to their total. If they miss, they score 0 points.

Because Math.random() returns a different number between 0 and 1
each time a player 'shoots', this insures that the game has a 
component of randomness that keeps things interesting, and doesn't
allow certain players to dominate as much as they may otherwise.
In short, it keeps it 'fun' and competitive, even with Steph Curry's
statistical dominance.

#Technologies

I used the following languages/frameworks in building this game:
-HTML
-CSS
-Javascript
-jQuery

#Installation

The game can be rendered in a browser (please see links below.)

#Links

The game is hosted at the following link, on my GitHub page:

http://jacklsteiniv.github.io/project1/

You can also view the user stories and progress at my Trello page:

https://trello.com/b/QhsHPg3L/ga-wdi-project-1

#Unsolved Problems/Considerations

I considered adding an AI component so that one player could play
against the 'computer', but ran out of time. This is an idea I would
like to investigate further in future projects.

Additionally, there are some UX tweaks that I considered, including
being able to select a player by clicking on their shot chart
panel, rather than selecting them from a drop-down menu. Ultimately,
I decided to leave the shot chart panels as 'guides' for player
selection, rather than the end point for player selection itself.

#Sources/Thanks

The inspiration for this game came from the work of Kirk Goldsberry,
whom I admire and enjoy reading greatly. Such close analysis of 
basketball from a visual standpoint helps us all watch the game
differently, and to properly appreciate the diversity of the player
ecosystem, and I thank him for that.
