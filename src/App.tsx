import { Header } from "./components/Header";
import { Post, PostType} from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';
import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/GuilhermeSalkovski.png',
      name: 'Guilherme Salkovski',
      role: 'Software Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: `Acabei de subir mais um projeto no meu portifa.
                                      É um projeto que fiz no NLW Return,
                                      evento da Rocketseat. O nome do projeto é DoctorCare 🚀`},
      { type: 'link', content: 'guilherme.aloalo/doctorcare'},
      // '#novoprojeto ',
      // '#nlw',
      // '#rocketseat '
    ],
    publishedAt: new Date('2023-05-30 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @ Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: `Acabei de subir mais um projeto no meu portifa.
                                      É um projeto que fiz no NLW Return,
                                      evento da Rocketseat. O nome do projeto é DoctorCare 🚀`},
      { type: 'link', content: 'guilherme.aloalo/doctorcare'},
      // '#novoprojeto ',
      // '#nlw',
      // '#rocketseat '
    ],
    publishedAt: new Date('2023-06-03 10:00:00')
  }
];

// Iteraçao!!!
export function App() {
    return (
        <div>
            <Header />
            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    {posts.map(post => {
                        return (
                        < Post
                            key={post.id}
                            post={post}
                        />
                        )
                    })}
                </main>
            </div>
        </div>
    )
}

