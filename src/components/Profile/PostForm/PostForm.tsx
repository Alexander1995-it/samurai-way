import React, {ChangeEvent} from 'react';
import s from './PostFrom.module.css'
import ButtonBlue from "../../../lib/ButtonBlue/ButtonBlue";
import {addPost, changeMessagePost} from "../../../state/state";

type PostFormPropsType = {
    messagePost: string
}

const PostForm = (props: PostFormPropsType) => {


    const onClickAddPostHandler = () => {
        addPost(props.messagePost)


    }
    const onChangePostHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeMessagePost(e.currentTarget.value)
    }

    return (
        <div className={s.postForm__block}>
            <div className={s.postForm__title}>
                Add post:
            </div>
            <div className={s.input__block}>
                <input
                    onChange={onChangePostHandler}
                    value={props.messagePost}
                />
                {/*<Input ref={newPostAdd}  placeholder={'Add post'}/>*/}
            </div>
            <div className={s.btn__block}>
                <ButtonBlue onClick={onClickAddPostHandler}>Add post</ButtonBlue>
            </div>


        </div>
    );
};

export default PostForm;