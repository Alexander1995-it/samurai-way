import React from 'react';
import style from './MyPost.module.css'
import Post from "./Post";
import PostForm from "../PostForm/PostForm";
import {MyPostType} from "../../../state/state";

type MyPostsPropsType = {
    messagePost: string
    myPosts: MyPostType[]
    addPost: (post: string) => void
    changePostText: (text: string) => void

}

const MyPosts = (props: MyPostsPropsType) => {

    return (
        <div className={style.myPosts__block}>
            <PostForm changePostText={props.changePostText} messagePost={props.messagePost}  addPost={props.addPost} />
            <div className={style.myPosts__title}>
                My posts:
            </div>
            {props.myPosts.map(item => <div key={item.id}>
                <Post likes={item.likes} post={item.post}/>
            </div>)}
        </div>
    );
};

export default MyPosts;