import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { client } from "./api/graphql/apolloConfig";
import UsersList from './pages/UsersList/UsersList';
import UserProfile from './pages/UserProfile/UserProfile';
import CreateAccount from './pages/CreateAccount/CreateAccount';

class Main extends Component {
    render() {
        return (
            <div>MAIN</div>
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
                  <li><Link to="/users">UsersList</Link></li>
                  <li><Link to="/create-account">CreateAccount</Link></li>
              </ul>
              <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/users" component={UsersList} />
                <Route exact path="/users/:id" component={UserProfile} />
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
