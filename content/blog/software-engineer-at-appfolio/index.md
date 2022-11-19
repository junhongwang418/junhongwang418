---
title: Software Engineer at AppFolio
date: 2022-09-01
description: In this blog post, I summarize key achievements during my time at AppFolio as Software Engineer.
---

I accepted the return offer from AppFolio after [the internship](/software-engineer-intern-at-appfolio). I continued to develop the leasing scheduling AI — Lisa.

I became a key contributor of the lisa repo. Here are some of the impacts I made:

- **Command Center**: Command center is an internal facing UI for augument the capability of Lisa. When Lisa (the bot) doesn't know how to respond to a message from a prospective tenant, then we fallback to human operator to handle the response. I improved existing features as well as added some new features to the command center. For example, I added some template answers for human operators to respond to an inbound message. This allows the operators to operate more quickly and efficiently. It effectively reduces the labor cost. The template also helps the bot to learn how to respond to a message it doesn't know how to answer. The bot learns from the operators. If the opeartors use a template to an inbound message, the next time a similar inbound comes, the bot just uses the same template and responds to the message. This means the operator can spend more time on other important tasks.

- **Bot Logic**: The bot logic is the core of Lisa. It's backed by [Galaxy Brain](https://engineering.appfolio.com/appfolio-engineering/2022/8/31/lisa-conversational-ai), a machine learning model that takes a message as input, and outputs the predicted label of the message. I added some new cases to the bot logic so it can handle more complex conversation. For example, when we offer a showing and the prospects suggest a different time, Lisa used to not know how to handle the inbound and delegate the work to human operators. Now that we galaxy brain is capable of understanding this counteroffer message, Lisa can go ahead and schedule a showing at prospects' requested time.

- **Techdebt**: I'm obsessed with developer experience just like how [Ali Abdaal](https://aliabdaal.com/) is obsessed with productivity. I believe that we need to have an amazing tooling and healthy codebase to build and scale a product. If we can't take a good care of ourselves and our workflows, how do you expect the customers can trust us build a good product? Not only did I contribute to Lisa enhancements, but I also took time and cleared many backlogs/techdebts. One notable change I introduced to the codebase is the [adapter pattern](https://refactoring.guru/design-patterns/adapter). Lisa has integrations with 3rd party email/calendar clients -- Google and Microsoft. It needs to periodically fetch calendar events of the users from these 3rd party calendar providers. However, since we support more than 1 provider, we need to convert the API responses from all the providers into a shared event interface. Then we can work on the common event interface without worrying about different types of providers in our application code.

  ```java
  ❌
  if (provider == "Google") {
    GoogleCalendarEvent gEvent = new GoogleCalendarClient().getEvent();
    // Get the data we want from Google Calendar API.
  } else if (provider == "Microsoft") {
    MicrosoftCalendarEvent event = new MicrosoftCalendarClient().getEvent();
    // Get the data we want from Microsoft Calendar API.
  }

  ✅
  CalendarEvent event;
  if (provider == "Google") {
    event = new GoogleCalendarClient().getEvent();
  } else if (provider == "Microsoft") {
    event = new MicrosoftCalendarClient().getEvent();
  }
  // Event already has all the data we need
  // proceed with business logic without 
  // worrying different API responses from
  // different providers.
  ```

  The strategy above is good, but we can make it great. Notice `GoogleCalendarClient` is doing 2 things -- making API calls to the provider and converting the response to a common interface. This violates [Single Responsibility Principle](https://en.wikipedia.org/wiki/Single-responsibility_principle) -- a class should do one thing, and one thing only. We can split `GoogleCalendarClient` into 2 classes:

    - `GoogleCalendarClient`: Makes API calls to Google Calendar API.
    - `GoogleCalendarAdapter`: Convert the response from Google Calendar API into `CalendarEvent`, and vice versa.

  ```java
  CalendarEvent event;
  if (provider == "Google") {
    GoogleCalendarClient client = new GoogleCalendarClient();
    event = new GoogleCalendarAdapter(client).getEvent();
  } else if (provider == "Microsoft") {
    MicrosoftCalendarClient client = new MicrosoftCalendarClient();
    event = new MicrosoftCalendarAdapter(client).getEvent();
  }
  ```

  This reduced the number of lines of code in `GoogleCalendarClient` and made it easier to test and comprehend as well.

I learned a lot of good software engineering patterns just by reading the existing high quality code in the repo, mostly written by [DC Posch](https://www.linkedin.com/in/dcposch/), [David Ma](https://www.linkedin.com/in/madavidj/), and [John Rothfels](https://www.linkedin.com/in/john-rothfels-651b611a/).
