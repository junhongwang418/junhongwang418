---
title: "Book: Software Engineering at Google"
date: 2022-11-10
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

We follow the same documentation guideline at Dynasty. Function comments usually doesn't include special tags like `@param` or `@returns`. It's simply a markdown comment.

```java
// Do something to the given foo and returns the 
// processed foo.
// 
// If foo is null, it throws NullPointerException. 
public String doSomething(String foo) {
  ...
}
```