import CommentCard from "components/commentsCard/commentCard"
import "./comments.css"
import comments from "../commentsCard/comments.json"

const Comments = () => {
    return (
        <div className="comments-container">
            <div className="about-text">
                <h2 className="about-text-title">Що Люди Гворять <span className="about-text-title__selected">Про Нас</span></h2>
                <p className="about-text-content"> 
                    Ми дуже раді, якщо ви задоволені нашими послугами та продуктами, можете залишити відгук про нас. А поки давайте почитаємо відгуки від клієнтів, які купили наші продукти.</p>

                <button className="btn-add-comment" type="button">Залишити відгук</button>
            </div>
            <CommentCard comments={comments}/>
        </div>
    )
}

export default Comments