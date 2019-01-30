import {getAllUsersAction, createAccountAction} from "../../actions/actionCreators";
import connect from "react-redux/es/connect/connect";
import React, {Component} from 'react';

class CreateAccount extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: ""
        }
    }

    render() {
        return (
            <div>
                <input typ="text" value={this.state.firstName} onChange={(e) => this.setState({firstName: e.target.value})}></input>
                <input typ="text" value={this.state.lastName} onChange={(e) => this.setState({lastName: e.target.value})}></input>
                <input typ="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}></input>

                <button onClick={() => this.props.CreateAccount({...this.state})}>CreateAccount</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    CreateAccount: () => dispatch(createAccountAction())
});

export default connect(null, mapDispatchToProps)(CreateAccount);
