# Zombie Dash

![zombie dash](https://github.com/ioneone/ioneone.github.io/blob/develop/src/markdowns/zombie-dash/zombie-dash.png?raw=true)

Zombie Dash is a game I built as part of CS32 (Intro to Computer Science II) project. 
In this game, you are an amateur zombie hunter, 
and your job is to rescue frightened citizens
before they are eaten and transformed into zombies.

Here's a short clip of me playing the completed game.

<video autoplay loop muted control><source src="https://github.com/ioneone/ioneone.github.io/blob/develop/src/markdowns/zombie-dash/zombie-dash.mp4?raw=true" type="video/mp4"></video>

You can check out the source code <a href="https://github.com/ioneone/UCLA-CS-32/tree/master/ZombieDash">here</a>.
The <a href="https://github.com/ioneone/UCLA-CS-32/blob/master/ZombieDash/spec.pdf">specification</a> of this project was crazy long (about 60 pages)!

## How the Game Works
A player can pick up a tank of gasoline and spits fire 
to kill the zombies (even the citizens, so be careful!).
At each level, there is an exit. The citizens are too 
scared to move by themselves. You must navigate the citizen
to the exit. Once the player approaches to the citizen 
to a certain distance, it finds the player then starts to follow.
Be warned that same thing happens to zombies as well. 
If you get too close to it, they will start to chase you 
and attack you!

## The Purpose of This Project
The purpose of this project is to let students get familiar 
with object oriented programming as it uses quite a lot 
of it in this game. For example, there is a class called
Person and both Citizen and Player inherit from it. 
Here's the class overview of the class hierarchy.

```
- Actor
  - Creature
    - Person
      - Penelope (Player)
      - Citizen
    - Zombie
      - DumbZombie
      - SmartZombie
    - Environment
      - FlammableEnvironment
        - Landmine
      - InflammableEnvironment
      - MortalEnvironment
      - ImmortalEnvironment
        - Exit
        - Flame
        - Pit
        - Vomit
        - Wall
    - Goodie
      - GasCanGoodie
      - LandmineGoodie
      - VaccineGoodie
```
