import {testAction} from "../../actions/actionCreators";
import connect from "react-redux/es/connect/connect";
import React, {Component} from 'react';

class UsersList extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.testAction();
    }

    render() {
        return (
            <div>UsersList</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: state.testReducer
    };
};

const mapDispatchToProps = (dispatch) => ({
    testAction: () => dispatch(testAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
