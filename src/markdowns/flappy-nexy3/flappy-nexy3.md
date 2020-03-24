# Flappy Nexy3

![flappy bird](https://github.com/ioneone/UCLA-CS-M152A/blob/master/lab%204/bird.png?raw=true)

Flappy Nexy3 is a game me and <a href="https://www.linkedin.com/in/dcdaniil/">Daniel Daniil</a>
built as final project of CS M152A 
(Intro to Digital Design). The source code is 
available <a href="https://github.com/ioneone/UCLA-CS-M152A/tree/master/lab%204" target="_blank">here</a>.

Here's a short clip of the demo (it's just a motion photo so it's pretty short):

<video autoplay loop muted control><source src="https://github.com/ioneone/UCLA-CS-M152A/blob/master/lab%204/flappy.mp4?raw=true" type="video/mp4"></video>

## How the Game Works

![board](https://github.com/ioneone/UCLA-CS-M152A/blob/master/lab%204/board.png?raw=true)

The goal of this game is to go as far as possible 
while dodging the pipes coming from right. 
The game is displayed on the monitor via VGA 
connection, and the score is shown on the seven 
segment display on the board. The bird 
naturally falls down, due to gravity. To 
keep the bird flying, the user has to move 
the rightmost switch up (T10). The user also 
can control whether the pipes are moving up
and down, via a switch (T9). Finally, the game 
can be reset through a button (D9).

## Collision Detection

We implemented collision detection to check whether the 
bird hits a pipe or not. We basically treated the bird and 
pipes as rectangles, then check whether two rectangles
intersect. There are many cases to check to the intersections. 
But we can instead think about when it does not intersect. 
Then we can take the complement of it. Two rectangles don't 
intersect when they don't intersect in x-axis and y-axis.

```
not intersecting in x-axis
-------
|     |   ----------
|     |   |        |
-------   |        |
          ----------
          
not intersecting in y-axis
-------
|     |
|     |
------- 

    --------
    |      |
    |      |
    --------
    
otherwise they must be intersecting
```

## Wrapping the Pipes

To make the efficient use of the pipes, we only create 
three pipe objects and loop through them. Pipes going 
off the screen to the left will come out from the right. 
This also reduce the performance overhead of collision 
detection.

```
                          <==
          <==           |------| 
        |------|         |    |
---      |    |          |    |      <---   
|        |    |          |    |         |
|                                       |
-----------------------------------------
```
