---
title: "[book] Software Engineering at Google"
date: 2022-11-10
description: In this blog post, I share my key takeaways from Software Engineering at Google. 
---

This is my note/review of [Software Engineering at Google](https://www.oreilly.com/library/view/software-engineering-at/9781492082781/).

Here are some Google's software engineering best practices I decided to follow:

### Optimize for the reader

> …, we recognize that they are shorter than `if` statement and therefore more convenient for code authors. However, because they tend to be more diffucult for readers to understand than the more verbose `if` statements, we restrict their usage ([https://orei.ly/ftyvG](https://google.github.io/styleguide/pyguide.html#211-conditional-expressions)).
>
> _source: Software Engineering at Google page 144_

In Java, a simple if then return statement can be written in one line.

```java
if (condition) return something;
```

However, at Dynasty, we find the code more readable when they are in seperate lines.

```java
if (condition) {
  return something;
}
```

### Referene Documentation

> Some documentation styles (and some documentation generators) require various forms of boilerplate on function comments, like “Returns:”, “Throws:”, and so forth, but at Google we haven’t found them to be necessary. It is often clearer to present such information in a single prose comment that’s not broken up into artificial section boundaries:
>
> _source: Software Engineering at Google page 195_

We follow the same documentation guideline at Dynasty. Function comments usually doesn't include special tags like [`@param`](https://docs.oracle.com/javase/7/docs/technotes/tools/windows/javadoc.html#param) or [`@return`](https://docs.oracle.com/javase/7/docs/technotes/tools/windows/javadoc.html#return). It's simply a markdown comment.

```java
// Do something to the given foo and returns the 
// processed foo.
// 
// If foo is `null`, it throws `NullPointerException`. 
public String doSomething(String foo) {
  ...
}
```

### Conceptual Documentation

_source: Software Engineering at Google page 198_

There are two types of documentation.

- **Reference documentation** covers the needy greedy details of a function, class, or API. It's like unit tests. Usually this lives with the code as comments.
- **Conceptual documentation** covers a higher level explanation of how a function, class, or API works. It's like integration tests. A good example of conceptual documentation is Google's guide for [`absl::StrFormat()`](https://abseil.io/docs/cpp/guides/format#abslstrformat). Usually this lives along with the code as `.md` files.
- **README** links to other pages for more information.

### Deprecating Documents

> At Google, we often attach "freshness dates" to documentation. Such documents note the last time a document was reviewed, and metadata in the documentation set will send email reminders when the document hasn't been touched in, for example, three months. Such freshness dates, as shown in the following example -- and tracking your documents as bugs -- can help make documentation set easier to maintain over time, which is the main concern for a document.
>
> ```html
> <!--*
> # Document freshness: For more information, see go/fresh-source.
> freshness: { owner: `username` reviewed: '2019-02-27'}
> *-->
> ```
> 
> _source: Software Engineering at Google page 203_

I found this very relevant to my day to day job. At AppFolio, we have internal engineering wiki, but some of them are outdated.

💡 Idea: We could create a bot that scan all the files in `docs/` and look for the comment `freshness: { ... }`. Then, we parse the last reviewed date of that document. If it was last reviewd more than 3 months ago, the bot automatically creates a Github issue and requests for a documentation review.

### Properties common to all test sizes

> ... we also strongly discourage the use of control flow statements like conditionals and loops in a test (https://oreil.ly/fQSuk). More complex test flows risk containing bugs themselves and make it more difficult to determine the cause of a test failure.
>
> _source: Software Engineering at Google page 218_

This reminds me why I felt uncomfortable when I saw `for loop` in a test at work. It was too clever.

```java
// ❌
@Test
void canAppendOne() {
  List<String> args = List.of("foo", "bar", "book", "");
  args.forEach(arg -> assertEquals(arg + "1", appendOne(arg)));
}

// ✅
@Test
void canAppendOne() {
  assertEquals("foo1", appendOne("foo"));
  assertEquals("bar1", appendOne("bar"));
  assertEquals("book1", appendOne("book"));
  assertEquals("1", appendOne(""));
}
```