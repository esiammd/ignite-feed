import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/esiammd.png',
      name: 'Maíse Damasceno',
      role: 'Desarrolladora Fullstack'
    },
    content: [
      { type: 'paragraph', content: 'Hola a todos 👋' },
      { type: 'paragraph', content: 'Acabo de subir otro proyecto a mi portafolio. El nombre del proyecto es Ignite Feed 🚀' },
      { type: 'link', content: 'https://github.com/esiammd/ignite-feed' },
    ],
    publishedAt: new Date('2024-10-23 18:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/selarep.png',
      name: 'Javier Perales',
      role: 'Desarrollador Fullstack'
    },
    content: [
      { type: 'paragraph', content: 'Hola a todos 👋' },
      { type: 'paragraph', content: 'Acabo de subir otro proyecto a mi portafolio. El nombre del proyecto es Catalog Invaders 🚀' },
      { type: 'link', content: 'https://github.com/selarep/catalog-invaders-coding-challenge' },
    ],
    publishedAt: new Date('2024-10-24 18:05:00')
  }
]

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  )
}
