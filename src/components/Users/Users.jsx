import { NavLink } from 'react-router-dom';
import userLogo from './../../assets/images/user-logo.png';
import styles from './Users.module.css';
import React from 'react';


const Users = (props) => {
    //Вычисляем кол-во страниц как отношение Всего пользователей к Количеству пользователей на странице
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    //Наполняем массив числами, которые и будут выступать номерами страниц
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return(
        <div className={styles.users}>
                <div className={styles.pagination}>
                    {pages.map((p) => {
                        return (
                            <span className={props.currentPage === p ? styles.selectedPages : styles.notSelectedPages} onClick={(e) => {
                                props.onPageChanged(p);
                            }}>{p}</span>
                        )
                    })}
                </div>

                {props.usersData.map((user) => {
                    return (
                        <div key={user.id} className={styles['user-item']}>
                            <div>
                                <NavLink to={'/profile/' + user.id}>
                                    <img alt='logo' src={user.photos.small != null ? user.photos.small : userLogo} className={styles["user-photo"]} />
                                </NavLink>
                            </div>
                            <div class={styles["follow-btn"]}>
                                {user.followed
                                    ? <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
                                    : <button onClick={() => { props.follow(user.id) }}>Follow</button>}
                            </div>
                            <div className={styles['user-name']}>{user.name}</div>
                        </div>
                    )
                })}
            </div>
    )
}


export default Users;