export enum Topic {
  Java,
  TypeScript,
  React,
  NextJS,
  Ruby,
  Rails,
  GraphQL,
  MySQL,
  Jetty,
  Python,
  MaterialUI,
  RxSwift,
  ReSwift,
  Swift,
  PHP,
  AWS,
  Terrraform,
}

export function topicDisplayName(topic: Topic): string {
  switch (topic) {
    case Topic.Java:
      return "java";
    case Topic.TypeScript:
      return "typescript";
    case Topic.React:
      return "react";
    case Topic.NextJS:
      return "nextjs";
    case Topic.Ruby:
      return "ruby";
    case Topic.Rails:
      return "rails";
    case Topic.GraphQL:
      return "graphql";
    case Topic.MySQL:
      return "mysql";
    case Topic.Jetty:
      return "jetty";
    case Topic.Python:
      return "python";
    case Topic.MaterialUI:
      return "material-ui";
    case Topic.RxSwift:
      return "rxswift";
    case Topic.ReSwift:
      return "reswift";
    case Topic.Swift:
      return "swift";
    case Topic.PHP:
      return "php";
    case Topic.AWS:
      return "aws";
    case Topic.Terrraform:
      return "terraform";
  }
}

export function topicLink(topic: Topic): string {
  switch (topic) {
    case Topic.Java:
      return "https://www.java.com/en/";
    case Topic.TypeScript:
      return "https://www.typescriptlang.org/";
    case Topic.React:
      return "https://react.dev/";
    case Topic.NextJS:
      return "https://nextjs.org/";
    case Topic.Ruby:
      return "https://www.ruby-lang.org/en/";
    case Topic.Rails:
      return "https://rubyonrails.org/";
    case Topic.GraphQL:
      return "https://graphql.org/";
    case Topic.MySQL:
      return "https://www.mysql.com/";
    case Topic.Jetty:
      return "https://eclipse.dev/jetty/";
    case Topic.Python:
      return "https://www.python.org/";
    case Topic.MaterialUI:
      return "https://mui.com/material-ui/";
    case Topic.RxSwift:
      return "https://github.com/ReactiveX/RxSwift";
    case Topic.ReSwift:
      return "https://reswift.github.io/ReSwift/master/";
    case Topic.Swift:
      return "https://www.swift.org/";
    case Topic.PHP:
      return "https://www.php.net/";
    case Topic.AWS:
      return "https://aws.amazon.com/";
    case Topic.Terrraform:
      return "https://www.terraform.io/";
  }
}
