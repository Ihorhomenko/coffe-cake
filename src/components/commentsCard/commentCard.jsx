import "./commentsCard.css"

const CommentCard = ({comments}) => {
    return (
        <ul className="comment-cards">
            {comments.map((el) => {
                return (
                    <li className="comment-card-item">
                        <div className="comment-card-logo"></div>
                        <p className="comment-card-name">{el.name}</p>
                        <p className="comment-card-old">{el.old} years</p>
                        <p className="comment-card-text">{el.text}</p>
                    </li>
            )
            })
        }
        </ul>
    )
}

export default CommentCard