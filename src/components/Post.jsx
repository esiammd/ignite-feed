import PropTypes from 'prop-types'
import { format, formatDistanceToNow } from 'date-fns'
import { es } from 'date-fns/locale/es'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

export function Post({ author, content, publishedAt }) {
    const publishedDateFormatted = format(publishedAt, "dd 'de' MMMM 'de' Y 'a las' HH:mm'h'", {
        locale: es
    })

    const publishedDateRElativeToNow = formatDistanceToNow(publishedAt, {
        locale: es,
        addSuffix: true
    })

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
                {content.map((line, index) => {
                    if (line.type === 'paragraph') {
                        return <p key={index}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={index}><a href={line.content}>{line.content}</a></p>
                    }
                })}
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

Post.propTypes = {
    author: PropTypes.objectOf(
        PropTypes.string,
        PropTypes.string,
        PropTypes.string,
    ),
    content: PropTypes.arrayOf(
        PropTypes.objectOf(
            PropTypes.string,
            PropTypes.string,
        )
    ),
    publishedAt: PropTypes.instanceOf(Date),
}