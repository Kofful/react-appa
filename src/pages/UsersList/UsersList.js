import {getAllUsersAction, deleteUserAction} from "../../actions/actionCreators";
import connect from "react-redux/es/connect/connect";
import React, {Component} from 'react';

class UsersList extends Component {

    componentDidMount() {
        this.props.getAllUsers();
    }

    renderData() {
        if(this.props.isFetching) {
            return <span>Loading...</span>
        }
        return (
            this.props.users.map(user => {
                const deleteUser = () => {
                    this.props.deleteUser(user);
                };
            return <span onClick={deleteUser} key={user._id}>{JSON.stringify(user)}</span>})
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
