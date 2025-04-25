/* import profile_img from '../../assets/images/profile-img.jpg'; */
import userLogo from './../../assets/images/user-logo.png';
import comment_icon from '../../assets/images/comment-icon.png'
import style from './Profile.module.css';
import React from 'react';


const ProfileComment = (props) => {
    return (
        <div class={style["profile-comments__item"]}>
            <img src={comment_icon} alt="Имя" />
            <p class={style["comment"]}>{props.message}</p>
        </div>
    )
}

const Profile = (props) => {
    
    let strArea = React.createRef();
    /* let imgProfile = props.profile.photos.large; */

    //Добавление поста
    let addPost = () => {
        let str = strArea.current.value;
        /* props.addPost(str); */
        /* props.dispatch({type: "addPost", commentMessage: str}); */
        props.addPost(str);
    }

    //Обновление поля textarea
    let onchangeTextarea = () => {
        let str = strArea.current.value;
        /* props.updateTextareaProfile(str); */
        /* props.dispatch({type: "updateTextareaProfile", simbolTextarea: str}); */
        props.updateTextareaProfile(str);
    }

    //Удаление поста
    let deletePost = () => {
        props.deletePost();
    }

    let profileCommentMap = props.profilePage.postData.map(el => {
        return (
            <ProfileComment
                id={el.id}
                message={el.message}
                count={el.count} />
        )
    })

    return (
        <section class={style.profile}>

            <div class={style["profile-content"]}>

                <div class={style["profile-img"]}>
                    <img src={props.profile == null || props.profile.photos.large == null ? userLogo : props.profile.photos.large} alt="profile-img" />
                </div>

                <div class={style["profile-content__item"]}>
                    <div class={style["profile-status"]}>
                        Статус: <span>Мой статус</span>
                    </div>
                    <div class={style["profile-name"]}>
                        Имя: <span>Мое имя</span>
                    </div>
                    <div class={style["profile-message"]}>
                        <textarea name="#" id="#" class={style["textarea-message"]} ref={strArea} value={props.profilePage.defaultValueTextarea} onChange={onchangeTextarea}></textarea>
                        <button type="button" onClick={addPost} class={style["profile-message-add"]}>Добавить пост</button>
                        <button type="button" onClick={deletePost} class={style["profile-message-delete"]}>Удалить пост</button>
                    </div>
                </div>
                
            </div>
            <div class={style["profile-comments"]}>
                <h2>Комментарий</h2>

                {profileCommentMap}

            </div>

        </section>
    )
}

export default Profile;

