import React from 'react';
import { connect } from "react-redux";
import Users from "./Users";
import { setUserAC, followAC, unfollowAC, setCurrentPageAC, setUsersTotalCountAC, toggleIsFetching } from './../../redux/usersPage-reducer.js';
import axios from 'axios';
import Preloader from '../common/Preloader/Preloader.jsx';


class UsersAPIComponent extends React.Component {
    componentDidMount() {
        //Параллельно с запросом делаем изменение в state для отображения preloader
        this.props.toggleIsFetching(true);
        //Запрос на сервер
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {
            //После успешного запроса убираем loader
            this.props.toggleIsFetching(false);
            //Заполняем массив usersData
            this.props.setUsers(response.data.items);
            //Общее кол-во элементов
            this.props.setTotalUsersCount(response.data.totalCount - 27010);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        //Параллельно с запросом делаем изменение в state для отображения preloader
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((response) => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return (<>
            {this.props.isFetching && <Preloader />}
            <Users
                usersData={this.props.usersData}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                setUsers={this.props.setUsers}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                setCurrentPage={this.props.setCurrentPage}
                setTotalUsersCount={this.props.setTotalUsersCount}
                onPageChanged={this.onPageChanged}
            />
        </>
        )

    }
}


let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setUsers(arr) {
            dispatch(setUserAC(arr));
        },
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetching(isFetching))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;