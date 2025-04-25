import { connect } from "react-redux";
import Messages from "./Messages";
import { updateMessageAC, addMessageAC } from '../../redux/messagesPage-reducer.js';

let mapStateToProps = (state) => {
    return (
        {
            messageUserData: state.messagesPage.messageUserData,
            messageListData: state.messagesPage.messageListData,
            strTextarea: state.messagesPage.strTextarea
        }
    )
}

let mapDispatchToProps = (dispatch) => {
    return (
        {
            addMessage(str) {
                dispatch(addMessageAC(str));
            },
            updateMessage(letter) {
                dispatch(updateMessageAC(letter));
            }
        }
    )
}

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessageContainer;