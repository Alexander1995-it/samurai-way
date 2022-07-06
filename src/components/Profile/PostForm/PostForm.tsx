import React from 'react';
import s from './PostFrom.module.css'
import ButtonBlue from "../../../lib/ButtonBlue/ButtonBlue";
import Input from "../../../lib/Input/Input";

const PostForm = () => {
    const onClickAddPostHandler = () => {
        console.log('add')
    }
    return (
        <div className={s.postForm__block}>
            <div className={s.postForm__title}>
                Add post:
            </div>
            <div className={s.input__block}>
                <Input value={''} placeholder={'Add post'}/>
            </div>
            <div className={s.btn__block}>
                <ButtonBlue onClick={onClickAddPostHandler}>Add post</ButtonBlue>
            </div>


        </div>
    );
};

export default PostForm;