import PropTypes from 'prop-types'
import { useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import { es } from 'date-fns/locale/es'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

export function Post({ author, content, publishedAt }) {
    const [comments, setComments] = useState(["¡Muy bien!"])
    const [newCommentText, setNewCommentText] = useState("")

    const publishedDateFormatted = format(publishedAt, "dd 'de' MMMM 'de' y 'a las' HH:mm'h'", {
        locale: es
    })

    const publishedDateRElativeToNow = formatDistanceToNow(publishedAt, {
        locale: es,
        addSuffix: true
    })

    function handleCreateNewComment() {
        event.preventDefault()

        setComments(state => [...state, newCommentText])
        setNewCommentText("")
    }

    function handleNewCommentChange() {
        event.target.setCustomValidity("")
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity("¡Este campo es obligatorio!")
    }

    function deletarComment(commentToDelete) {
        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment !== commentToDelete
        })
        setComments(commentsWithoutDeleteOne)
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time
                    title={publishedDateFormatted}
                    dateTime={publishedAt.toISOString()}
                >
                    {publishedDateRElativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === "paragraph") {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === "link") {
                        return <p key={line}><a href={line.content}>{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deja tus comentarios</strong>

                <textarea
                    name="comment"
                    placeholder="Escribe un comentario..."
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => (
                    <Comment
                        key={comment}
                        content={comment}
                        onDeletarComment={deletarComment}
                    />
                ))}
            </div>
        </article>
    )
}

Post.propTypes = {
    author: PropTypes.shape({
        avatarUrl: PropTypes.string,
        name: PropTypes.string,
        role: PropTypes.string,
    }),
    content: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string,
            content: PropTypes.string,
        })
    ),
    publishedAt: PropTypes.instanceOf(Date),
}