import { useState } from 'react'
import { ThumbsUp, Trash } from '@phosphor-icons/react'

import { Avatar } from './Avatar'

import styles from './Comment.module.css'

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0)

    function handleDeletecomment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount(state => state + 1)
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/esiammd.png" />

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

                        <button
                            onClick={handleDeletecomment}
                            title="Eliminar comentario"
                        >
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={20} />
                        Me gusta <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}