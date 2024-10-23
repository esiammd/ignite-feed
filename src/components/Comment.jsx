import { ThumbsUp, Trash } from '@phosphor-icons/react'

import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img
                className={styles.avatar}
                src="https://avatars.githubusercontent.com/u/30005569?s=400&u=2234455a3344c87f123e74c90469bd27d93b507e&v=4"
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Maíse Damasceno <span>(tú)</span></strong>
                            <time
                                title="22 de Octubre de 20224 a las 16:05h"
                                dateTime="2024-10-22 16:05:00"
                            >
                                Hace 1h
                            </time>
                        </div>

                        <button title="Eliminar comentario">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>¡Conectemos!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Me gusta <span>03</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}