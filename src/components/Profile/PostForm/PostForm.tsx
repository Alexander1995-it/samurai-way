import React, {ChangeEvent} from 'react';
import s from './PostFrom.module.css'
import ButtonBlue from "../../../lib/ButtonBlue/ButtonBlue";


type PostFormPropsType = {
    messagePost: string
    addPost: (post: string) => void
    changePostText: (text: string) => void
}

const PostForm = (props: PostFormPropsType) => {


    const onClickAddPostHandler = () => {
        props.addPost(props.messagePost)

    }
    const onChangePostHandler = (e: ChangeEvent<HTMLInputElement>) => {
       props.changePostText(e.currentTarget.value)
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
            </div>
            <div className={s.btn__block}>
                <ButtonBlue onClick={onClickAddPostHandler}>Add post</ButtonBlue>
            </div>


        </div>
    );
};

export default PostForm;


