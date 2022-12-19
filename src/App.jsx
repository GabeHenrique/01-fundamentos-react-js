import {Header} from "./components/Header/Header.jsx";
import {Post} from "./components/Post/Post.jsx";
import {Sidebar} from "./components/Sidebar/Sidebar";
import "./global.css";
import styles from "./App.module.css"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/GabeHenrique.png",
      name: "Gabriel Henrique",
      role: "Back-end Developer"
    },
    publishedAt: Date.now(),
    content: [
      {type: "paragraph", content: "Fala galeraa 👋"},
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
      },
      {type: "paragraph", content: "👉 jane.design/doctorcare"}
    ]
  },
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/ang3lls.png",
      name: "Angelina Barboza",
      role: "Back-end Developer"
    },
    publishedAt: Date.now(),
    content: [
      {type: "paragraph", content: "Fala galeraa 👋"},
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
      },
      {type: "paragraph", content: "👉 jane.design/doctorcare"}
    ]
  }
]

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {
            posts.map(post => {
                return (
                  <Post
                    author={post.author}
                    content={post.content}
                    publishedAt={post.publishedAt}
                  />)
              }
            )
          }
        </main>
      </div>
    </div>
  )
}
