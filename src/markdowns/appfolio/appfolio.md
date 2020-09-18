# AppFolio

Here's highlights of what I achieved during the summer 2020 internship at AppFolio. I've generalized the ideas so I won't violate NDA.

## Linkification

Given a list of keywords, `linkify` the keyword in a message. For example, let's say the keywords are `{ "apple": 🍎, "grape": 🍇 }` and the message is `I am eating an apple`. Then the output should be `I am eating an 🍎`.

## URL Encoding/Decoding

Every time we create a zoom meeting room, it's an unique URL (i.e. something like `zoom.com/kfjaskrdakjahfkjhad`). But we want to provide the same user the same URL every time. For example, user with id `foo` may just visit `zoom.com/foo`. My job is to check the database and redirect the user to the correct URL under the hood.

The idea is to have the user to bookmark their link so they don't have to confuse themselves from using the wrong link.

## Slack Integration

When an user logs in to the website, send the message to a Slack channel to notify everyone who just logged in.

## GraphQL Subscription

Our web application was providing real-time data to the users with polling. This has been putting a lot of pressure to our server. Integrated GraphQL subscription to our application so that the server will send the updated data to the client only when needed, effectively reduce the load of the server.
