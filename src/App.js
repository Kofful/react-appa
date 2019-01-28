import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { client } from "./api/graphql/apolloConfig";
import UsersList from './pages/UsersList/UsersList';

class Main extends Component {
    render() {
        return (
            <div>MAIN</div>
        );
    }
}

class UserProfile extends Component {
    render() {
        console.log(typeof parseInt(this.props.match.params.id));
        return (
            <div>UserProfile</div>
        );
    }
}



class Login extends Component {
    render() {
        return (
            <div>Login</div>
        );
    }
}

class CreateAccount extends Component {
    render() {
        return (
            <div>CreateAccount</div>
        );
    }
}

class NotFound extends Component {
    render() {
        return (
            <div>NotFound</div>
        );
    }
}

class App extends Component {
  render() {
    return (
        <ApolloProvider client={client}>
          <Router>
            <>{/*OR <React.Fragment>*/}
              <ul>
                  <li><Link to="/">Main</Link></li>
                  <li><Link to="/settings">Settings</Link></li>
                  <li><Link to="/users">UsersList</Link></li>
                  <li><Link to="/users/1">UserProfile</Link></li>
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/create-account">CreateAccount</Link></li>
              </ul>
              <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/settings" component={UserProfile} />
                <Route exact path="/users" component={UsersList} />
                <Route exact path="/users/:id" component={UserProfile} />
                <Route path="/login" component={Login} />
                <Route path="/create-account" component={CreateAccount} />
                <Route component={NotFound} />
              </Switch>
            </>
          </Router>
        </ApolloProvider>
    );
  }
}

export default App;
