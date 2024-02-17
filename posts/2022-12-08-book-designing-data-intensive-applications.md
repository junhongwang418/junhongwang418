---
title: "book: Designing Data-Intensive Applications"
date: "2022-12-08"
---

This is my note/review of [Designing Data-Intensive Applications](https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/).

Here are my key takeaways from the book.

### Convergence of relational and document databases

> A hybrid of the relational and document models is a good route for databases to take in the future.
>
> _source: Designing Data-Intensive Applications chapter 2_

This statement was pretty mind-blowing to me. I originally thought relational database is always the way to go, but the hybrid approach takes advantages of the good parts of relational and document models to complement the cons of each.

In Lisa, we use MySQL but many tables has a [JSON column](https://dev.mysql.com/doc/refman/8.0/en/json.html) called `info`. The original intention of this column was for us to iterate/experiment quickly without performing database migrations. Once we are sure we will need the new data long-term, then we would create a designated column (unfortunately most of the time it stays in `info` column because we generally have more pressing tasks to work on). However, it's actually okay to use JSON column as long as we don't need the index and need all the data in once most of the time.

### OLTP (online transaction processing) and OLAP (online analytical processing)

> - OLTP systems are typically user-facing, which means that they may see a huge volume of requests. In order to handle the load, applications usually only touch a small number of records in each query. The application requests records using some kind of key, and the storage engine uses an index to find the data for the requested key. Disk seek time is often the bottleneck here.
> - Data warehouses and similar analytic systems are less well known, because they are primarily used by business analysts, not by end users. They handle a much lower volume of queries than OLTP systems, but each query is typically very demandin, requring many millions of records to be scanned in a short time. Disk bandwidth (not seek time) is often the bottleneck here, and column-oriented storage is an incresingly popular solution for this kind of workload.
>
> _source: Designing Data-Intensive Applications chapter 3_

At school, I only learned about OLTP. The first time I needed to deal with OLAP (specifically [Snowflake](https://www.snowflake.com/)) at AppFolio, I was so confused because I didn't know the intent of having a separate database with different query language.

### Encoding of Data

> Programs usually work with data in (at least) two different representations:
>
> 1. In memory, data is kept in objects, structs, lists, arrays, hash tables, trees, and so on. These data structures are optimized for efficient access and manipulation by the CPU (typically using pointers).
> 2. When you want to write data to a file or send it over the network, you have to encode it as some kind of self-contained sequence of bytes (for example, a JSON document). Since a pointer wouldn't make sense to any other process, this sequence-of-bytes representation looks quite different from the data structures that are normally used in memory.
>
> Thus, we need some kind of translation between the two representations. The translation from the in-memory representation to a byte sequence is called _encoding_ (also know as _serialization_ or _marshalling_), and the reverse is called _decoding_ (_parsing_, _deserialization_, _unmarshalling_).
>
> _source: Designing Data-Intensive Applications chapter 4_

This is an idea I kinda knew, but didn't know how to put it in words. Hash is used to efficiently read key-value pairs while JSON can be used to send a hash object to a different process, typically across network for web requests.

### DB Driver

> Many data systems also implement some kind of proprietary binary encoding for their data. For example, most relational databases have a network protocol over which you can send queries to the database and get back responses. Those protocols are generally specific to a particular database, and the database vendor provides a driver (e.g. using the ODBC or JDBC APIs) that decodes responses from the database's network protocol into in-memory data structures.
>
> _source: Designing Data-Intensive Applications chapter 4_

I originally thought DB driver is for installing a protocol the database uses. But it makes much more sense that a driver is a layer for encoding/decoding. Different database systems store the serialized data differently.

### Partitioning

Chapter 6 explains how database partitioning (sharding) works in theory. This was a very interesting read because I learned about [B-tree](https://en.wikipedia.org/wiki/B-tree), but not partioning in my database class at UCLA.

Paritioning is done by first splitting data into small chunks via primary key (typically ID). We hash the key with a 32-bit hash function (which returns a number between `0` and `2^32 - 1`), then assign ranges of hash keys to database nodes. Using hash allows us to distribute data evenly across partitions. However, range queries will be inefficient because it mostly will need to get the data from multiple partitions.

This example below assumes 2-bit hash function and 2 partitions.

```
{ id: 1, ... } -> chunk 1 -> partition 1
{ id: 2, ... } -> chunk 2 -> partition 1
{ id: 3, ... } -> chunk 3 -> partition 2
{ id: 4, ... } -> chunk 4 -> partition 2
{ id: 5, ... } -> chunk 1 -> partition 1
```

Secondary indexes are paritioned similarly except it stores the id instead of the actual row.

Rebalancing (adding/removing a partition) is done by redefining the assignments of chunks to partitions.

```
partition 1: chunk 1, chunk 2, chunk 3
partition 2: chunk 4, chunk 5

new partition: steals chunk 3 from partition 1 and keep chunk 1, 2, 4, 5 intact
```

_source: Designing Data-Intensive Applications chapter 6_
