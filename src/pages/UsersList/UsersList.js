import {getAllUsersAction, deleteUserAction} from "../../actions/actionCreators";
import connect from "react-redux/es/connect/connect";
import React, {Component} from 'react';
import "./Users.sass"

const moment = require("moment");

class UsersList extends Component {

    componentDidMount() {
        this.props.getAllUsers();
    }

    renderData() {
        if (this.props.isFetching) {
            return <span>Loading...</span>
        }
        return (
            this.props.users.map((item, index) =>
                <div key={index}>
                    <div className={"Users-Profile"}>
                        <div className={"Users-ProfilePicture"}>
                        </div>
                        <div className={"Users-Info"}>
                            <span className={"Users-FullName"}>{`${item.firstName} ${item.lastName}`}</span>
                            <span className={"Users-Message"}>{item.lastMessage}</span>
                            <div className={"Users-Filter"}></div>
                        </div>
                        <span className={"Users-Age"}>{`${moment().diff(item.birthDate, 'years')} years`}</span>
                    </div>
                    <div className={"Users-Splitter"}>
                    </div>
                </div>
            )
        )
    }


    render() {
        return (
            <div>
                {this.renderData()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {users, error, isFetching} = state.developerReducer;
    return {users, error, isFetching};
};

const mapDispatchToProps = (dispatch) => ({
    getAllUsers: () => dispatch(getAllUsersAction()),
    deleteUser: (user) => dispatch(deleteUserAction(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
