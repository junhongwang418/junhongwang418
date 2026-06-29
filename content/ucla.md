# UCLA: Bachelor of Science in Computer Science

September 2018 - March 2021

I studied computer science at UCLA. The degree gave me the core CS foundation, but the most useful part of that period was applying it in real software projects before graduation.

During UCLA, I had two internships that shaped the direction of my early career: research software at the B. John Garrick Institute for the Risk Sciences, and product engineering at AppFolio.

## B. John Garrick Institute for the Risk Sciences

June 2019 - September 2019

I worked as a student software developer at UCLA's B. John Garrick Institute for the Risk Sciences. The lab studies risk and reliability in complex natural and engineered systems, where the software needs to help experts reason about event probabilities, failure paths, and system-level risk.

My work focused on a reliability-analysis tool for event-tree style modeling. Users needed to build trees of possible events, attach probabilities and metadata, edit nodes, and understand how a system failure path was represented visually.

I implemented a tree layout algorithm for rendering event nodes and probability edges without overlap. I also worked on encoding and decoding tree structures to and from JSON so models could be saved, loaded, and edited reliably.

On the frontend, I built React-based editing tools for event-tree nodes and migrated much of the codebase from JavaScript to TypeScript. That work made the project easier to maintain because tree nodes, probabilities, descriptions, and editor state had explicit types instead of being passed around as loosely shaped objects.

This internship was my first serious experience building software for a domain where correctness mattered more than UI polish. It taught me how much product work is hidden inside modeling tools: users do not just need a diagram; they need the diagram to preserve the semantics of the model they are reasoning about.

## AppFolio Internship

June 2020 - September 2020

I interned at AppFolio on Lisa, an AI leasing assistant that helped prospective tenants schedule showings through SMS and email. AppFolio later became my first full-time employer, so this internship was the bridge between my UCLA work and my early professional engineering career.

I worked on product features and infrastructure around the leasing assistant experience. Some work was frontend-facing, such as linkifying structured terms in messages and redirecting stable user-facing URLs to generated meeting links. Other work touched internal workflow visibility, including Slack notifications for user activity.

The most technically involved project was integrating GraphQL subscriptions into a web application that had been relying on polling for realtime updates. The goal was to reduce unnecessary server load by pushing updates to clients only when data changed. That required understanding the existing application behavior, GraphQL subscription semantics, and the AWS-backed networking path.

I also worked on an email classifier for leasing-related messages. I extracted features from historical email data, such as token counts and leasing-related keywords, and trained a logistic regression model with scikit-learn. It was a small model, but it was useful exposure to the practical side of ML in a product: feature quality, labeled data, and how a classifier fits into an operational workflow.

This internship gave me a clearer sense of what production AI software looked like outside a classroom. The hard parts were not only model behavior; they were integration boundaries, realtime state, user-facing workflows, and keeping the system understandable to operators.
