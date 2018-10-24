import React, { Component } from "react";
import { getFormatDate } from "../utils/date";
import "./CommentsView.css"

class CommentsView extends Component {
    render() {
        const { comments } = this.props;
        return (
            <ul className="commentsView">
                {comments.map(item => (
                    <li key={item.id}>
                        <div>{item.content}</div>
                        <div className="sub">
                            <span>{item.author.username}</span>
                            <span>.</span>
                            <span>{getFormatDate(item.updateAt)}</span>
                        </div>
                    </li>
                ))}
            </ul>
        );
    }
}

export default CommentsView;