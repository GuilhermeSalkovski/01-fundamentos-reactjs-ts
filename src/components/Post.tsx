import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    // id: number;
    type: 'paragraph' | 'link';
    content: string;

}

export interface PostType {
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface PostProps {
    post: Post;
}

// estado = variáveis que eu quero que o componente monitore

export function Post({ post }:PostProps) {
    const [comments, setComments] = useState([
        'Post da hora, hein?!'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    console.log(newCommentText)

    const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    // Start functions names with 'handle' if it is supposed to manage an user action
    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault()

        // const newCommentText = event.target.comment.value

        // Não passa somente o novo valor a ser incluído. Passa o novo estado/conteúdo de todo o array comments
        // => Imutabilidade
        setComments([...comments, newCommentText])

        // Programação imperativa: diz o que deve ser feito, interferindo em elementos diretos =>
        // event.target.comment.value = ''

        // Programação declarativa: estabelece condições para o resultado final =>
        setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    function deleteComment(commentToDelete: string) {
        // imutabilidade -> as variáveis não sofrem mutação, nós criamos um novo valor (um novo espaço na memória)
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })

        setComments(commentsWithoutDeletedOne)
    }

    const isNewCommentEmpty = newCommentText.length === 0;

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
                <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {post.content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link'){
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}

            </div>
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    name="comment"
                    placeholder="Deixe um comentário"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button
                        type="submit"
                        disabled={isNewCommentEmpty}>
                            Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map( comment => {
                    return (
                        < Comment
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
    )
}