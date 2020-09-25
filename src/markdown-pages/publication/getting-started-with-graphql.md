---
slug: "/publication/getting-started-with-graphql"
title: "Getting Started with GraphQL"
---

I took a class at UCLA in which the professor invited a guest from industry to introduce GraphQL. I thought it's such an interesting technology to learn because it changes the way we see APIs. I thought it's cool that you can make a query from the front-end to get what you want from the server. Since it was a pretty new technology, I decided to give back to the community by documenting my learning process of GraphQL.

Getting Started with GraphQL consists of 5 parts as follows:

1. <a href="https://medium.com/@ionejunhong/getting-started-with-graphql-a1cc7951ef39?source=friends_link&sk=4785daf7f0bc80f7d25150f3a903932d">Introduction</a>
2. <a href="https://medium.com/better-programming/getting-started-with-graphql-5cd8e7c66909?source=friends_link&sk=1ca5c58e69b339b4736f258bb9ba850f">Back End</a>
3. <a href="https://medium.com/@ionejunhong/getting-started-with-graphql-54bfa51a848f?source=friends_link&sk=f48adbca4d28f422a73060fef671dc55">Front End</a>
4. <a href="https://medium.com/@ionejunhong/getting-started-with-graphql-a281b14a560d?source=friends_link&sk=065e2e6473674e6203a4bdb35fedd77e">Basic Features</a>
5. <a href="https://medium.com/@ionejunhong/getting-started-with-graphql-77f03d611136?source=friends_link&sk=08d24543d3ef0d724748c84e4e54e79e">Deployment</a>

At the end of this series, I built a web application called Jflix, where you can view my favorites movies and TV shows. You can check out the demo <a href="https://jflix.herokuapp.com/">here</a>. It's live!

I was once asked "What is GraphQL?" during a technical interview (because of this project). I wasn't prepared for this question although I wrote the series. I'm going to write down my answer here, so that next time someone asks me the same question, I can ace it:)

## 🤔 Why GraphQL?

Before we talk about what GraphQL is, let's talk about why we need it and what kind of problems GraphQL solves. Traditionally, we use REST API, where the back-end provides API endpoint and we just use whatever back-end provides on the front-end. There is a limitation with REST API. Say you have a page with list of movies to show with endpoint `/movies`.

```json
{
  "movies": [
    {
      "title": "Bird Box"
    },
    {
      "title": "What Happened to Monday"
    },
    ...
  ]
}
```

Now you have another page with a list of movies, but also with the description for every movie. There is two approaches to this.

1. Update the endpoint "/movies" to also return movie description.
2. Create another endpoint "/movie-with-descriptions" that return movie title and description.

There is a problem with either approach. For the first one, we are requesting extra information for the first page (which only needs the titles). For the second approach, we have a scalability issue. For every new endpoint, we need to come up with an endpoint with a reasonable name. Soon enough, we will have hard time coming up with a good name (e.g. `movie/id/details/likes/id`). This is exactly the problem GraphQL tries to solve.

## 🤓 What is GraphQL?

In stead of letting server to decide what to provide, we send a query to the server telling it what we want as follows:

```json
{
    movies {
        title
    }
}
```

This tells the server that we want a list of movies, and we only need the title property of a movie. If we want the description as well, then we can just send a query that says so.

```json
{
    movies {
        title
        description
    }
}
```

## 😮 How does GraphQL work?

Server needs to know the graph structure of the data to process such a dynamic request from client.

```javascript
const MovieType = new GraphQLObjectType({
  name: "Movie",
  fields: () => ({
    title: { type: GraphQLString },
    description: { type: GraphQLString },
  }),
})
```

Once the graph data structure is constructed, we tell server where the root of the graph is. This is sort of like the endpoint from REST API.

```javascript
const RootQueryType = new GraphQLObjectType({
  name: "RootQuery",
  fields: () => ({
    movies: {
      type: new GraphQLList(MovieType),
      resolve: async (parentValue, args) => {
        return await Movie.find({}) // return data
      },
    },
  }),
})
```

If the client request only the title, the server returns `data.title`. If the client request both title and description, then it returns `data.title` and `data.description`.

The beauty of GraphQL does not end here. Suppose a movie object has a foreign key to a MovieGenre object, which contains name (genre name) and list of movies with that genre.

```json
{
  "1": {
    "name": "Action",
    "movie_ids": [1, 3, 17]
  },
  ...
}
```

Then we can modify MovieType as follows to allow it to return rating data if requested.

```javascript
const MovieType = new GraphQLObjectType({
  name: "Movie",
  fields: () => ({
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    genres: {
      type: new GraphQLList(MovieGenreType),
      resolve: async (parentValue, args) => {
        return await MovieGenre.find({
          _id: { $in: parentValue.genre_ids },
        })
      },
    },
  }),
})
```

For example, we can do something like this.

```json
{
    movies {
        title
        description
        genres {
            name
        }
    }
}
```

This is requesting title, description, and genre name for each movie.

For more details about the implementation and more examples, check out the series linked above!
