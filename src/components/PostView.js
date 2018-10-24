import React from "react";
import {getFormatDate} from "../utils/date";
import "./PostView.css"
import like from "../images/like.png";

function PostView(props) {
    const {post, editable, onEditClick} = props;
    return (
        <div className="postView">
            <div>
                <h2>{post.title}</h2>
                <div className="mark">
                    <span className="author">{post.author.username}</span>
                    <span>.</span>
                    <span>{getFormatDate(post.updateAt)}</span>
                    {editable ? (
                        <span>
                            .<button onClick={onEditClick}>编辑</button>
                        </span>
                    ): null}
                </div>
                <div className="content">
                    <span>{post.content}</span>
                </div>
                <div className="vote">
                    <span>
                        <img alt="vote" src={like} />
                    </span>
                    <span>{post.vote}</span>
                </div>
            </div>
        </div>
    );
}

export default PostView;