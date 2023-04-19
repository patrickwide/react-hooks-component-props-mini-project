import React from "react";
import blogData from "../data/blog";

function Header(props) {
  return (
    <header>
      <h1>{props.blogName}</h1>
    </header>
  );
}

function About(props) {
  const { image = "https://via.placeholder.com/215", aboutText } = props;
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{aboutText}</p>
    </aside>
  );
}

function ArticleList(props) {
  const { posts } = props;
  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          preview={post.preview}
          date={post.date}
          minutes={post.minutes}
        />
      ))}
    </main>
  );
}

function Article(props) {
  const { title, date = "January 1, 1970", preview, minutes } = props;
  // calculate the number of coffee cups or bento boxes needed based on estimatedTime
  let cupsOrBoxes = Math.ceil(minutes / (minutes >= 30 ? 10 : 5));
  const emoji = minutes >= 30 ? "🍱" : "☕️";
  const emojis = emoji.repeat(cupsOrBoxes);

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {emojis} {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}

function App() {
  const { name, about, posts } = blogData;
  return (
    <div className="App">
      <Header blogName={name} />
      <About {...about} />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;
