import React from 'react';
import style from "./MyPost.module.css";

type PostPropsType = {
    post: string
    likes: number
}
const Post = (props: PostPropsType) => {
    return (
        <div className={style.post__block}>
            <div className={style.post__text}>
                <span>{props.post}</span>
            </div>
            <div>
                <span>Likes</span>
                <span>{props.likes}</span>
            </div>
        </div>
    );
};

export default Post;