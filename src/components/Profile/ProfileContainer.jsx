import {addPostAC, updateTextareaProfileAC, deletePostAC, setUserProfileAC} from '../../redux/profilePage-reducer.js';
import { connect } from 'react-redux';
import Profile from './Profile.jsx';
import axios from 'axios';
import React from 'react';
//Для функции withRouter
import { useLocation, useNavigate, useParams } from "react-router-dom";



class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        
        if(!userId) {
            userId = 2;
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then((response) => {
            //Заполняем массив
            this.props.setUserProfile(response.data);
            /* console.log(response.data); */
        });
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profilePage.profile} />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost(str) {
           dispatch(addPostAC(str)); 
        },
        updateTextareaProfile(str) {
            dispatch(updateTextareaProfileAC(str));
        },
        deletePost() {
            dispatch(deletePostAC());
        },
        setUserProfile(arr) {
            dispatch(setUserProfileAC(arr));
        }
    }
}

//Описание функции withRouter
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

//Вызов функции, в переменную попадает контейнерная компонента, но с элементами URL
let withUrlDataContainerComponent = withRouter(ProfileContainer);


export default connect(mapStateToProps, mapDispatchToProps)(withUrlDataContainerComponent);



/* const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer; */

/* export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer); */