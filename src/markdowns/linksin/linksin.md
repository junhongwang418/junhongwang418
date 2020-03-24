
# LinksIn

![linksin](https://github.com/scalableinternetservices/linksin/raw/master/team/logo.svg?sanitize=true)

LinksIn is my group project for CS 188 (Scalable Internet Services)
with <a href="https://www.linkedin.com/in/phipson-lee/" target="_blank">Phipson Lee</a>, <a href="https://www.linkedin.com/in/amy-tu-b94b83127/" target="_blank">Amy Tu</a>,  and <a href="https://www.linkedin.com/in/otleimat/" target="_blank">Omar Tleimat</a>.

LinksIn is a social networking app that builds upon  the mechanics of networking on Tinder to create an accessible, sociable media outlet for the gaming community. As gamers, users can connect to LinksIn through their existing gaming accounts, swipe through other gamers and players using the Tinder card-swiping mechanism, and connect with new players that might be in the same game as them. Additionally, with LinksIn, players can also create LAN events and invite people within their 'card community' to join and coordinate gaming events together.

You can check out the source code <a href="https://github.com/scalableinternetservices/linksin" target="_blank">here</a>.

Here's the demo of the project.

![demo](https://github.com/scalableinternetservices/linksin/raw/master/demo.gif)


## Scaling Techniques

The goal of this project is to learn how to scale the web application such that it can thousands and thousands of user requests at the same time. We used AWS for deployment. Here's what we did to make it scalable:

* [Vertical Scaling](#vertical-scaling)
* [Horizontal Scaling](#horizontal-scaling)
* [Pagination](#pagination)
* [Multiprocess/Multithreading](#multiprocess-multithreading)
* [SQL Optimization](#sql-optimization)
* [Client-side Caching](#client-side-caching)
* [Server-side Caching](#server-side-caching)
* [Read-Slaves](#read-slaves)

### Vertical Scaling

Vertical scaling refers to the idea of scaling application by using a more powerful server (i.e. more memory, more/faster cores, higher bandwidth). On AWS console, this can be done simply by choosing a more powerful machine to deploy the application on. 

### Horizontal Scaling

Horizontal scaling refers to the idea of scaling the application by having multiple app servers. On AWS console, we just need to deploy our application on multiple cheap machines.

### Pagination

In our application, there is a page for showing all the users in LinksIn. We can make use of pagination to show only a fraction of the users, and thus avoid loading all the user data. 

### Multiprocess/Multithreading

We can maximize the usage of the application server by using multiprocessing and multithreading. When we have multiple processes running the application, each process will run in different cores, and thus can handle more requests. When we have multiple threads, while we are waiting for a response from the database, we can switch the thread and run other stuff, and thus increase the performance of the application.

### SQL Optimization

Ruby on Rails by default will automatically generate SQL queries for us when we request the data from the database. However, we can make a more optimized queries if we explicitly write down the queries we want. 

### Client-side Caching

When the user visits a page, if that page was already loaded previously, then instead of making a request to the server, the server can just tell the client to use the cache available on the client side.

### Server-side Caching

When thousands and thousands of users access the same page, we can cache that page on the server side. Next time another user request that page, we can just return the cache instead of generating the page from scratch (i.e. no need to make request to the database for example).

### Read-Slaves

For most applications including LinksIn, reads are much more common than writes. Thus, we can have read-slave databases that handle only the reads and master database that handles only the writes and and apply the changes to the read-slaves. Then we can easily horizontally scale the database by increasing the number of read-slaves.

## Reference

For more details about the implementation, check out the <a href="[https://github.com/scalableinternetservices/linksin/blob/master/report.pdf](https://github.com/scalableinternetservices/linksin/blob/master/report.pdf)" target="_blank">report</a> we wrote for the project. It summaries the implementation of these scaling techniques as well as their results. 