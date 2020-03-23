
# Museum 3D

![museum 3d](https://github.com/ioneone/Museum-3D/raw/master/images/lightbulb.jpg)

Museum 3D is my group project from CS 174A (Intro to Computer Graphics) with <a href="https://www.linkedin.com/in/johntran627/" target="_blank">John Tran</a> and Jonathan Liau. The idea of project is to bring the player to a virtual museum. You can go to the museum at home on your bed:) The arts and objects in the museum in inspired by <a href="[https://borderless.teamlab.art/](https://borderless.teamlab.art/)" target="_blank">teamLab's Borderless Museum</a>. I went there when I was an intern at teamLab, and it was amazing! It's like you are in a world of fantasy 🦄

You can check out the demo <a href="https://intro-graphics-master.github.io/term-project-8/" target="_blank">here</a>  (Your browser must support WebGL; Google Chrome is recommended).

You can check out the source code <a href="https://github.com/ioneone/Museum-3D" target="_blank">here</a>.

## Graphics Features
Here's the list of graphics features we implemented.

* [Skybox](#skybox)
* [Camera](#camera)
* [Water](#water)
* [Minecraft Person](#minecraft-person)
* [Mouse Picking](#mouse-picking)
* [Fireworks](#fireworks)
* [Terrain](#terrain)
* [Mirror](#mirror)
* [Light Bulb](#light-bulb)
* [Torch](#torch)
* [Day/Night Mode](#day-night-mode)

### Skybox 

![skybox](https://github.com/ioneone/Museum-3D/blob/master/images/skybox.gif?raw=true)

Skybox is a technique to create an illusion that the world is infinite. Of course, the world is finite in computer graphics, but we can fake it as if it was infinite by making the world (background to be precise) to move *with* you. A skybox is a huge cube with images of the sky on the surfaces. We place the player in the center of the cube. If we don't do anything special, the player can keep moving forward and eventually gets out of the cube. 

```
P is player

|--------|
|   P ---|------> P'
|--------|       

the cube stays

```

But what if we also move the cube the same way the player moves? Then, no matter where the player is in the world, it is placed at the center of the cube, and thus, the player can never reach the end of the world.

```

P is player

|-------|   |-------|
|   P --|---|-> P'  |
|-------|   |-------|

    ------------>
    
the cube moves along the player

```

### Camera

![camera](https://github.com/ioneone/Museum-3D/blob/master/images/camera.gif?raw=true)

We are in the world of 3D. How do we simulate a camera? In other words, how do we map this 3D scene into 2D view so that we can display it on the computer screen? Well... this involves a lot of math!

### Water

![water](https://github.com/ioneone/Museum-3D/blob/master/images/water.gif?raw=true)

### Minecraft Person

![person](https://github.com/ioneone/Museum-3D/blob/master/images/person.gif?raw=true)

### Mouse Picking

![mouse-picking](https://github.com/ioneone/Museum-3D/blob/master/images/mouse-picking.gif?raw=true)

### Torch

![torch](https://github.com/ioneone/Museum-3D/blob/master/images/torch.gif?raw=true)

### Firework

![fireworks](https://github.com/ioneone/Museum-3D/blob/master/images/fireworks.gif?raw=true)

### Terrain

![terrain](https://github.com/ioneone/Museum-3D/blob/master/images/terrain.gif?raw=true)

### Mirror

![mirror](https://github.com/ioneone/Museum-3D/blob/master/images/mirror.gif?raw=true)

### Light Bulb

![lightbulb](https://github.com/ioneone/Museum-3D/blob/master/images/lightbulb.gif?raw=true)

### Day/Night Mode

![day-night](https://github.com/ioneone/Museum-3D/blob/master/images/day-night.gif?raw=true)



## Reference
A lot of features of this project were inspired by 
<a href="https://www.youtube.com/user/ThinMatrix/about" target="_blank">ThinMatrix</a>, 
an indie developer and Youtuber (FYI, I love his British accent). 

We followed his <a href="https://www.youtube.com/watch?v=VS8wlS9hF8E&list=PLRIWtICgwaX0u7Rf9zkZhLoLuZVfUksDP" target="_blank">OpenGL 3D Game Tutorials</a> 
and <a href="https://www.youtube.com/watch?v=HusvGeEDU_U&list=PLRIWtICgwaX23jiqVByUs0bqhnalNTNZh" target="_blank">OpenGL Water Tutorials</a>.
