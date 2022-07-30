import React, {ChangeEvent} from 'react';
import s from './PostFrom.module.css'
import ButtonBlue from "../../../lib/ButtonBlue/ButtonBlue";
import {store, changeMessagePostAC, addPostAC} from "../../../state/state";


type PostFormPropsType = {
    messagePost: string
}

const PostForm = (props: PostFormPropsType) => {


    const onClickAddPostHandler = () => {
        store.dispatch(addPostAC(props.messagePost))
    }
    const onChangePostHandler = (e: ChangeEvent<HTMLInputElement>) => {
        store.dispatch(changeMessagePostAC(e.currentTarget.value))
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


