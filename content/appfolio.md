# AppFolio: Software Engineer

May 2021 - June 2023

I worked at AppFolio from May 2021 to June 2023, first as a Software Engineer and then as Software Engineer II. Most of my work was on Lisa, AppFolio's AI leasing assistant. Near the end, I moved onto an early revenue management MVP.

## Core Areas

- **AI leasing assistant:** I became a key contributor to Lisa, a conversational assistant that helped prospective tenants schedule showings over SMS and email.
- **Operator workflows:** I improved the command center used by human operators when Lisa needed fallback handling, including template responses and scheduling flows.
- **Bot logic:** I added product logic so Lisa could handle more complicated leasing conversations, such as counteroffers for showing times.
- **Architecture and maintainability:** I introduced adapter-style boundaries for third-party email/calendar integrations and pushed for high test coverage to support safe refactoring.
- **Revenue management MVP:** I contributed to an early revenue management product, learning Ruby on Rails, RBS, backend-for-frontend architecture, and AppFolio's larger platform.
- **Engineering tooling:** I led an initial Sourcegraph trial to improve codebase-wide visibility and helped transition ownership after the trial proved useful.

## Technical Details

The Lisa work sat between product workflow, ML-backed classification, and human-in-the-loop operations. A bot response could depend on message classification, scheduling state, calendar-provider data, operator fallback behavior, and customer-visible conversation history. Reliability and clear business logic mattered more than simply calling a model.

One recurring architecture problem was integration shape. Lisa had to talk to different third-party providers, such as Google and Microsoft calendar APIs, but the product logic needed a common event model. I worked on adapter-style boundaries so provider-specific API responses were converted before they reached core scheduling logic. That made the code easier to test and reduced the spread of provider-specific conditionals.

The revenue management work was a different kind of ramp-up: I moved into Ruby on Rails and BFF-style backend work, learned a new domain quickly, and helped deliver an MVP in an established enterprise codebase.
