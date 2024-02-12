import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.css";

import "./global.css";

// author: {avatar_url: "", name: "", role: ""}
// publishehAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/eduardoenri.png",
      name: "Eduardo Henrique",
      role: "Fron-end",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },

      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. Projeto feito com a Rocketseat",
      },

      { type: "link", content: 'eduardo.front-end' },
    ],
    publishedAt: new Date("2023-12-26 23:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/wesleymonaro.png",
      name: "Wesley Monaro",
      role: "TechLead",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },

      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. Projeto feito com a Rocketseat",
      },

      { type: "link", content: 'wesley.TechLead' },
    ],
    publishedAt: new Date("2023-12-25 23:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
