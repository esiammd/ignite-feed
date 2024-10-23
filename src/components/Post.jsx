import { Comment } from './Comment'

import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img
                        className={styles.avatar}
                        src="https://avatars.githubusercontent.com/u/30005569?s=400&u=2234455a3344c87f123e74c90469bd27d93b507e&v=4"
                    />
                    
                    <div className={styles.authorInfo}>
                        <strong>Maíse Damasceno</strong>
                        <span>Desarrolladora Fullstack</span>
                    </div>
                </div>

                <time
                    title="22 de Octubre de 20224 a las 16:05h"
                    dateTime="2024-10-22 16:05:00"
                >
                    Publicado hace 1h
                </time>
            </header>

            <div className={styles.content}>
                <p>Hola a todos 👋</p>
                <p>Acabo de subir otro proyecto a mi portafolio. El nombre del proyecto es Ignite Feed 🚀</p>
                <p>👉 <a href="">esiammmd/ignitefeed</a></p>
                <p>
                    <a href="">#nuevoproyecto</a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deja tus comentarios</strong>

                <textarea placeholder="Escribe un comentario..." />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
            </div>
        </article>
    )
}