---
title: Software Developer Intern at GIRS
date: "2019-10-01"
---

[The B. John Grarrik Institute for The Risk Sciences](https://www.risksciences.ucla.edu/) (GIRS) is a research lab at UCLA that studies the quantification and management of the risk of complex natural and engineered systems and processes. For example, let's say you built a rocket. Your manager told you that you can launch the rocket only if the chance it fails is < 0.01%. You need to somehow quantify the probability that your rocket malfunctions. This is very important especially if human lives are involved. I joined GIRS as a student developer to design, prototype, and build [NASA Jet Propulsion Laboratory](https://www.jpl.nasa.gov/)'s internal software for system reliability analysis.

Here are some of stuff I implemented:

- **Tree Layout Algorithm**: We had a tree representation of Human Failure Analysis. It's basically an event tree with probabilities. For example, a node can have a value `engine malfunctions` with two edges -- `YES` with weight `0.999` and `NO` with weight `0.001`. The weights represent the probability of the event. I wrote an algorithm to render the nodes and edges without overlapping.
- **Tree Encoding/Decoding**: Every tree node has properties such as name, descriptoion, probablity etc. I wrote an encoder to convert the tree objects into JSON format as well as a decoder to do the reverse.

  ![tree](/risksciences-tree.png)

- **Node Editor**: I designed and implemented event tree node editing tool with React.

  ![editor](/risksciences-editor.png)

- **TypeScript Migration**: When I joined the lab the code base was 100% JavaScript. To provide type safety and improve the dev devlocity, I've migrated nearly 80% of the code base to TypeScript.

I had an amazing grad student mentor, [Arjun Earthperson](https://www.linkedin.com/in/arjun372/). He was very knowledgeable in both software engineering and risk analysis. Some of my React coding styles are inherited from him.
