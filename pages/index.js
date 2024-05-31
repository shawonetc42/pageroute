// pages/index.js

import axios from "axios";
import Head from "next/head";
import Link from "next/link";

export async function getStaticProps() {
  // Fetch data from JSONPlaceholder API
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const posts = response.data;

  return {
    props: { posts }, // Will be passed to the page component as props
  };
}

function HomePage({ posts }) {
  return (
    <div>
      <Head>
        <title>Blog Posts</title>
        <meta
          name="description"
          content="A list of blog posts from JSONPlaceholder."
        />
      </Head>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              {post.title}
            </Link>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
