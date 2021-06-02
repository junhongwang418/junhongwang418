---
slug: "/experience/appfolio-intern"
---

## Software Engineer Intern, AppFolio, Jun 2020 - Sep 2020

I joined AppFolio's [Dynasty](https://www.dynasty.com/) team to develop the AI for real estate — Lisa.

### 🌟 Highlights

Here are some of stuff I implemented during my summer internship at AppFolio. I've generalized the ideas so I won't violate NDA.

#### 🔗 Linkification

Given a list of keywords, _linkify_ the keyword in a message. For example, let's say the keywords are `{ "apple": 🍎, "grape": 🍇 }` and the message is `I am eating an apple`. Then the output should be `I am eating an 🍎`.

To achive this, I

1. split the message by keywords using regex (e.g. `I am eating an apple` → `["I am eating an ", "apple"]`)
2. Replace the keywords with emoji (e.g. `["I am eating an ", "apple"]` → `["I am eating an ", "🍎"]`)
3. Join the array (e.g. `["I am eating an ", "🍎"]` → `I am eating an 🍎`)

#### 🔄 URL Encoding/Decoding

Every time we create a zoom meeting room, it's an unique URL (i.e. something like `zoom.com/kfjaskrdakjahfkjhad`). But we want to provide the same user the same URL every time. For example, user with id `foo` may just visit `zoom.com/foo`. My job is to check the database and redirect the user to the correct URL under the hood.

The idea is to have the user to bookmark their link so they don't have to confuse themselves from using the wrong link.

#### 💬 Slack Integration

When an user logs in to the website, send the message to a Slack channel to notify everyone who just logged in.

#### 🗼 GraphQL Subscription

Our web application was providing real-time data to the users with polling. This has been putting a lot of pressure to our server. Integrated GraphQL subscription to our application so that the server will send the updated data to the client only when needed, effectively reduce the load of the server. This was the most challenging project I did during the internship as it involved a deep understanding of computer networking as well as AWS infrastructure.

#### 🧠 Email Classifier

Given an email, we want to classify whether the message is about leasing or not. We already had labeled data in the database. I extracted features such as number of token and number of leasing keywords from the message. Then I trained a logistic regression model with `scikit-learn`.
