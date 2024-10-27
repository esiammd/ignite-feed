import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import { es } from 'date-fns/locale/es'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

export interface PostType {
    id: number;
    author: Author;
    content: Content[];
    publishedAt: Date;
}

interface PostProps {
    post: PostType;
}

export function Post({ post }: PostProps) {
    const [comments, setComments] = useState(["¡Muy bien!"])
    const [newCommentText, setNewCommentText] = useState("")

    const publishedDateFormatted = format(post.publishedAt, "dd 'de' MMMM 'de' y 'a las' HH:mm'h'", {
        locale: es
    })

    const publishedDateRElativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: es,
        addSuffix: true
    })

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault()

        setComments(state => [...state, newCommentText])
        setNewCommentText("")
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity("")
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity("¡Este campo es obligatorio!")
    }

    function deletarComment(commentToDelete: string) {
        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment !== commentToDelete
        })
        setComments(commentsWithoutDeleteOne)
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={post.author.avatarUrl} />
                    
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time
                    title={publishedDateFormatted}
                    dateTime={post.publishedAt.toISOString()}
                >
                    {publishedDateRElativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {post.content.map(line => {
                    if (line.type === "paragraph") {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === "link") {
                        return <p key={line.content}><a href={line.content}>{line.content}</a></p>
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
                        onDeleteComment={deletarComment}
                    />
                ))}
            </div>
        </article>
    )
}