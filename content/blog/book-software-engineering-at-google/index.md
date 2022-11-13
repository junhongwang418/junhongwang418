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

### File Comments

> Allmost all code files at Google must contain a file comment. (Some header files that contain only one utility function, etc., might deciate from this standard.) File comments should begin with a header of the following form:
>
> ```hpp
> // -------------------
> // str_cat.h
> // -------------------
> //
> // This header file contains functions for efficiently concatenating and appending strings: StrCat() and StrAppend(). Most of the work within these routines is actually handled through the use of a special AlphaNum type, which was designed to be used as a parameter type that efficiently manages conversion to strings and avoids copies in the above operations.
> // ...
> ```
>
> Generally, a file comment should begin with an outline of what's contained in hte code you are reading. It should identify the code's main use cases and intended audience (in the preceding case, developers who want to cancatenate strings). Any API that cannot be succinctly described in the first paragraph or two is usually the sign of an API that is not well thought out. Consider breaking the API into separate components in those cases.
>
> _source: Software Engineering at Google page 194_

It was never clear to me what should be included in file comments until I read this section of the book. I used to think that the class name should be suffice to show what the file is about. But it looks like we should also include the overview of the public functions (i.e. APIs) included in the file.

### Class Comments

> Most modern programming languages are object oriented. Class comments are therefore more importrant for defining the API "objects" in use in a codebase. All public ckasses (and structs) at Google must contain a class comment describing the class/struct, importatnt methods of that class, and the purpose of the class. Generally, class comments should be "nouned" wutg documentation emphasizing their object aspect. That is, say, "The Foo class contains x, y, z, allows you to do Bar, and has the following Baz aspects," and so on.
>
> Class comments should generally begin with a comment of the following form:
>
> ```cpp
> // --------
> // AlphaNum
> // --------
> //
> // The AlphaNum class acts as the main parameter type for StrCat() and StrAppend(), providing efficient conversion of numeric, boolean, and hexadecimal values (through the Hex type) into string.
> ```
>
> _source: Software Engineering at Google page 194_

In the case the file only contains a class, rather than list of static methods, then I think file comments are unnecessary and class comments should do.

### Function Comments

> All free functions, or public methods of a class, at Google must also contain a function comment describing what the function does. Function comments should stress the active nature of their use, beginnig with an indicative verb describing what the function does and what is returned.
>
> Function comments should generally being with a comment of the following form:
>
> ```cpp
> // StrCat()
> //
> // Merged the given strings or numbers, using no delimiter(s), returning the merged result as a string.
> ```
>
> _source: Software Engineering at Google page 195_

Notice there are some redundency in function comments and class comments. In production code, it's important not to repeat yourself ([DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)). However, repetition in documentation is good because it helps readers understand how different components of the system connect together.

> Most engineers loathe redundancy, and with good reason. But in documentation, redundancy is often useful. An important point buried within a wall of text can be difficult to remember or tease out. On the other hand, placing that point at a more prominent location early can lose context provided later on. Usually, the solution is to introduce and summarize the point within an introductory paragraph, and then use the rest of the section to make your case in a more detailed fashion. In this case, redundancy helps the reader understand the importance of what is being stated.
>
> _source: Software Engineering at Google page 202_

The quote above is about documentation, but I think it's also applicable to class comments and function comments. Class comments are like the introduction and conclusion. Function comments are like the body of the documentation.

Programming languages like C/C++ have header vs source file distinction. According to Google's C++ style guide,

> ... comments describing the use of the class should go together with its interface definition; commments about the class operation and implementation should accompany the implementation of the class's methods.
>
> _source: [Google C++ Style Guide](https://google.github.io/styleguide/cppguide.html#Class_Comments)_

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

### Testing on the Toilet

> Of all the methods the Testing Grouplet used to try to improve testing at Google, perhaps none was more off-beat than Testing on the Toilet (TotT). The goal of TotT was fairly simple: actively raise awareness about testing across the entire company. The question is, what's the best way to do that in a company with employees scattered around the world?
>
> The Testing Grouplet considered the idea of a regular email newsletter, but given the heavy volume of email everyone deals with at Google, it was likely to become lost in the noise. After a little bit of brainstorming, someone prosed the idea of posting flyers in the restroom stalls as a joke. We quickly recognized the genius in it: the bathroom is one place that everyone must visit at lease once each day, no matterwhat. Joke or not, the idea was cheap enough to implement that it had to be tried.
>
> In April 2006, a short writeup covering how to imorove testing in Python appeared in restroom stalls across Google. This first episode was posted by a small band of colunteers. To say the reaction was polarized is an understatement; some saw it as an invation of personal space, and they objected strongly. Mailing lists lit ip with complaints, but the TotT creators were content: the people complaining were still talking about testing.
>
> _source: Software Engineering at Google page 227-228_

I'm quoting this here, so I can use this as a conversation starter 😂.

Also here's the [link](https://testing.googleblog.com/) to TotT.
