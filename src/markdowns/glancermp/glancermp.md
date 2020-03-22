# GlanceRMP

![glancermp](https://github.com/Kazutaka333/glanceRMP/blob/master/resources/128icons.png?raw=true)

GlanceRMP (short for Glance Rate My Professor) is a Google
extension me and <a href="https://www.linkedin.com/in/kazutaka-homma-99940055/" target="_blank">Kazutaka Homma</a>
developed when we were at Berkeley City College. 
We wanted to try out what we can do with our CS
skills to give back to the Peralta college communities.

The source code is available <a href="https://github.com/Kazutaka333/glanceRMP" target="_blank">here</a>.

This extension helps us students with the
tedious process of choosing classes. Typically, 
here's what you do when you want to enroll 
in a class (at least this is what I did).

Background info: Peralta Community College District is composed of 
four community colleges -- Berkeley City College, Laney 
College, College of Alameda, and Merritt College. I took
classes from BCC, CoA, Laney depending on who
is teaching the classes.  

Say you want to enroll Math 3A.
<ol>
<li>Check Math 3A offered by BCC, Laney, CoA.</li>
<li>You see the listings of professors teaching the course.</li>
<li>Go to <a href="https://www.ratemyprofessors.com/" target="_blank">ratemyprofessors.com</a> to check who is the best professor.</li>
<li>Schedule your classes such that there is no conflict.</li>
</ol>
This is very time consuming! Especially, step 3 takes a long time when 
there are many professors available. The goal of 
this project is to help students with step 3 and 
choose classes stress free. 

Here's some screenshots of the application.
Without the extension, we see this plain class
listings.

![original schedule](https://github.com/Kazutaka333/glanceRMP/blob/master/passport.png?raw=true)

With our extension turned on, it automatically 
fetches the results from ```ratemyprofessors.com```
and display it them.

![processed schedule](https://github.com/Kazutaka333/glanceRMP/blob/master/passport-processed.png?raw=true)

## How It Works

![ratemyprofessors.com](https://github.com/Kazutaka333/glanceRMP/blob/master/rmp.png?raw=true)

```ratemyprofessors.com``` does not provide an API, 
so we wrote some JavaScript code to scrape the html from 
the website and extract the data we want (e.g. ```div.querySelectorAll("div[class=grade]")```). 







