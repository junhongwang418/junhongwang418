

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
* [Lamp](#lamp)

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

We are in the world of 3D. How do we simulate a camera? In other words, how do we map this 3D scene into 2D view so that we can display it on the computer screen? Well... this involves a lot of math as shown <a href="[http://www.songho.ca/opengl/gl_projectionmatrix.html](http://www.songho.ca/opengl/gl_projectionmatrix.html)" target="_blank">here</a>. The idea is to come up with a transformation matrix that transforms 3d coordinate of the objects onto the 2d plane of the camera. Note that the camera does not move. To create an illusion that you (the camera) are moving to the *right*, we make the whole world move to the *left*. 

### Water

![water](https://github.com/ioneone/Museum-3D/blob/master/images/water.gif?raw=true)

The water rendering is very computationally expensive and takes a few steps to generate. The very first simplest thing we can do is to draw a blue plane.

![water1](https://github.com/ioneone/Museum-3D/blob/master/images/water1.png?raw=true)

Pretty ugly eh? Well, we will make it pretty soon. So what makes water looks like water? Imagine you are holding a glass of water in a forest. If you look at the water surface, you see the reflections of the trees on it. Reflection and transparency is one of the factor that makes water looks like water. We can get the reflection image on the water with a trick. First, we invert the camera pitch and position with respect to y-axis. This effectively gives up a view point from the water's perspective. 

```
C is camera
C' is inverted camera
The arrow represents the camera direction
                          
                       ↙︎ C  

---\ ----------- /---
    \   water   /
     \---------/ 

                       ↖︎ C' 
```

Then, we take a snapshot of the scene. In our case, we snapshot most likely contains an image of the sky from the Skybox. Finally, we render this image on the water with a little bit of transparency and blue color.

![water2](https://github.com/ioneone/Museum-3D/blob/master/images/water2.png?raw=true)

Another property of water is refraction. Imagine you have a glass of water and you are looking at the surface from above. You *can* see the the bottom of the glass. We can get the refraction image by just taking the snapshot of the scene *before* rendering the water (so that you can see take a photo of what's beneath the water). Then we can mix the reflection and refraction image by 50:50 ratio and render it on the water.

![water3](https://github.com/ioneone/Museum-3D/blob/master/images/water3.png?raw=true)

Imagine you went to a camp and saw a river. Can you see the bottom of the river? Can you see the sky reflected on it crystal clear? If not, then the river must have some waves. In other words, the water surface is not flat, which makes the reflection and refraction image distorted. We can simulate this by rendering the images with random offset. 

```
Before: image-coord(x1, y1) -> water_coord(x2, y2)
After: image-coord(x1 + random_x, y1_random_y) -> water_coord(x2, y2)
```


![water4](https://github.com/ioneone/Museum-3D/blob/master/images/water4.png?raw=true)

It would be weird when there are waves but no movement. We can move the waves by changing ```random_x``` and ```random_y``` every frame.  Then we have this perfect water 🌊

![water](https://github.com/ioneone/Museum-3D/blob/master/images/water.gif?raw=true)

### Minecraft Person

![person](https://github.com/ioneone/Museum-3D/blob/master/images/person.gif?raw=true)

The player is made of 6 cuboids -- head, body, left/right arms, and left/right legs. To make them shake, we apply rotation matrix to these cuboids. Note for arms and legs, we need to translate them first before rotating them because the centers of rotation of them are not in the center of the objects.

```
Suppose you want to rotate this 
object below with respect to R. 

|---R---|
|       |
|       |
|       |
|-------|

To rotate this object with respect to R,
we need to translate it such that R is 
the center of the object.

|-------|
|       |
|   R   |
|       |
|-------|

Now we apply the rotation matrix to all
the points of this obejct. Remember to 
translate it back to after the transformation.
```

### Mouse Picking

![mouse-picking](https://github.com/ioneone/Museum-3D/blob/master/images/mouse-picking.gif?raw=true)

Mouse picking can be implemented by reversing the process of generating view matrix. In particular, we transform the mouse position on the screen coordinate into a vector in the 3d coordinate. Then, to check whether the ray with this vector intersects with an object, there is a formula for it.

![intersection](https://github.com/ioneone/Museum-3D/blob/master/images/intersection.png?raw=true)

We approximate the light bulbs as spheres during intersection detection. 

### Torch

![torch](https://github.com/ioneone/Museum-3D/blob/master/images/torch.gif?raw=true)

Torch is implemented with Particle System. Particles are rendered as a square in the 3d scene. We can make the background transparent and render a series of fire image on it. 

![fire](https://github.com/ioneone/Museum-3D/blob/master/images/fire.png?raw=true)

Every particle has a life period. When it is initially constructed, it renders with the top left image. As the time passes, it will render different image as shown above. The initial velocity of the particles are randomly generated with some bias on y-axis (to make sure it fires *up*).

### Fireworks

![fireworks](https://github.com/ioneone/Museum-3D/blob/master/images/fireworks.gif?raw=true)

Fireworks are also implemented with Particle System just like the torch except the initial velocity has no bias (the particle can shoot into any direction 360 degree). 

### Terrain

![terrain](https://github.com/ioneone/Museum-3D/blob/master/images/terrain.gif?raw=true)

Terrain is just a collection of squares rendered together. A flat terrain is boring, so we can set random height for each point of the terrain with the help of height map.

![height-map](https://github.com/ioneone/Museum-3D/raw/master/assets/images/heightmap.png)

We can map the height of the terrain with this image such that RGB(0, 0, 0) corresponds to small height and RGB(255, 255, 255) corresponds to large height. 

### Mirror

![mirror](https://github.com/ioneone/Museum-3D/blob/master/images/mirror.gif?raw=true)

Mirror is implemented just like how water was implemented except there is no refraction and we set the reflection 100%. 

### Light Bulb

![lightbulb](https://github.com/ioneone/Museum-3D/blob/master/images/lightbulb.gif?raw=true)

To create a light bulb shape, we just defined some points as shown below. 

![lightbulb-shape](https://github.com/ioneone/Museum-3D/raw/master/images/grap.PNG)

Then we can generate the shape by rotating these points around y-axis.

### Day/Night Mode

![day-night](https://github.com/ioneone/Museum-3D/blob/master/images/day-night.gif?raw=true)

This is actually pretty simple. Skybox was implemented with some images like this:

![skybox-day-front](https://github.com/ioneone/Museum-3D/blob/master/assets/images/skybox/day/front.png?raw=true)

We prepared some dark sky images like this:

![skybox-night-front](https://github.com/ioneone/Museum-3D/blob/master/assets/images/skybox/night/front.png?raw=true)

To make a day/night transition, we mixed these two images and rendered it on the skybox. 

```
transition from day to night

image = day_image * (1 - alpha) + night_image * alpha

alpha changes from 0 to 1
```

### Lamp
![lamp](https://github.com/ioneone/Museum-3D/blob/master/images/lamp.gif?raw=true)

We create an illusion that the lamp is emitting lights, but coloring the terrain. Notice the further away from the light source, the weaker the light becomes. This is called light attenuation. Another thing about light is that it looks brighter when the light reflects to an object and gets into your eyes (or in this case, the camera). We can simulate this with dot product. Consider the reflection below.

```         
|        source
|      ↙︎
|   ↙︎ 
|↙︎
S----------> surface normal
|↘︎
|   ↘︎               🎥 position 2
|      ↘︎            
|       reflection_vector
|              
|                
|                 🎥 postiion 1
|

to_camera_vector would be from point S
to camera position.
```

We should observe stronger light at position 1 than at position 2. If we compute ```(reflection_vector)·(to_camera_vector)```, then the closer this value is to 1, the stronger the light we observe. 

## Reference
A lot of features of this project were inspired by 
<a href="https://www.youtube.com/user/ThinMatrix/about" target="_blank">ThinMatrix</a>, 
an indie developer and Youtuber (FYI, I love his British accent).  

We followed his <a href="https://www.youtube.com/watch?v=VS8wlS9hF8E&list=PLRIWtICgwaX0u7Rf9zkZhLoLuZVfUksDP" target="_blank">OpenGL 3D Game Tutorials</a> 
and <a href="https://www.youtube.com/watch?v=HusvGeEDU_U&list=PLRIWtICgwaX23jiqVByUs0bqhnalNTNZh" target="_blank">OpenGL Water Tutorials</a>.
