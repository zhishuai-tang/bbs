import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "./Header";
import PostList from "./PostList";
import Post from "./Post";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: sessionStorage.getItem("userId"),
            username: sessionStorage.getItem("username")
        };
    }

    // 注销用户
    handleLogout = () => {
        sessionStorage.removeItem("userId");
        sessionStorage.removeItem("username");
        this.setState({
            userId: null,
            username: null
        });
    }

    render() {
        const { match, location } = this.props;
        const {userId, username } = this.state;

        return (
            <div>
                <Header 
                    username={username}
                    onLogout={this.handleLogout}
                    location={location}
                />
                <Route 
                    path={match.url}
                    exact
                    render={props => <PostList userId={userId} {...props} />}
                />
                <Route 
                    path={`${match.url}/:id`}
                    render={props => <Post userId={userId} {...props} />}
                />
            </div>
        );
    }
}

export default Home;