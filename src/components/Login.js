import React, { Component } from "react";
import { Redirect } from "react-router-dom"
import { post } from "../utils/request";
import url from "../utils/url";
import "./Login.css"

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            redirectToReferrer: false // 是否重定向到之前的页面
        };
    }

    // 处理用户名和密码变化
    handleChange = (e) => {
        const name = e.target.name;
        if (name === "username") {
            this.setState({
                username: e.target.value
            });
        } else if (name === "password") {
            this.setState({
                password: e.target.value
            });
        } else {
            // do nothing
        }
    }

    // 提交登录表单
    handleSubmit = (e) => {
        e.preventDefault();
        const username = this.state.username;
        const password = this.state.password;
        if (username.length === 0 || password.length === 0) {
            alert("用户名或密码不能为空！");
            return;
        }

        const params = {
            username,
            password
        }

        // 向服务器端请求登录
        post(url.login(), params).then(data => {
            if (data.error) {
                alert(data.error.message || "login failed");
            } else {
                // 保存登录信息到sessionStorage
                sessionStorage.setItem("userId", data.userId);
                sessionStorage.setItem("username", username);
                // 登录成功后，设置redirectToReferrer为true
                this.setState({
                    redirectToReferrer: true
                });
            }
        });
    }

    render() {
        const { from } = this.props.location.state || {from: {pathname: "/"}};
        const {redirectToReferrer} = this.state;
        
        // 登录成功后，redirectToReferrer设置为true，使用Redirect实现页面挑战
        if (redirectToReferrer) {
            return <Redirect to={from} />;
        }
         return (
            <form className="login" onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        用户名：
                        <input type='text' name='username' 
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        密码：
                        <input type='password' name='password'
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </label>
                </div>
                <input type='submit' value='登录' />
            </form>
        );
    }
}

export default Login