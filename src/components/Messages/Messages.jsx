import { NavLink } from 'react-router-dom';
import style from './Messages.module.css';
import React from 'react';

//Компонента пользователей
const MessagesUser = (props) => {
    let url = `/messages/${props.id}`;
    return (
        <div className={style["messages-user__item"]}>
            <NavLink to={url}>{props.name}</NavLink>
        </div>
    )
}

//Компонента сообщений пользователей
const MessageList = (props) => {
    return (
        <div className={style["message"]}>{props.message}</div>
    )
}

const Messages = (props) => {

    let textareaRef = React.createRef();

    //Применение метода map для преобразования массива объектов данных
    let messagesUserMap = props.messageUserData.map(el => {
        
        return (
            <MessagesUser id={el.id} name={el.name} /> 
        )
    })

    //Применение метода map для преобразования массива объектов данных
    let messageListMap = props.messageListData.map(el => {
        return (
            <MessageList message={el.message} />
        )
    })

    //Функция добавления поста
    let addPost = () => {
        let str = textareaRef.current.value;
        props.addMessage(str);
    }

    //Функция обновления textarea    
    let updateMessage = () => {
        let letter = textareaRef.current.value;
        props.updateMessage(letter);
    }

    //Отрисовка
    return (
        <section className={style.messages}>
            <div className={style["messages-user"]}>
                {messagesUserMap}
            </div>

            <div className={style["messages_dialog"]}>

                {messageListMap}

                <textarea ref={textareaRef} value={props.strTextarea} onChange={updateMessage} name="#" id="#"></textarea>
                <button onClick={addPost} type='button'>Отправить</button>
            </div>
        </section>
    )
}

export default Messages;